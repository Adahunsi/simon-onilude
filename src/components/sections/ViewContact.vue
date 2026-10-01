<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { ArrowUpRight, Code2, BriefcaseBusiness, Mail, Send } from '@lucide/vue'
import { profile } from '@/data/profile'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const status = ref('')
const contactReady = computed(() => Boolean(profile.email.trim()))

function openEmailDraft() {
  if (!contactReady.value) return
  const body = [
    'Name: ' + form.name.trim(),
    'Email: ' + form.email.trim(),
    '',
    form.message.trim(),
  ].join('\n')
  window.location.href = 'mailto:' + profile.email.trim() +
    '?subject=' + encodeURIComponent(form.subject.trim()) +
    '&body=' + encodeURIComponent(body)
  status.value = 'Email draft requested. Send it from your email app to complete your enquiry. If no app opens, use the email address alongside this form.'
}
</script>

<template>
  <section id="contact" aria-labelledby="contact-title" class="section-spacing bg-hero-glow">
    <div class="section-container grid gap-12 lg:grid-cols-2 lg:gap-20">
      <div>
        <p class="eyebrow">Get in touch</p>
        <h2 id="contact-title" class="section-title">Have a project in mind?<br /><span class="text-gradient-ember">Let's create something memorable.</span></h2>
        <p class="mt-6 max-w-lg leading-relaxed text-muted-foreground">From a thoughtful landing page to a complete web application, I'd love to hear what you're working on.</p>
        <div class="mt-8 space-y-4">
          <a v-if="contactReady" :href="'mailto:' + profile.email" class="flex items-center gap-3 break-all text-sm hover:text-primary"><Mail class="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />{{ profile.email }}</a>
          <p v-else class="flex items-center gap-3 text-sm text-muted-foreground"><Mail class="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />Contact details coming soon.</p>
          <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="flex min-h-11 items-center gap-3 text-sm hover:text-primary"><BriefcaseBusiness class="h-5 w-5 text-primary" aria-hidden="true" />LinkedIn <ArrowUpRight class="h-4 w-4" aria-hidden="true" /><span class="sr-only">(opens in a new tab)</span></a>
          <a v-if="profile.github" :href="profile.github" target="_blank" rel="noopener noreferrer" class="flex min-h-11 items-center gap-3 text-sm hover:text-primary"><Code2 class="h-5 w-5 text-primary" aria-hidden="true" />GitHub <ArrowUpRight class="h-4 w-4" aria-hidden="true" /><span class="sr-only">(opens in a new tab)</span></a>
        </div>
      </div>
      <form class="rounded-3xl border border-border bg-card p-6 sm:p-8" aria-labelledby="contact-form-title" aria-describedby="contact-help" @submit.prevent="openEmailDraft">
        <h3 id="contact-form-title" class="text-xl font-bold">Tell me about your project</h3>
        <p id="contact-help" class="mb-6 mt-2 text-sm leading-relaxed text-muted-foreground">{{ contactReady ? 'This form opens a draft in your email app. Nothing is sent automatically.' : 'Enquiries will open here once my contact details are available.' }}</p>
        <fieldset :disabled="!contactReady" class="space-y-5 disabled:opacity-60">
          <legend class="sr-only">Your enquiry</legend>
          <div class="grid gap-5 sm:grid-cols-2">
            <div><label for="contact-name" class="form-label">Name</label><input id="contact-name" v-model="form.name" name="name" autocomplete="name" required maxlength="100" placeholder="Your name" class="form-input" /></div>
            <div><label for="contact-email" class="form-label">Email</label><input id="contact-email" v-model="form.email" name="email" type="email" autocomplete="email" required maxlength="254" placeholder="you@example.com" class="form-input" /></div>
          </div>
          <div><label for="contact-subject" class="form-label">Subject</label><input id="contact-subject" v-model="form.subject" name="subject" required maxlength="150" placeholder="What would you like to build?" class="form-input" /></div>
          <div><label for="contact-message" class="form-label">Message</label><textarea id="contact-message" v-model="form.message" name="message" required minlength="10" maxlength="2000" rows="5" placeholder="A little about your project, timeline, and goals…" class="form-input resize-y"></textarea></div>
          <button type="submit" :disabled="!contactReady" class="button-primary w-full disabled:cursor-not-allowed disabled:shadow-none">{{ contactReady ? 'Open email draft' : 'Enquiries coming soon' }}<Send class="h-4 w-4" aria-hidden="true" /></button>
        </fieldset>
        <p role="status" class="mt-4 text-sm leading-relaxed text-muted-foreground">{{ status }}</p>
      </form>
    </div>
  </section>
</template>
