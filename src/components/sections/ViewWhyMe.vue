<script setup lang="ts">
import { Code2, Smartphone, Gauge, Eye, MessageSquare, Lightbulb } from '@lucide/vue'
import { whyMe } from '@/data/why-me'

const icons = { Code2, Smartphone, Gauge, Eye, MessageSquare, Lightbulb }
function iconFor(name: string) {
  return icons[name as keyof typeof icons] ?? Code2
}
</script>

<template>
  <section aria-labelledby="why-me-title" class="relative py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div data-reveal class="mb-14 max-w-2xl">
        <p class="eyebrow mb-3">Why work with me</p>
        <h2 id="why-me-title" class="text-4xl font-bold text-foreground sm:text-5xl">The values I build with.</h2>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(item, index) in whyMe" :key="item.title" data-reveal :data-reveal-delay="(index % 3) * 60"
          class="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all duration-500 motion-safe:hover:-translate-y-1 hover:border-primary/50">
          <div aria-hidden="true" class="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-gradient-ember opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"></div>
          <div class="relative">
            <span class="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-gradient-ember group-hover:text-primary-foreground"><component :is="iconFor(item.icon)" class="h-5 w-5" aria-hidden="true" /></span>
            <h3 class="mt-5 text-xl font-bold">{{ item.title }}</h3>
            <p class="mt-2 leading-relaxed text-muted-foreground">{{ item.body }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
