<script setup lang="ts">
import { ref } from 'vue'
import { Pause, Play } from '@lucide/vue'
import { orbitTech } from '@/data/orbit'
import { profile } from '@/data/profile'

const orbitPaused = ref(false)
</script>

<template>
  <section id="about" aria-labelledby="about-title" class="relative py-24 lg:py-32">
    <div class="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
      <div data-reveal>
        <figure class="orbit-scene relative mx-auto aspect-square w-full max-w-[520px] overflow-hidden" :class="{ 'orbit-paused': orbitPaused }">
          <div class="orbit-track rounded-full border border-dashed border-border/70" aria-hidden="true"></div>
          <div class="orbit-track orbit-track-inner rounded-full border border-dashed border-border/70" aria-hidden="true"></div>
          <div class="absolute inset-0 grid place-items-center">
            <div class="orbit-portrait aspect-square overflow-hidden rounded-full border-4 border-primary/30 shadow-ember">
              <img src="/simon-portrait.jpg" :alt="profile.name" width="896" height="1088" loading="lazy" decoding="async" class="h-full w-full object-cover" />
            </div>
          </div>
          <div v-for="(tech, index) in orbitTech" :key="tech.name" class="orbit-track pointer-events-none"
            :class="{ 'orbit-track-inner': index % 2 === 0 }"
            :style="{ '--orbit-angle': (index * 60 - 90) + 'deg', '--orbit-duration': (18 + index * 2) + 's' }"
            aria-hidden="true">
            <div class="orbit-rotor absolute inset-0">
              <div class="orbit-label-position">
                <span class="orbit-label glass block whitespace-nowrap rounded-xl px-3 py-1.5 text-xs font-semibold shadow-card" :style="{ color: tech.color }">{{ tech.name }}</span>
              </div>
            </div>
          </div>
          <figcaption class="sr-only">{{ profile.name }} with technologies: {{ orbitTech.map(tech => tech.name).join(', ') }}.</figcaption>
        </figure>
        <div class="flex justify-center motion-reduce:invisible">
          <button type="button" class="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
            :aria-label="orbitPaused ? 'Resume technology orbit animation' : 'Pause technology orbit animation'"
            @click="orbitPaused = !orbitPaused">
            <component :is="orbitPaused ? Play : Pause" class="h-3.5 w-3.5" aria-hidden="true" />
            {{ orbitPaused ? 'Resume animation' : 'Pause animation' }}
          </button>
        </div>
      </div>
      <div data-reveal data-reveal-delay="80" class="space-y-6">
        <div><p class="eyebrow">About me</p><h2 id="about-title" class="text-4xl font-bold leading-tight text-foreground sm:text-5xl">Crafting <span class="text-gradient-ember">delightful</span> interfaces with care.</h2></div>
        <p class="text-lg leading-relaxed text-muted-foreground">I'm Simon — a frontend developer with {{ profile.experience }} years of experience turning ambitious ideas into polished products. My focus is the Vue &amp; Nuxt ecosystem paired with TypeScript and Tailwind, and I obsess over small details: motion, typography, accessibility, and load performance.</p>
        <p class="text-lg leading-relaxed text-muted-foreground">I love collaborating with designers and product teams to ship interfaces that feel inevitable — fast, beautiful, and a joy to navigate. When I'm not coding, you'll find me exploring design trends or contributing to open source.</p>
        <dl class="grid grid-cols-2 gap-4 pt-2">
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Focus</dt><dd class="mt-1 font-semibold">Frontend &amp; UX</dd></div>
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Stack</dt><dd class="mt-1 font-semibold">Vue / Nuxt / TS</dd></div>
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Location</dt><dd class="mt-1 font-semibold">{{ profile.location }}</dd></div>
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Availability</dt><dd class="mt-1 font-semibold">{{ profile.availability }}</dd></div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Reserve room for labels at every point in their orbit, including on phones. */
.orbit-track {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 104px);
  max-width: 400px;
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
}

.orbit-track-inner {
  width: calc((100% - 104px) * 0.88);
  max-width: 300px;
}

.orbit-portrait {
  width: clamp(68px, calc(100% - 236px), 176px);
}

.orbit-rotor {
  transform: rotate(var(--orbit-angle));
  animation: orbit-turn var(--orbit-duration) linear infinite;
}

.orbit-label-position {
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
}

.orbit-label {
  transform: rotate(calc(-1 * var(--orbit-angle)));
  animation: orbit-counter-turn var(--orbit-duration) linear infinite;
}

.orbit-paused .orbit-rotor,
.orbit-paused .orbit-label {
  animation-play-state: paused;
}

@keyframes orbit-turn {
  from { transform: rotate(var(--orbit-angle)); }
  to { transform: rotate(calc(var(--orbit-angle) + 360deg)); }
}

@keyframes orbit-counter-turn {
  from { transform: rotate(calc(-1 * var(--orbit-angle))); }
  to { transform: rotate(calc(-1 * var(--orbit-angle) - 360deg)); }
}

@media (prefers-reduced-motion: reduce) {
  .orbit-rotor, .orbit-label {
    animation: none !important;
  }
}
</style>
