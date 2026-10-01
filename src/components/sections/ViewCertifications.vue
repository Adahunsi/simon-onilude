<script setup lang="ts">
import { Award, ArrowUpRight } from '@lucide/vue'
import { certifications } from '@/data/certifications'
</script>

<template>
  <section id="certifications" aria-labelledby="certifications-title" class="section-spacing border-y border-border/50 bg-card/30">
    <div class="section-container">
      <div class="mx-auto mb-12 max-w-2xl text-center">
        <p class="eyebrow justify-center">Continuous learning</p>
        <h2 id="certifications-title" class="section-title">Certifications.</h2>
        <p class="mt-4 text-muted-foreground">Learning that supports my craft. Credential details are being updated.</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <article v-for="certification in certifications" :key="certification.org + certification.title" class="flex flex-col rounded-2xl border border-border bg-card p-6">
          <div class="flex items-start justify-between gap-4">
            <span class="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary"><Award class="h-6 w-6" aria-hidden="true" /></span>
            <span class="text-xs text-muted-foreground">{{ certification.date }}</span>
          </div>
          <h3 class="mt-5 text-lg font-bold leading-snug">{{ certification.title }}</h3>
          <p class="mb-5 mt-2 text-sm text-muted-foreground">{{ certification.org }}</p>
          <a v-if="certification.link && certification.link !== '#'" :href="certification.link" target="_blank" rel="noopener noreferrer" :aria-label="'Verify ' + certification.title + ' (opens in a new tab)'" class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">Verify credential <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></a>
          <p v-else class="mt-auto text-xs text-muted-foreground">Verification link coming soon</p>
        </article>
      </div>
    </div>
  </section>
</template>
