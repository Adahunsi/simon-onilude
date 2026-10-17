<script setup lang="ts">
import { ArrowUpRight, Code2 } from '@lucide/vue'
import { projects } from '@/data/projects'
</script>

<template>
  <section id="projects" aria-labelledby="projects-title" class="relative py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div data-reveal class="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div><p class="eyebrow mb-3">Selected work</p><h2 id="projects-title" class="text-4xl font-bold text-foreground sm:text-5xl">Projects I'm proud of.</h2></div>
        <p class="max-w-md text-muted-foreground">A selection of real work, with two sample concepts to make room for what's next.</p>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:gap-8">
        <article v-for="(project, index) in projects" :key="project.title" data-reveal :data-reveal-delay="(index % 2) * 80"
          tabindex="0" :aria-labelledby="'project-title-' + index" :aria-describedby="'project-description-' + index"
          class="project-card group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[border-color,box-shadow] duration-500 hover:border-primary/50 hover:shadow-ember focus-within:border-primary/50 focus-within:shadow-ember">
          <div class="relative aspect-[16/10] overflow-hidden">
            <img :src="project.image" :alt="project.title + (project.placeholder ? ' concept preview' : ' website screenshot')" width="960" height="600" loading="lazy" decoding="async" class="project-image h-full w-full object-cover object-top" />
            <div class="project-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" aria-hidden="true"></div>
            <span v-if="project.placeholder" class="absolute left-4 top-4 rounded-full border border-border bg-background/95 px-3 py-1.5 text-xs font-semibold">Sample project</span>
            <a v-if="project.link || project.demo" :href="project.link || project.demo" target="_blank" rel="noopener noreferrer"
              :aria-label="'Visit ' + project.title + ' (opens in a new tab)'"
              class="project-arrow absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-gradient-ember text-primary-foreground shadow-ember">
              <ArrowUpRight class="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <div class="flex flex-1 flex-col gap-4 p-6">
            <h3 :id="'project-title-' + index" class="text-xl font-bold">{{ project.title }}</h3>
            <div class="project-description">
              <div class="min-h-0 overflow-hidden">
                <p :id="'project-description-' + index" class="text-sm leading-relaxed text-muted-foreground">{{ project.description }}</p>
              </div>
            </div>
            <ul class="flex flex-wrap gap-2" aria-label="Technologies used">
              <li v-for="tech in project.technologies" :key="tech" class="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">{{ tech }}</li>
            </ul>
            <div class="mt-auto flex flex-wrap items-center gap-4 pt-2 text-sm">
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

<style scoped>
.project-image {
  transition: filter 700ms, transform 700ms;
}

.project-overlay {
  opacity: 0.6;
  transition: opacity 500ms;
}

.project-description {
  display: grid;
  grid-template-rows: 1fr;
  opacity: 1;
  transition: grid-template-rows 500ms, opacity 500ms;
}

.project-arrow {
  transition: opacity 500ms, transform 500ms;
}

/* Touch and small screens keep the details visible without requiring a hover. */
@media (min-width: 768px) and (hover: hover) and (pointer: fine) {
  .project-image { filter: grayscale(1); }
  .project-overlay { opacity: 0.9; }
  .project-description { grid-template-rows: 0fr; opacity: 0; }
  .project-arrow { transform: translateY(8px); opacity: 0; }

  .project-card:is(:hover, :focus-within) .project-image {
    filter: grayscale(0);
    transform: scale(1.05);
  }
  .project-card:is(:hover, :focus-within) .project-overlay { opacity: 0.6; }
  .project-card:is(:hover, :focus-within) .project-description { grid-template-rows: 1fr; opacity: 1; }
  .project-card:is(:hover, :focus-within) .project-arrow { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .project-card .project-image, .project-card .project-arrow { transform: none !important; }
}
</style>
