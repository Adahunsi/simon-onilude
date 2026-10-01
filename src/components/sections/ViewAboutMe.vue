<script setup lang="ts">
import { Code2 } from '@lucide/vue'
import { orbitTech } from '@/data/orbit'
import { profile } from '@/data/profile'
</script>

<template>
  <section id="about" aria-labelledby="about-title" class="section-spacing border-y border-border/50 bg-card/20">
    <div class="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div class="relative mx-auto aspect-square w-full max-w-[420px]" role="img" :aria-label="'Core technologies: ' + orbitTech.map(tech => tech.name).join(', ')">
        <div class="absolute inset-[12%] rounded-full border border-dashed border-primary/25" aria-hidden="true"></div>
        <div class="absolute inset-[26%] rounded-full border border-border bg-primary/5" aria-hidden="true"></div>
        <div class="absolute inset-[35%] grid place-items-center rounded-3xl border border-primary/30 bg-card shadow-ember" aria-hidden="true">
          <div class="text-center"><Code2 class="mx-auto h-10 w-10 text-primary sm:h-14 sm:w-14" /><span class="mt-2 block font-display text-sm font-bold">Built with care</span></div>
        </div>
        <div v-for="(tech, index) in orbitTech" :key="tech.name"
          class="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-xl border border-border bg-background px-3 py-3 text-xs font-semibold shadow-card sm:px-4 sm:text-sm"
          :style="{ left: (50 + 37 * Math.cos((index * 60 - 90) * Math.PI / 180)) + '%', top: (50 + 37 * Math.sin((index * 60 - 90) * Math.PI / 180)) + '%' }" aria-hidden="true">
          <span class="h-2 w-2 rounded-full" :style="{ backgroundColor: tech.color }"></span>{{ tech.name }}
        </div>
      </div>
      <div class="space-y-6">
        <div><p class="eyebrow">About me</p><h2 id="about-title" class="section-title">Crafting <span class="text-gradient-ember">delightful</span> interfaces with care.</h2></div>
        <p class="text-lg leading-relaxed text-muted-foreground">I'm Simon — a frontend developer with {{ profile.experience }} years of experience turning ambitious ideas into polished products. My focus is the Vue &amp; Nuxt ecosystem paired with TypeScript and Tailwind, and I obsess over small details: motion, typography, accessibility, and load performance.</p>
        <p class="leading-relaxed text-muted-foreground">I love collaborating with designers and product teams to ship interfaces that feel inevitable — fast, beautiful, and a joy to navigate. When I'm not coding, you'll find me exploring design trends or contributing to open source.</p>
        <dl class="grid grid-cols-2 gap-3 pt-2">
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Focus</dt><dd class="mt-1 font-semibold">Frontend &amp; UX</dd></div>
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Stack</dt><dd class="mt-1 font-semibold">Vue / Nuxt / TS</dd></div>
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Location</dt><dd class="mt-1 font-semibold">{{ profile.location }}</dd></div>
          <div class="rounded-2xl border border-border bg-card p-4"><dt class="text-xs text-muted-foreground">Availability</dt><dd class="mt-1 font-semibold">{{ profile.availability }}</dd></div>
        </dl>
      </div>
    </div>
  </section>
</template>
