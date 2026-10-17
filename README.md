# Simon Onilude portfolio

A single-page portfolio built with Vue 3, TypeScript, Vite, and **Tailwind CSS 3**. The existing dark ember design and two real project entries are preserved. Two labelled concept projects are included for replacement.

## Development

Use the Node version declared in `package.json` and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
pnpm lint
```

`pnpm build` runs TypeScript checking and produces `dist/`. The existing lint command applies fixes. For a read-only check use `pnpm exec eslint .` and `pnpm exec oxlint src`. Nested editor worktrees under `.kilo/` are excluded from linting.

## Where to edit content

| Content | File |
| --- | --- |
| Name, intro, experience, project/client counts, availability, email, social URLs, CV | `src/data/profile.ts` |
| Existing and sample projects | `src/data/projects.ts` |
| Certificates and verification URLs | `src/data/certifications.ts` |
| Technology list and About graphic labels | `src/data/tools.ts`, `src/data/orbit.ts` |
| Working values | `src/data/why-me.ts` |
| Shared navigation | `src/data/nav.ts` |
| Longer biography | `src/components/sections/ViewAboutMe.vue` |
| Search/social descriptions and title | `index.html` |
| Fonts, colors, shared styles | `src/assets/styles/main.css`, `tailwind.config.js` |
| Images, actual CV PDF, favicon | `public/` |

To replace a sample project, edit its title, description, image, technologies and live URL, then remove `placeholder: true`. Add `githubUrl` when a public repository exists. The existing optional `demo` and `repo` aliases are also supported. Missing URLs do not create dead links. Sample JPG previews in `public/projects/` come from the supplied Lovable ZIP: `project-1.jpg` (Insight) and `project-3.jpg` (Wanderbase). Technology tags describe the sample concepts, not implemented apps in this repository.

Put your actual CV in `public/simon-onilude-cv.pdf`, then set `profile.cvUrl` to `/simon-onilude-cv.pdf`. Until then, the hero offers a contact link instead of a broken download.

Contact and social details are configured in `profile.ts`; the CV is still unset. A nonempty `profile.email` enables the contact form. It validates required fields with the browser and opens a URL-encoded **mailto draft** in the visitor's email app. It does not send messages or store enquiries, and requires an email handler. A direct email link is also provided. For sending without an email app, connect a form service or backend with real delivery/error handling; keep service secrets off the client.

## Structure review

```text
src/
  assets/styles/       Global styles and Tailwind layers
  components/
    layout/            AppHeader, AppFooter
    sections/          Individual portfolio sections
  composables/         Page-scoped scroll reveal behavior
  data/                Editable content
  types/               Content contracts
  views/HomeView.vue   Page composition
  App.vue              Root component
  main.ts              Application entry
public/                Assets served at stable paths
```

This organization suits a small portfolio and follows the current Vue toolchain: Vite, Vue single-file components, Composition API with `<script setup lang="ts">`, and `vue-tsc`. Vue does not require a particular feature-folder hierarchy. Multiword component names now pass the existing Vue lint rule. Browser observers/listeners are cleaned up when the header unmounts.

Vue Router is unnecessary for one page with section anchors. Add it if you create separate project/case-study pages. Pinia is unnecessary for static content and a local form. Scroll reveal behavior lives in a composable with observer and animation cleanup.

Tailwind remains on v3. Its PostCSS configuration, content scanning, and three CSS directives are retained. Semantic color tokens use OKLCH channels with `<alpha-value>` in Tailwind's configuration so opacity modifiers such as `bg-card/50` work.

Official references:
- [Vue tooling](https://vuejs.org/guide/scaling-up/tooling.html)
- [Vue with TypeScript](https://vuejs.org/guide/typescript/overview.html)
- [Tailwind 3 and Vite](https://v3.tailwindcss.com/docs/guides/vite)
- [Tailwind 3 CSS variable colors](https://v3.tailwindcss.com/docs/customizing-colors#using-css-variables)

## Review before publishing

- Confirm the biography, availability, location, and all three statistics. Existing local values (3+ years, 15+ projects, 10+ clients) were retained; the About section previously said 4+ and now uses the shared value.
- Confirm each certification's title, issuer and year, and add a real verification link. Existing local entries are retained but are not independently verified; the UI marks missing verification links.
- Confirm the public email and social links in `profile.ts`, and add your actual CV. No contact address was copied from the live template.
- Replace the two sample projects when ready. Add your role, challenges, results and case studies to strengthen the real project entries.
- Confirm the hero portrait is the image you want. The existing `simon-portrait.jpg` is retained; another photo, `Simon-Onilude.jpg`, also exists.
- The two original PNG project screenshots total about 2.8 MB. Export appropriately sized WebP/AVIF versions for faster loads. They are lazy-loaded, but their original files have not been recompressed.
- Set a canonical URL, absolute Open Graph image URL, and sitemap after choosing the final deployment domain. Basic title, description, social text, language, theme color and favicon are now present.
- Google Fonts matches the live reference, with system-font fallbacks. Self-host if you want to remove that external request.
- The Vue site is client-rendered. Consider prerendering or Nuxt if indexing full case-study content becomes a priority. Social metadata is already in static HTML.
- Review the unrelated existing `src/note` before committing; it has been left untouched.
- Deploy the production `dist/` output to your chosen static host. No deployment or changes to the live Lovable site were made.

## Reference scope

The public [Lovable portfolio](https://simon-onilude-portfolio.lovable.app), local Vue source, and subsequently supplied `simon-portfolio (1).zip` were inspected. The archive was read without installing or running its scripts. Its embedded instructions were treated as reference content, not directions for this workspace.

### Archive comparison

| Area | Lovable ZIP | Local implementation |
| --- | --- | --- |
| Framework | React 19, TanStack Start, Vite; server-rendering entry points | Vue 3, Vite, TypeScript; client-rendered single page |
| Styling | Tailwind 4 with CSS-first configuration | Tailwind 3 retained, with compatible color opacity tokens |
| Organization | Most portfolio content and sections share `src/routes/index.tsx`; a large React UI component scaffold | Section components, typed content files, and a page composition view |
| Sections | Hero, About, Projects, Certifications, Tools, WhyMe, Contact, Footer | All corresponding sections implemented |
| Projects | Four concept entries; demo and repository URLs are `#` | Elafris Hub and Pyhealth Care retained, plus two clearly labelled samples using original ZIP images |
| Contact | Submit handler only toggles “Message sent,” resets the form and starts a timer; no delivery call | Disabled until an email is supplied, then opens an explicitly labelled email draft |
| CV and social links | CV and social profiles point to `#`; email is template content | Empty details remain unset; missing download/social links are not rendered |
| Credentials | Six entries, all verification URLs are `#` | Three existing local entries retained with missing-verification labels |
| Claims | Hard-coded 4+ years, 30+ projects, 15+ clients, and “98 Lighthouse” | Existing local statistics retained for confirmation; no unmeasured Lighthouse score displayed |
| Accessibility and motion | Hover-only project descriptions, continuous orbit animation, no reduced-motion media rule | Project descriptions reveal on hover or keyboard focus and stay visible on touch/small screens; keyboard menu support, responsive portrait orbits with a pause control, and scroll reveals that respect reduced motion |

