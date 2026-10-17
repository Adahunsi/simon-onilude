<script setup lang="ts">
import { Award, ArrowUpRight } from '@lucide/vue'
import { certifications } from '@/data/certifications'
</script>

<template>
  <section id="certifications" aria-labelledby="certifications-title" class="relative py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div data-reveal class="mx-auto mb-14 max-w-2xl text-center">
        <p class="eyebrow mb-3 justify-center">Continuous learning</p>
        <h2 id="certifications-title" class="text-4xl font-bold text-foreground sm:text-5xl">Certifications.</h2>
        <p class="mt-4 text-muted-foreground">Learning that supports my craft. Credential details are being updated.</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="(certification, index) in certifications" :key="certification.org + certification.title" data-reveal :data-reveal-delay="(index % 3) * 60"
          class="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 motion-safe:hover:-translate-y-1 hover:border-primary/50 hover:shadow-ember motion-safe:focus-within:-translate-y-1 focus-within:border-primary/50 focus-within:shadow-ember">
          <div class="flex items-start justify-between gap-4">
            <span class="grid h-12 w-12 place-items-center rounded-xl bg-gradient-ember text-primary-foreground shadow-ember"><Award class="h-5 w-5" aria-hidden="true" /></span>
            <span class="text-xs text-muted-foreground">{{ certification.date }}</span>
          </div>
          <h3 class="mt-5 text-lg font-bold leading-snug">{{ certification.title }}</h3>
          <p class="mb-5 mt-1 text-sm text-muted-foreground">{{ certification.org }}</p>
          <a v-if="certification.link && certification.link !== '#'" :href="certification.link" target="_blank" rel="noopener noreferrer" :aria-label="'Verify ' + certification.title + ' (opens in a new tab)'" class="mt-auto inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-primary transition-[gap] group-hover:gap-2">Verify credential <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></a>
          <p v-else class="mt-auto text-xs text-muted-foreground">Verification link coming soon</p>
        </article>
      </div>
    </div>
  </section>
</template>
