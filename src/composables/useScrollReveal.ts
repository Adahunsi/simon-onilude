import { onMounted, onUnmounted, type Ref } from 'vue'

/** Reveal static page content once, without leaving hidden content on teardown. */
export function useScrollReveal(root: Readonly<Ref<HTMLElement | null>>) {
  const pending = new Set<HTMLElement>()
  const animations = new Set<Animation>()
  let observer: IntersectionObserver | undefined
  let motionPreference: MediaQueryList | undefined
  let container: HTMLElement | null = null

  function reveal(element: HTMLElement, animate = true) {
    if (!pending.delete(element)) return
    observer?.unobserve(element)

    if (animate && !motionPreference?.matches) {
      const delay = Math.min(240, Math.max(0, Number(element.dataset.revealDelay) || 0))
      const animation = element.animate(
        [
          { opacity: 0, transform: 'translateY(24px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 700, delay, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' },
      )
      animations.add(animation)
      animation.onfinish = () => animations.delete(animation)
    }
    element.classList.remove('reveal-pending')
  }

  function revealAll() {
    observer?.disconnect()
    for (const element of pending) element.classList.remove('reveal-pending')
    pending.clear()
    for (const animation of animations) animation.cancel()
    animations.clear()
  }

  function onMotionChange(event: MediaQueryListEvent) {
    if (event.matches) revealAll()
  }

  function onFocus(event: FocusEvent) {
    if (!(event.target instanceof Node)) return
    for (const element of pending) {
      if (element.contains(event.target)) reveal(element, false)
    }
    // A link or form field must be visible immediately when keyboard-focused.
    for (const animation of animations) {
      const target = (animation.effect as KeyframeEffect | null)?.target
      if (target?.contains(event.target)) {
        animation.cancel()
        animations.delete(animation)
      }
    }
  }

  onMounted(() => {
    container = root.value
    motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!container || motionPreference.matches ||
      !('IntersectionObserver' in window) || !('animate' in HTMLElement.prototype)) return

    motionPreference.addEventListener('change', onMotionChange)
    container.addEventListener('focusin', onFocus)
    observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) reveal(entry.target as HTMLElement)
      }
    }, { threshold: 0.12 })

    for (const element of container.querySelectorAll<HTMLElement>('[data-reveal]')) {
      // Leave initially visible content and direct anchor destinations readable.
      if (element.getBoundingClientRect().top < window.innerHeight) continue
      pending.add(element)
      element.classList.add('reveal-pending')
      observer.observe(element)
    }
  })

  onUnmounted(() => {
    revealAll()
    container?.removeEventListener('focusin', onFocus)
    motionPreference?.removeEventListener('change', onMotionChange)
  })
}
