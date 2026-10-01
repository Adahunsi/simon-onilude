<script setup lang="ts">
import { ArrowUp, Code2, BriefcaseBusiness } from '@lucide/vue'
import { navItems } from '@/data/nav'
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border bg-card/30 py-12">
    <div class="section-container">
      <div class="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <a href="#home" class="inline-flex items-center gap-3 font-display font-bold"><span class="grid h-10 w-10 place-items-center rounded-xl bg-gradient-ember text-primary-foreground">S</span>{{ profile.name }}</a>
          <p class="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{{ profile.introduction }}</p>
        </div>
        <div>
          <h2 class="font-sans text-sm font-semibold">Explore</h2>
          <nav aria-label="Footer navigation" class="mt-4 grid grid-cols-2 gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a v-for="item in navItems" :key="item.id" :href="'#' + item.id" class="hover:text-primary">{{ item.label }}</a>
          </nav>
        </div>
        <div>
          <h2 class="font-sans text-sm font-semibold">Connect</h2>
          <div class="mt-4 flex flex-wrap gap-4 text-muted-foreground">
            <a v-if="profile.github" :href="profile.github" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" class="button-secondary p-3"><Code2 class="h-5 w-5" aria-hidden="true" /></a>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" class="button-secondary p-3"><BriefcaseBusiness class="h-5 w-5" aria-hidden="true" /></a>
            <a href="#contact" class="text-sm hover:text-primary">Get in touch ↗</a>
          </div>
        </div>
      </div>
      <div class="mt-10 flex flex-col justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>© {{ year }} {{ profile.name }}. All rights reserved.</p>
        <a href="#home" class="inline-flex min-h-10 items-center gap-2 hover:text-primary">Back to top <ArrowUp class="h-4 w-4" aria-hidden="true" /></a>
      </div>
    </div>
  </footer>
</template>
