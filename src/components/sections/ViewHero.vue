<script setup lang="ts">
import { ArrowDown, ArrowUpRight, Download } from '@lucide/vue'
import { profile } from '@/data/profile'
</script>

<template>
  <section id="home" aria-labelledby="hero-title" class="relative flex min-h-screen items-center overflow-hidden bg-hero-glow pb-16 pt-28">
    <div aria-hidden="true" class="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-gradient-ember opacity-25 blur-3xl"></div>
    <div aria-hidden="true" class="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-ember-deep opacity-20 blur-3xl"></div>
    <div aria-hidden="true" class="hero-grid pointer-events-none absolute inset-0 opacity-[0.04]"></div>

    <div class="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
      <div class="min-w-0 space-y-8 lg:col-span-7">
        <div class="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span class="relative flex h-2 w-2" aria-hidden="true">
            <span class="absolute inset-0 animate-ping rounded-full bg-primary opacity-75"></span>
            <span class="relative h-2 w-2 rounded-full bg-primary"></span>
          </span>
          {{ profile.availability }}
        </div>
        <h1 id="hero-title" class="font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Hi, I'm <span class="text-gradient-ember">{{ profile.name }}</span>
          <span class="mt-2 block text-foreground/90">{{ profile.role }}.</span>
        </h1>
        <p class="max-w-xl text-lg leading-relaxed text-muted-foreground">{{ profile.introduction }}</p>
        <div class="flex flex-wrap gap-3">
          <a href="#projects" class="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-ember px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-ember transition-transform duration-300 hover:scale-[1.03]">
            View Projects <ArrowUpRight class="h-4 w-4" aria-hidden="true" />
          </a>
          <a v-if="profile.cvUrl" :href="profile.cvUrl" download class="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
            <Download class="h-4 w-4" aria-hidden="true" /> Download CV
          </a>
          <a v-else href="#contact" class="inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
            <ArrowDown class="h-4 w-4" aria-hidden="true" /> Let's connect
          </a>
        </div>
        <dl class="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
          <div class="flex flex-col">
            <dt class="order-2">Years of experience</dt>
            <dd class="font-display text-2xl font-bold text-foreground">{{ profile.experience }}</dd>
          </div>
          <div class="flex flex-col border-l border-border pl-6">
            <dt class="order-2">Projects delivered</dt>
            <dd class="font-display text-2xl font-bold text-foreground">{{ profile.projectsDelivered }}</dd>
          </div>
          <div class="hidden flex-col border-l border-border pl-6 sm:flex">
            <dt class="order-2">Happy clients</dt>
            <dd class="font-display text-2xl font-bold text-foreground">{{ profile.happyClients }}</dd>
          </div>
        </dl>
      </div>

      <div class="relative min-w-0 lg:col-span-5">
        <div class="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div class="absolute inset-0 rounded-[2rem] bg-gradient-ember opacity-40 blur-2xl" aria-hidden="true"></div>
          <div class="relative h-full w-full overflow-hidden rounded-[2rem] border border-border shadow-ember">
            <img src="/simon-portrait.jpg" width="896" height="1088" :alt="profile.name" fetchpriority="high" class="h-full w-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" aria-hidden="true"></div>
            <div class="glass absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl p-4">
              <span class="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-ember font-bold text-primary-foreground">SO</span>
              <div class="text-sm"><p class="font-semibold">{{ profile.name }}</p><p class="text-muted-foreground">Frontend Engineer</p></div>
            </div>
          </div>
          <div class="glass absolute -left-6 -top-6 hidden animate-float rounded-2xl px-4 py-3 shadow-card sm:block">
            <p class="text-xs text-muted-foreground">Current stack</p><p class="text-sm font-semibold">Vue 3 · Nuxt · TS</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-grid {
  background-image:
    linear-gradient(oklch(var(--border)) 1px, transparent 1px),
    linear-gradient(90deg, oklch(var(--border)) 1px, transparent 1px);
  background-size: 60px 60px;
}
</style>
