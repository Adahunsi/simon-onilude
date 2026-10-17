<script setup lang="ts">
import { Code2, BriefcaseBusiness, Mail } from '@lucide/vue'
import { navItems } from '@/data/nav'
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border py-12">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div class="min-w-0 sm:col-span-2">
          <a href="#home" class="inline-flex min-h-11 items-center gap-2 font-display text-xl font-bold"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-ember text-base text-primary-foreground">S</span>{{ profile.name }}</a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{{ profile.introduction }}</p>
        </div>
        <div>
          <h2 class="font-sans text-sm font-semibold">Quick links</h2>
          <nav aria-label="Footer navigation" class="mt-3 grid justify-items-start text-sm text-muted-foreground">
            <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" class="inline-flex min-h-11 items-center hover:text-primary">{{ item.label }}</a>
          </nav>
        </div>
        <div>
          <h2 class="font-sans text-sm font-semibold">Connect</h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <a v-if="profile.github" :href="profile.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" class="footer-social"><Code2 class="h-4 w-4" aria-hidden="true" /></a>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" class="footer-social"><BriefcaseBusiness class="h-4 w-4" aria-hidden="true" /></a>
            <a v-if="profile.email.trim()" :href="'mailto:' + profile.email.trim()" aria-label="Email Simon Onilude" class="footer-social"><Mail class="h-4 w-4" aria-hidden="true" /></a>
            <a v-else href="#contact" class="footer-social" aria-label="Contact details"><Mail class="h-4 w-4" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
      <div class="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© {{ year }} {{ profile.name }}. All rights reserved.</p>
        <p>Designed &amp; built with care.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-social {
  @apply grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary;
}
</style>
