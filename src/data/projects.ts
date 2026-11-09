import type { Project } from '@/types/index'

export const projects: Project[] = [
  {
    title: 'Elafris Hub',
    description:
      'Elafris hub is a full-service digital agency built to help brands stand out and grow with intention through creativity, strategy, and execution that actually works.',
    image: '/elafris-hub-mg.png',
    link: 'https://elafris.com',
    technologies: ['Wordpress', 'Elementor'],
  },
  {
    title: 'Pyhealth Care',
    description:
      'Pyhealth care is a virtual healthcare platform that connects patients with licensed healthcare professionals for remote consultations and medical advice.',
    image: '/projects/pyhealth-img.png',
    link: 'https://py-healthcare.com',
    technologies: ['Nuxt.js', 'PHP'],
  },
  {
    title: 'Explorers Archive',
    description:
      'A digital archive documenting Nigeria’s landscapes, histories, and cultures through photography, film, stories, and curated journeys.',
    image: '/projects/explorers-archive.png',
    link: 'https://explorers-archive.vercel.app/',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Wanderbase Travel App',
    description:
      'A sample travel discovery concept with destination collections and a simple itinerary planner.',
    image: '/projects/wanderbase-preview.jpg',
    technologies: ['Vue 3', 'Mapbox', 'Tailwind CSS', 'Vite'],
    placeholder: true,
  },
]
