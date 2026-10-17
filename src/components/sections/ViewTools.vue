<script setup lang="ts">
import { tools } from '@/data/tools'
</script>

<template>
  <section id="tools" aria-labelledby="tools-title" class="relative py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div data-reveal class="mb-14 max-w-2xl">
        <p class="eyebrow mb-3">My stack</p>
        <h2 id="tools-title" class="text-4xl font-bold text-foreground sm:text-5xl">Tools &amp; technologies.</h2>
        <p class="mt-4 text-muted-foreground">The everyday kit I reach for when bringing ideas to the web.</p>
      </div>
      <ul class="flex flex-wrap gap-3 sm:gap-4">
        <li v-for="(tool, index) in tools" :key="tool" data-reveal :data-reveal-delay="(index % 4) * 40"
          class="rounded-2xl border border-border bg-card px-5 py-4 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/60 hover:bg-gradient-ember hover:text-primary-foreground hover:shadow-ember sm:px-7 sm:py-5">
          <span class="font-display text-base font-semibold tracking-tight sm:text-lg">{{ tool }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
