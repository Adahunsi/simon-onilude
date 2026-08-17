<script setup lang="ts">
</script>

<template>
  <header class="w-full">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6">
        <a href="/" class="flex items-center gap-2">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-ember text-primary-foreground shadow-ember">S</span>
          <span class="hidden sm:inline">Simon<span class="ml-1">.</span></span>
        </a>

        <nav class="hidden items-center gap-1 lg:flex">
          <a href="/" class="relative px-4 py-2 text-sm font-medium text-primary transition-colors">Home <span class="absolute left-1/2 -bottom-0.5 h-0.5 w-6 -translate-x-1/2 bg-primary transition-all duration-300"></span></a>
          <a href="/about" class="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About<span class="absolute left-1/2 -bottom-0.5 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300"></span></a>
          <a href="/projects" class="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Projects<span class="absolute left-1/2 -bottom-0.5 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300"></span></a>
          <a href="#certifications" class="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Certifications<span class="absolute left-1/2 -bottom-0.5 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300"></span></a>
          <a href="#tools" class="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Tools<span class="absolute left-1/2 -bottom-0.5 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300"></span></a>
          <a href="/contact" class="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact<span class="absolute left-1/2 -bottom-0.5 h-0.5 w-0 -translate-x-1/2 bg-primary transition-all duration-300"></span></a>
        </nav>

        <div class="flex items-center gap-2">
          <a href="" class="hidden items-center gap-2 rounded-xl bg-gradient-ember px-5 py-2.5 text-sm font-semibold tracking-wide text-primary-foreground shadow-ember transition-transform duration-300 hover:scale-[1.03] sm:inline-flex">LET'S TALK</a>
          <button aria-label="Toggle Menu" class="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
