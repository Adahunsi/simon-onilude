<script setup lang="ts">
import Header from '@/components/layout/Header.vue';
import ViewProjects from '@/components/sections/ViewProjects.vue';
import ViewCertifications from '@/components/sections/ViewCertifications.vue';
import ViewHero from '@/components/sections/ViewHero.vue';
import ViewAboutMe from '@/components/sections/ViewAboutMe.vue';



</script>
<template>
    <Header />
    <main>
        <ViewHero />

        <ViewAboutMe />

        <ViewProjects />

        <ViewCertifications />

    </main>

    <div class="flex flex-col items-center justify-center min-h-screen bg-dark-bg text-neutral-200">
        <h1 class="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p class="text-lg text-gray-400">Explore my projects and skills.</p>
    </div>

</template>