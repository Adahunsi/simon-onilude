<script setup lang="ts">
import { ArrowUpRight, Code2 } from '@lucide/vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="projects" aria-labelledby="projects-title" class="section-spacing">
    <div class="section-container">
      <div class="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div><p class="eyebrow">Selected work</p><h2 id="projects-title" class="section-title">Projects I'm proud of.</h2></div>
        <p class="max-w-sm text-muted-foreground">A selection of real work, with two sample concepts to make room for what's next.</p>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:gap-8">
        <article v-for="project in projects" :key="project.title" class="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/50">
          <div class="relative aspect-[16/10] overflow-hidden border-b border-border bg-secondary">
            <img :src="project.image" :alt="project.title + (project.placeholder ? ' concept preview' : ' website screenshot')" width="960" height="600" loading="lazy" decoding="async" class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
            <span v-if="project.placeholder" class="absolute left-4 top-4 rounded-full border border-border bg-background/95 px-3 py-1.5 text-xs font-semibold">Sample project</span>
          </div>
          <div class="flex flex-1 flex-col gap-4 p-6 sm:p-7">
            <h3 class="text-xl font-bold">{{ project.title }}</h3>
            <p class="text-sm leading-relaxed text-muted-foreground">{{ project.description }}</p>
            <ul class="flex flex-wrap gap-2" aria-label="Technologies used">
              <li v-for="tech in project.technologies" :key="tech" class="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">{{ tech }}</li>
            </ul>
            <div class="mt-auto flex flex-wrap items-center gap-5 pt-3 text-sm">
              <a v-if="project.link || project.demo" :href="project.link || project.demo" target="_blank" rel="noopener noreferrer" :aria-label="'Visit ' + project.title + ' (opens in a new tab)'" class="inline-flex min-h-10 items-center gap-2 font-semibold text-primary hover:underline">Visit project <ArrowUpRight class="h-4 w-4" aria-hidden="true" /></a>
              <a v-if="project.githubUrl || project.repo" :href="project.githubUrl || project.repo" target="_blank" rel="noopener noreferrer" :aria-label="'View code for ' + project.title + ' (opens in a new tab)'" class="inline-flex min-h-10 items-center gap-2 text-muted-foreground hover:text-foreground"><Code2 class="h-4 w-4" aria-hidden="true" /> Code</a>
              <p v-if="project.placeholder" class="text-xs text-muted-foreground">Concept preview · Real project coming soon</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
