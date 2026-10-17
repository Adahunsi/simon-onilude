<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { Code2, BriefcaseBusiness, Mail, Send } from '@lucide/vue'
import { profile } from '@/data/profile'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const status = ref('')
const contactReady = computed(() => Boolean(profile.email.trim()))

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

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
  <section id="contact" aria-labelledby="contact-title" class="relative py-24 lg:py-32">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="contact-panel rounded-[2rem] border border-border bg-card bg-hero-glow p-5 sm:rounded-[2.5rem] sm:p-10 lg:p-16">
        <div class="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
          <div data-reveal class="min-w-0">
            <p class="eyebrow mb-4">Get in touch</p>
            <h2 id="contact-title" class="text-4xl font-bold leading-tight text-foreground sm:text-5xl sm:leading-tight xl:text-6xl xl:leading-tight">Have a project in mind? <span class="text-gradient-ember">Let's create</span> something memorable.</h2>
            <p class="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">From a thoughtful landing page to a complete web application, I'd love to hear what you're working on.</p>
            <div class="mt-8 space-y-3 text-sm text-muted-foreground">
              <a v-if="contactReady" :href="'mailto:' + profile.email.trim()" class="contact-link group">
                <span class="contact-icon"><Mail class="h-4 w-4" aria-hidden="true" /></span>
                <span class="min-w-0">{{ profile.email }}</span>
              </a>
              <p v-else class="flex min-h-11 items-center gap-3">
                <span class="contact-icon"><Mail class="h-4 w-4" aria-hidden="true" /></span>Contact details coming soon.
              </p>
              <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" rel="noopener noreferrer" class="contact-link group">
                <span class="contact-icon"><BriefcaseBusiness class="h-4 w-4" aria-hidden="true" /></span>
                <span class="min-w-0"><span class="sr-only">LinkedIn: </span>{{ displayUrl(profile.linkedin) }}<span class="sr-only"> (opens in a new tab)</span></span>
              </a>
              <a v-if="profile.github" :href="profile.github" target="_blank" rel="noopener noreferrer" class="contact-link group">
                <span class="contact-icon"><Code2 class="h-4 w-4" aria-hidden="true" /></span>
                <span class="min-w-0"><span class="sr-only">GitHub: </span>{{ displayUrl(profile.github) }}<span class="sr-only"> (opens in a new tab)</span></span>
              </a>
            </div>
          </div>
          <form data-reveal data-reveal-delay="80" class="contact-form min-w-0 rounded-3xl border border-border bg-card/60 p-4 backdrop-blur-sm sm:p-8" aria-labelledby="contact-form-title" aria-describedby="contact-help" @submit.prevent="openEmailDraft">
            <h3 id="contact-form-title" class="sr-only">Tell me about your project</h3>
            <fieldset :disabled="!contactReady" class="disabled:opacity-60">
              <legend class="sr-only">Your enquiry</legend>
              <div class="space-y-5">
                <div class="grid gap-5 sm:grid-cols-2">
                  <div><label for="contact-name" class="form-label">Name</label><input id="contact-name" v-model="form.name" name="name" autocomplete="name" required maxlength="100" placeholder="Your name" class="form-input" /></div>
                  <div><label for="contact-email" class="form-label">Email</label><input id="contact-email" v-model="form.email" name="email" type="email" autocomplete="email" required maxlength="254" placeholder="you@example.com" class="form-input" /></div>
                </div>
                <div><label for="contact-subject" class="form-label">Subject</label><input id="contact-subject" v-model="form.subject" name="subject" required maxlength="150" placeholder="What would you like to build?" class="form-input" /></div>
                <div><label for="contact-message" class="form-label">Message</label><textarea id="contact-message" v-model="form.message" name="message" required minlength="10" maxlength="2000" rows="5" placeholder="A little about your project, timeline, and goals…" class="form-input resize-y"></textarea></div>
                <button type="submit" :disabled="!contactReady" class="button-primary w-full disabled:cursor-not-allowed disabled:shadow-none">{{ contactReady ? 'Open email draft' : 'Enquiries coming soon' }}<Send class="h-4 w-4" aria-hidden="true" /></button>
              </div>
            </fieldset>
            <p id="contact-help" class="mt-4 text-xs leading-relaxed text-muted-foreground">{{ contactReady ? 'This form opens a draft in your email app. Nothing is sent automatically.' : 'Enquiries will open here once my contact details are available.' }}</p>
            <p role="status" class="text-sm leading-relaxed text-muted-foreground" :class="{ 'mt-4': status }">{{ status }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-link {
  @apply flex min-h-11 items-center gap-3 rounded-lg transition-colors hover:text-foreground;
}

.contact-icon {
  @apply grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-secondary/60 transition-colors group-hover:border-primary/50 group-hover:text-primary;
}

.contact-form .form-input {
  @apply bg-secondary/60 transition-colors;
}
</style>
