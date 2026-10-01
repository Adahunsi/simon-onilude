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

Contact and social details are intentionally blank at the owner's request. Set `profile.email` to enable the contact form. It validates required fields with the browser and opens a URL-encoded **mailto draft** in the visitor's email app. It does not send messages or store enquiries, and requires an email handler. A direct email link is also provided. For sending without an email app, connect a form service or backend with real delivery/error handling; keep service secrets off the client.

## Structure review

```text
src/
  assets/styles/       Global styles and Tailwind layers
  components/
    layout/            AppHeader, AppFooter
    sections/          Individual portfolio sections
  data/                Editable content
  types/               Content contracts
  views/HomeView.vue   Page composition
  App.vue              Root component
  main.ts              Application entry
public/                Assets served at stable paths
```

This organization suits a small portfolio and follows the current Vue toolchain: Vite, Vue single-file components, Composition API with `<script setup lang="ts">`, and `vue-tsc`. Vue does not require a particular feature-folder hierarchy. Multiword component names now pass the existing Vue lint rule. Browser observers/listeners are cleaned up when the header unmounts.

Vue Router is unnecessary for one page with section anchors. Add it if you create separate project/case-study pages. Pinia is unnecessary for static content and a local form. Add composables when actual reusable stateful behavior emerges.

Tailwind remains on v3. Its PostCSS configuration, content scanning, and three CSS directives are retained. Semantic color tokens use OKLCH channels with `<alpha-value>` in Tailwind's configuration so opacity modifiers such as `bg-card/50` work.

Official references:
- [Vue tooling](https://vuejs.org/guide/scaling-up/tooling.html)
- [Vue with TypeScript](https://vuejs.org/guide/typescript/overview.html)
- [Tailwind 3 and Vite](https://v3.tailwindcss.com/docs/guides/vite)
- [Tailwind 3 CSS variable colors](https://v3.tailwindcss.com/docs/customizing-colors#using-css-variables)

## Review before publishing

- Confirm the biography, availability, location, and all three statistics. Existing local values (3+ years, 15+ projects, 10+ clients) were retained; the About section previously said 4+ and now uses the shared value.
- Confirm each certification's title, issuer and year, and add a real verification link. Existing local entries are retained but are not independently verified; the UI marks missing verification links.
- Add your public email, social links and actual CV. No contact address was copied from the live template.
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
| Accessibility and motion | Hover-only project descriptions, continuous orbit animation, no reduced-motion media rule | Always-visible descriptions, keyboard menu support, reduced-motion styles, and a static responsive technology graphic |

The archive's React/TanStack routes, server wrappers, Radix components, and dependencies are specific to that implementation and are not needed to complete this Vue portfolio. Its server scaffolding does not include contact-message delivery. The archive also contains no CV PDF or dependency lockfile.

The Vue version preserves the overall design direction and section coverage; it is not a pixel-for-pixel copy of the source's floating navigation, orbit animation, and scroll reveals. Public contact details and CV remain deferred as requested.
