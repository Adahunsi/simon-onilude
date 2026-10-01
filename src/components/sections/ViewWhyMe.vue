<script setup lang="ts">
import { Code2, Smartphone, Gauge, Eye, MessageSquare, Lightbulb } from '@lucide/vue'
import { whyMe } from '@/data/why-me'

const icons = { Code2, Smartphone, Gauge, Eye, MessageSquare, Lightbulb }
function iconFor(name: string) {
  return icons[name as keyof typeof icons] ?? Code2
}
</script>

<template>
  <section aria-labelledby="why-me-title" class="section-spacing border-y border-border/50 bg-card/20">
    <div class="section-container">
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <p class="eyebrow justify-center">Why work with me</p>
        <h2 id="why-me-title" class="section-title">The values I build with.</h2>
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="item in whyMe" :key="item.title" class="rounded-2xl border border-border bg-card p-7">
          <span class="mb-5 grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary"><component :is="iconFor(item.icon)" class="h-5 w-5" aria-hidden="true" /></span>
          <h3 class="text-lg font-bold">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-muted-foreground">{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
