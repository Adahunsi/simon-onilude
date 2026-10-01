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
    image: '/pyhealth-img.png',
    link: 'https://py-healthcare.com',
    technologies: ['Nuxt.js', 'PHP'],
  },
  {
    title: 'Insight Analytics Dashboard',
    description:
      'A sample SaaS dashboard concept for tracking revenue, product activity, and customer growth.',
    image: '/projects/insight-preview.jpg',
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    placeholder: true,
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
