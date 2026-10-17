<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, useTemplateRef } from 'vue'
import { ArrowUpRight, Menu, X } from '@lucide/vue'
import { navItems } from '@/data/nav'

const menuOpen = ref(false)
const activeSection = ref('home')
const scrolled = ref(false)
const menuButton = useTemplateRef<HTMLButtonElement>('menuButton')
const header = useTemplateRef<HTMLElement>('header')
let observer: IntersectionObserver | undefined
let desktop: MediaQueryList | undefined

function closeMenu(returnFocus = false) {
  menuOpen.value = false
  if (returnFocus) menuButton.value?.focus()
}

function onBreakpoint(event: MediaQueryListEvent) {
  if (event.matches) closeMenu()
}

async function navigateFromMenu(id: string) {
  closeMenu()
  await nextTick()
  const heading = document.getElementById(id)?.querySelector<HTMLElement>('h1, h2')
  if (!heading) return
  heading.setAttribute('tabindex', '-1')
  heading.focus({ preventScroll: true })
  heading.addEventListener('blur', () => heading.removeAttribute('tabindex'), { once: true })
}

function onFocusOut(event: FocusEvent) {
  if (event.relatedTarget instanceof Node && !header.value?.contains(event.relatedTarget)) closeMenu()
}

function onPointerDown(event: PointerEvent) {
  if (event.target instanceof Node && !header.value?.contains(event.target)) closeMenu()
}

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('pointerdown', onPointerDown)
  desktop = window.matchMedia('(min-width: 1024px)')
  desktop.addEventListener('change', onBreakpoint)
  if (!('IntersectionObserver' in window)) return
  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) activeSection.value = entry.target.id
    }
  }, { rootMargin: '-15% 0px -65% 0px' })
  navItems.forEach(({ id }) => {
    const section = document.getElementById(id)
    if (section) observer?.observe(section)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('pointerdown', onPointerDown)
  observer?.disconnect()
  desktop?.removeEventListener('change', onBreakpoint)
})
</script>

<template>
  <header ref="header" class="fixed inset-x-0 top-0 z-50 transition-[padding] duration-300"
    :class="scrolled ? 'py-2' : 'py-4'" @keydown.esc="closeMenu(true)" @focusout="onFocusOut">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-[background-color,box-shadow] duration-300 sm:px-6"
        :class="scrolled ? 'glass shadow-card' : ''">
        <a href="#home" class="flex min-h-11 min-w-11 items-center gap-2 font-display text-lg font-bold" aria-label="Simon, back to home" @click="closeMenu()">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-ember text-primary-foreground shadow-ember">S</span>
          <span class="hidden sm:inline">Simon<span class="text-primary">.</span></span>
        </a>
        <nav class="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <a v-for="item in navItems" :key="item.id" :href="'#' + item.id"
            :aria-current="activeSection === item.id ? 'location' : undefined"
            class="relative inline-flex min-h-11 items-center px-4 py-2 text-sm font-medium transition-colors hover:text-foreground"
            :class="activeSection === item.id ? 'text-primary' : 'text-muted-foreground'">
            {{ item.label }}
            <span aria-hidden="true" class="absolute -bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 bg-primary transition-[width] duration-300"
              :class="activeSection === item.id ? 'w-6' : 'w-0'"></span>
          </a>
        </nav>
        <div class="flex items-center gap-3">
          <a href="#contact" class="hidden min-h-11 items-center gap-2 rounded-xl bg-gradient-ember px-5 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-ember transition-transform duration-300 motion-safe:hover:scale-[1.03] sm:inline-flex" @click="closeMenu()">
            LET'S TALK <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
          </a>
          <button ref="menuButton" type="button" :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            :aria-expanded="menuOpen" aria-controls="mobile-navigation"
            class="grid h-11 w-11 place-items-center rounded-xl border border-border bg-card lg:hidden" @click="menuOpen = !menuOpen">
            <component :is="menuOpen ? X : Menu" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <nav v-show="menuOpen" id="mobile-navigation" aria-label="Mobile navigation" class="glass !bg-popover/95 mt-2 grid max-h-[calc(100dvh-7rem)] gap-1 overflow-y-auto rounded-2xl p-4 lg:hidden">
        <a v-for="item in navItems" :key="item.id" :href="'#' + item.id"
          :aria-current="activeSection === item.id ? 'location' : undefined"
          class="rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground"
          :class="activeSection === item.id ? 'bg-secondary text-primary' : 'text-muted-foreground'"
          @click="navigateFromMenu(item.id)">{{ item.label }}</a>
        <a href="#contact" class="button-primary mt-2 sm:hidden" @click="navigateFromMenu('contact')">
          LET'S TALK <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
        </a>
      </nav>
    </div>
  </header>
</template>
