<script setup lang="ts">
import { reactive } from 'vue';

const allProjects = reactive([
    {
        title: 'Elafris Hub',
        description: 'Elafris hub is a full-service digital agency built to help brands stand out and grow with intention through creativity, strategy, and execution that actually works.',
        image: '/elafris-hub-mg.png',
        link: 'https://elafris.com',
        technologies: ['Wordpress', 'Elementor'],
    },
    {
        title: 'Pyhealth Care',
        description: 'Pyhealth care is a virtual healthcare platform that connects patients with licensed healthcare professionals for remote consultations and medical advice.',
        image: '/pyhealth-img.png',
        technologies: ['Nuxt.js', 'PHP'],
        link: 'https://py-healthcare.com',
    }])


</script>
<template>

    <section class="py-24 lg:py-32 relative">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14 animate-fade-up">
                <div>
                    <div
                        class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
                        <span class="h-px w-8 bg-primary"></span>Selected work
                    </div>
                    <h2 class="text-4xl sm:text-5xl font-bold">
                        Projects I'm proud of.
                    </h2>
                </div>
                <p class="max-w-md text-muted-foreground">A glimpse of recent work — hover any card to bring it to life.
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
                <article v-for="project in allProjects" :key="project.title"  class="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-ember animate-fade-up">
                    <div class="relative aspect-[16/10] overflow-hidden">
                        <img :src="project.image" class="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt="Insight Analytics Dashboard" />
                        <div class="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
                        <a :href="project.link" aria-label="Visit ${project.title}" class="absolute top-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-gradient-ember text-primary-foreground shadow-ember translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"></a>
                    </div>

                    <div class="p-6 space-y-4">
                        <div class="flex items-center justify-between gap-4">
                            <h3 class="text-xl font-bold"> {{project.title}} </h3>
                        </div>
                        <p class="text-sm text-muted-foreground max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100"> {{project.description}} </p>
                        <div class="flex flex-wrap gap-2">
                            <span  class="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                                {{project.technologies[0]}}
                            </span>
                            <span class="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"> {{project.technologies[1]}}</span>
                            <span class="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"> {{project.technologies[2]}}</span>

                        </div>

                        <div class="flex items-center gap-4 pt-2 text-sm">
                            <a :href="project.link" class="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2 transition-all">Visit Project</a>
                            <a href="#" class="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">Git code</a>
                        </div>

                    </div>
                </article>
                
            </div>
        </div>
    </section>


</template>