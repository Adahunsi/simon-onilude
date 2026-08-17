<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import ViewProjects from '@/components/ViewProjects.vue';
import ViewCertifications from '@/components/ViewCertifications.vue';



</script>
<template>
    <Header />
    <main>
        <section class="relative flex items-center pt-28 pb-16 bg-hero-glow overflow-hidden">
            <div class="flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  gap-12 items-center w-full">
                <div class="space-y-8">
                    <div
                        class="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
                        <span class="relative flex h-2 w-2">
                            <span class="absolute inset-0 animate-ping rounded-full bg-primary opacity-75"></span>
                            <span class="relative rounded-full bg-primary h-2 w-2"></span>
                        </span>
                        <span>Available for new projects</span>
                    </div>
                    <h1 class="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                        Hi, I’m
                        <span class="text-gradient-ember">Simon Onilude</span>
                        <span class="block mt-2 text-foreground/90"> Frontend Developer</span>
                    </h1>
                    <p class="max-w-xl text-lg text-muted-foreground leading-relaxed">I create engaging, user-friendly
                        web experiences with a focus on performance and accessibility.</p>
                    <div class="flex flex-wrap gap-4">
                        <a href="#project"
                            class="inline-flex items-center gap-2 rounded-xl bg-gradient-ember px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-ember transition-transform duration-300 hover:scale-[1.03]">
                            View My Work
                        </a>
                        <a href="#CV"
                            class="inline-flex items-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
                            Download CV
                        </a>
                    </div>
                    <div class="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                        <div>
                            <span class="text-2xl font-display font-bold text-foreground">3+
                            </span>
                            <div>Years of experience</div>
                        </div>

                        <div class="h-10 w-px bg-border"></div>

                        <div>
                            <span class="text-2xl font-display font-bold text-foreground">15+
                            </span>
                            <div>Years of experience</div>
                        </div>

                        <div class="hidden sm:block h-10 w-px bg-border"></div>

                        <div class="hidden sm:block">
                            <span class="text-2xl font-display font-bold text-foreground">10+
                            </span>
                            <div>Happy Clients</div>
                        </div>
                    </div>

                </div>
                <div class=" relative">
                    <div class="relative mx-auto aspect-[4/5] max-w-md">
                        <div class="absolute inset-0 rounded-[2rem] bg-gradient-ember blur-2xl opacity-40"></div>
                        <div
                            class="relative h-full w-full overflow-hidden rounded-[2rem] border border-border shadow-ember">
                            <img src="/simon-portrait.jpg" width="896" height="1088" alt="Simon Onilude"
                                class="h-full w-full object-cover" />
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent">
                            </div>
                            <div class="absolute bottom-5 left-5 right-5 glass rounded-2xl p-4">
                                <div class="flex items-center gap-3">
                                    <div
                                        class="h-10 w-10 rounded-full bg-gradient-ember grid place-items-center text-primary-foreground font-bold">
                                        SO
                                    </div>
                                    <div class="text-sm">
                                        <span class="font-semibold">Simon Onilude</span>
                                        <div class="text-muted-foreground flex items-center gap-1"> Frontend Engineer
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div
                            class="hidden sm:block absolute -top-6 -left-6 glass rounded-2xl px-4 py-3 shadow-card animate-float">
                            <div class="text-xs text-muted-foreground"><span>Current Stack</span></div>
                            <div class="text-sm font-semibold"><span>Vue 3 · Nuxt · TS</span></div>
                        </div>
                    </div>
                </div>


            </div>
        </section>

        <section class="py-24 lg:py-32 relative">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid lg:grid-cols-2 gap-16 items-center">
                    <div class="relative mx-auto h-[420px] w-[420px] max-w-full animate-fade-up"></div>
                    <div class="space-y-6 animate-fade-up">
                        <div
                            class="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                            <span class="h-px w-8 bg-primary"></span>About Me
                        </div>
                        <h2 class="text-4xl sm:text-5xl font-bold leading-tight">
                            Crafting<span class="text-gradient-ember"> delightful</span> interfaces with care.
                        </h2>
                        <p class="text-muted-foreground text-lg leading-relaxed">
                            I'm Simon — a frontend developer with 4+ years of experience turning ambitious ideas into
                            polished products. My focus is the Vue & Nuxt ecosystem paired with TypeScript and Tailwind,
                            and I obsess over small details: motion, typography, accessibility, and load performance.
                        </p>
                        <p class="text-muted-foreground text-lg leading-relaxed"> I love collaborating with designers
                            and product teams to ship interfaces that feel inevitable — fast, beautiful, and a joy to
                            navigate. When I'm not coding, you'll find me exploring design trends or contributing to
                            open source.</p>

                        <div class="grid grid-cols-2 gap-4 pt-2">
                            <div class="rounded-2xl border border-border bg-card p-4">
                                <div class="text-xs text-muted-foreground">Focus</div>
                                <div class="font-semibold mt-1">Frontend & UX</div>
                            </div>

                            <div class="rounded-2xl border border-border bg-card p-4">
                                <div class="text-xs text-muted-foreground">Stack</div>
                                <div class="font-semibold mt-1">Vue / Nuxt / TS</div>
                            </div>

                            <div class="rounded-2xl border border-border bg-card p-4">
                                <div class="text-xs text-muted-foreground">Location
                                </div>
                                <div class="font-semibold mt-1">Remote — Global</div>
                            </div>

                            <div class="rounded-2xl border border-border bg-card p-4">
                                <div class="text-xs text-muted-foreground">Availability
                                </div>
                                <div class="font-semibold mt-1">Open for work</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <ViewProjects />

        <ViewCertifications />

    </main>

    <div class="flex flex-col items-center justify-center min-h-screen bg-dark-bg text-neutral-200">
        <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p class="text-lg text-gray-400">Explore my projects and skills.</p>
    </div>

</template>