<script setup lang="ts">
import { Code2 } from '@lucide/vue'
import { tools } from '@/data/tools'
</script>

<template>
  <section id="tools" aria-labelledby="tools-title" class="section-spacing">
    <div class="section-container">
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <p class="eyebrow justify-center">My stack</p>
        <h2 id="tools-title" class="section-title">Tools &amp; technologies.</h2>
        <p class="mt-4 text-muted-foreground">The everyday kit I reach for when bringing ideas to the web.</p>
      </div>
      <ul class="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <li v-for="tool in tools" :key="tool" class="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-5 transition-colors hover:border-primary/50 sm:px-5">
          <Code2 class="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <span class="text-sm font-semibold">{{ tool }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
