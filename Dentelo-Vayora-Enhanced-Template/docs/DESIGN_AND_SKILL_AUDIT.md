# Design and skill audit

Audit date: 25 October 2026

This report records the references consulted and the practical decisions made in this project. It separates inspected public documentation from dependencies that were not installed or integrations that were not connected.

## Reference review and applied principles

### Scroll Craft

Reference: https://github.com/nateherkai/scroll-craft

The repository README describes a scroll-driven design workflow, independent depth planes, responsive art direction, and visual QA across actual scroll frames and device sizes. Applied here: a deliberate hero composition with foreground callouts; distinct editorial section rhythms; restrained image/opacity reveals; no generic uniform fade on every block; and a compact mobile layout. The project does not install or copy Scroll Craft's separate engine.

### GSAP Skills

Reference: https://github.com/greensock/gsap-skills

The GSAP skills index and documentation were consulted for choosing GSAP primitives, `ScrollTrigger`, transform/opacity animation, and reduced-motion-aware behavior. The project uses GSAP and ScrollTrigger v3.13.0 from pinned CDN URLs. It is **not** an npm-managed or bundled GSAP installation.

### WebGL Animation Skills

Reference: https://github.com/iart-ai/webgl-animation-skills

The README covers Three.js, GLSL shader, particle-system and resource-lifecycle guidance. WebGL was deliberately not added: it would increase page weight and complexity without adding useful value to the clinic's main visitor tasks. The relevant lesson applied is to use advanced rendering only when the interaction meaningfully benefits from it.

### shadcn/ui

References: https://github.com/shadcn-ui/ui and https://ui.shadcn.com/docs

The project remains vanilla HTML/CSS/JavaScript as requested. Rather than introduce a React dependency to port React components, this implementation adapts relevant interface principles: real buttons for interactions, visible focus states, explicit expanded states, semantic grouping, and restrained component states for accordions, forms, and dialogs. No shadcn/ui package was installed.

### Anthropic Frontend Design Skill

Reference: https://github.com/anthropics/skills/tree/main/skills/frontend-design

The design guidance stresses subject-specific visual direction and avoiding generic, interchangeable layouts. Applied here: a dental-appropriate ink/teal/mint palette, editorial typography, asymmetric hero and about compositions, a photo-led service feature beside a more compact service grid, and different visual rhythms between sections.

### UI UX Pro Max

Reference: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

The repository documentation describes responsive, accessible interface guidance and design-system rules. Applied here: spacing and color tokens, compact tap-friendly mobile controls, meaningful section hierarchy, explicit states and error messages, keyboard-accessible navigation, and a reduced-motion path. Its external skill package was not installed into the site project.

### Ponytail

Reference: https://github.com/dietrichgebert/ponytail and installation: https://github.com/DietrichGebert/ponytail/blob/main/INSTALL.md

The install process was attempted in a temporary directory with `npx --yes skills add DietrichGebert/ponytail --help`, but the command timed out in this environment without producing an installation result. Ponytail is an agent workflow/plugin rather than a runtime UI dependency, so it was not included in the website package. No claim is made that it was installed or used.

## Additional design references

- [SweetTape](https://sweet-tape.com/) — a design-gallery listing identifies the project and notes a motion-led stack including GSAP and Three.js. Reference patterns were considered at a high level; no source, 3D assets or exact layout was copied.
- [ERA Residence](https://www.era-residence.com/) — the project is described by independent design coverage as a Mediterranean residential site with integrated brand storytelling and GSAP interactions. The transferable principle is a clear visual idea and section-to-section rhythm, not its real-estate-specific layouts or branding.
- [Nick Ho](https://www.awwwards.com/websites/) — the prompt did not identify a definitive portfolio URL, and public search results are ambiguous. Awwwards was reviewed as a broad source of contemporary design work, but no individual Nick Ho portfolio is claimed as verified.
- [Awwwards — Websites](https://www.awwwards.com/websites/) and [Healthcare](https://www.awwwards.com/websites/healthcare/) — used as broad visual-quality references, not source-code templates.
- [Pexels](https://www.pexels.com/) and [Pexels Videos](https://www.pexels.com/videos/) — noted as potential sources for replacement clinic media. No new Pexels asset was added.

## 21st MCP integration

Reference: https://21st.dev/api/mcp and setup: https://docs.21st.dev/mcp

The supplied URL is an HTTP MCP endpoint and public setup documentation describes an API-key header. This website build environment did not expose a confirmed 21st MCP connection, and no user API key was provided. The integration was not configured or tested. No key or MCP secret is included in the archive. For future developer-tool setup, follow the official setup guide and keep keys in local client configuration or a secret manager, never in this public website source.

## Technical choices

- Kept the original static architecture; no framework or build system was added.
- Used native HTML controls rather than recreating React-only components.
- Used GSAP + ScrollTrigger for optional motion, with CSS fallback and `prefers-reduced-motion` support.
- Did not add WebGL because it was not justified by the page's purpose.
- Did not add a backend, analytics, tracking or a fake booking-success state.