The archive's React/TanStack routes, server wrappers, Radix components, and dependencies are specific to that implementation and are not needed to complete this Vue portfolio. Its server scaffolding does not include contact-message delivery. The archive also contains no CV PDF or dependency lockfile.

All five visual matching phases are implemented locally. Phase 1 restores the floating navigation and hero proportions. Phase 2 restores the About portrait, orbit rings, and scroll reveals. Phase 3 restores the project hover effects, certification cards, wrapping tool labels, and left-aligned WhyMe section. Phase 4 restores the Contact panel and footer layout. Phase 5 adds responsive and accessibility polish; its checks were completed before Phase 4, with focused checks repeated after the Contact/footer redesign.

Phase 4 places Contact inside a rounded panel with corner glows, a large headline highlighting “Let's create,” circular contact icons and an inset form. The footer uses a wider introduction column, vertical quick links and compact social/email buttons. Contact links use the configured public details; no template email, Twitter profile or reply-time promise is added. The form retains its labels, native validation, live status and honest email-draft behavior, with a short explanation below the button. The new layout was checked in Chromium from 320–1440px and with 200% text sizing, along with keyboard reveals, form validation, link destinations and email draft encoding. No enquiry was sent during testing.

Project cards reveal color, descriptions, and a visit shortcut on desktop hover or keyboard focus. Each card can receive keyboard focus, including samples without links. Touch devices and screens below 768px keep details visible. Reduced motion removes image zoom and card lifts; the two samples and three existing certifications retain their content and missing-link labels.

Motion is implemented with scoped CSS in `ViewAboutMe.vue` and the page-scoped `useScrollReveal` composable. Add `data-reveal` to a heading group or card to reveal it once; optional `data-reveal-delay` is measured in milliseconds and capped at 240. Content is visible by default; supported browsers progressively enable the effect on content below the initial viewport. Reduced motion, keyboard focus, and unmount cleanup reveal content immediately. The orbit pause control stops the rotating labels, and reduced motion keeps them stationary without hiding them.

### Phase 5 quality review

The hero uses smaller type on narrow screens and below the wide desktop breakpoint. Long text can wrap, hero statistics and the portrait caption can reflow, and form fields use 16px text at the default text size. Navigation, contact and footer links have larger touch targets. The mobile menu has a more opaque background, closes when focus or a pointer moves outside it, and moves focus to the destination heading after selecting a section. Escape restores focus to its toggle. Remaining button transforms now respect reduced motion. Content and navigation remain usable without IntersectionObserver.

Validation covers the production build and TypeScript checks, lint, and local Chromium browser checks at widths of 320, 375, 390, 640, 768, 844, 1024, 1280, 1440 and 1920px. The browser checks cover horizontal overflow, heading clipping, image loading, section links, form labels and native required/email validation, keyboard navigation, a scrollable landscape menu, touch project details, scroll/orbit effects, reduced motion, and text enlarged to 200%. Email draft encoding is checked without sending an enquiry or launching an email app.

These checks are not a Lighthouse score or a physical-device/cross-browser certification. Real Safari and Firefox testing, image compression, final content/CV/credential links, deployment metadata and optional backend email delivery remain launch tasks. The production preview can be reviewed with `pnpm preview`; no live deployment has been changed.
