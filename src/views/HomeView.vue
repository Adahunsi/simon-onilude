<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ViewHero from '@/components/sections/ViewHero.vue'
import ViewAboutMe from '@/components/sections/ViewAboutMe.vue'
import ViewProjects from '@/components/sections/ViewProjects.vue'
import ViewCertifications from '@/components/sections/ViewCertifications.vue'
import ViewTools from '@/components/sections/ViewTools.vue'
import ViewWhyMe from '@/components/sections/ViewWhyMe.vue'
import ViewContact from '@/components/sections/ViewContact.vue'
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <AppHeader />
  <main id="main-content" tabindex="-1">
    <ViewHero />
    <ViewAboutMe />
    <ViewProjects />
    <ViewCertifications />
    <ViewTools />
    <ViewWhyMe />
    <ViewContact />
  </main>
  <AppFooter />
</template>
