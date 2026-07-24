# Shivansh Vyas — Developer Portfolio

A responsive multi-page developer portfolio with an original dark comic-tech
visual system. The hero uses real HTML, CSS, React components, lightweight SVG
patterns, and a replaceable character asset—never the supplied reference image.

## Current features

- Responsive home page with a high-impact animated hero
- Sticky desktop navigation and accessible mobile menu
- Selected projects, capabilities, experience, about, playground, and contact sections
- Projects index and reusable project case-study routes
- Stack, About, Playground, Contact, and custom 404 pages
- Typed project and stack data
- Contact form UI with client-side validation
- Reduced-motion support, visible focus states, and semantic page structure
- Dynamic route metadata and a custom social-sharing image

## Technology

- Next.js-compatible App Router via Vinext
- React 19 and TypeScript
- Tailwind CSS foundation with a custom CSS design system
- Framer Motion
- Lucide React
- `clsx` and `tailwind-merge`

## Local development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run lint
npm run build
```

## Project structure

```text
app/                 Routes, layout, metadata, and global styles
components/
  contact/           Contact form interaction
  home/              Hero and homepage sections
  layout/            Navbar, footer, and page container
  projects/          Project cards, grid, and case study
  ui/                Shared buttons, headings, and status badge
data/                Navigation, projects, social links, and stack
lib/                 Shared utilities
public/
  images/hero/       Replaceable hero artwork
  patterns/          Decorative web-line and city assets
```

## Replace the hero character

To replace the temporary hero character, overwrite:

```text
public/images/hero/hero-character-placeholder.svg
```

Keep the same filename and approximate 4:5 aspect ratio for the quickest swap.
Alternatively, add:

```text
public/images/hero/hero-character.webp
```

Then update the `src` value in `components/home/Hero.tsx`. The image is isolated
inside the hero character frame and rendered with `next/image`.

## Update projects and social links

- Edit project content in `data/projects.ts`.
- Edit GitHub and LinkedIn placeholder URLs in `data/navigation.ts`.
- Stack groups live in `data/stack.ts`.

## Contact backend integration

`components/contact/ContactForm.tsx` currently validates input and shows a local
success state. The `handleSubmit` function contains the integration marker for a
future email service, API route, or form provider. No message is transmitted yet.

## Deployment

This repository is configured for OpenAI Sites/Vinext hosting and Cloudflare
Worker-compatible output.

For Vercel, import the repository, keep the Node.js version at 22 or newer, and
switch the build script from `vinext build` to `next build` before deploying the
standard Next.js App Router build.

## Replace before launch

- GitHub URL in `data/navigation.ts`
- LinkedIn URL in `data/navigation.ts`
- Final hero character artwork
- Real contact submission backend and response details
