# Dentelo — Vayora Design System

This file documents the current implementation in `assets/css/style.css`. Most practice content and contact information lives in `assets/js/site-config.js`.

## Visual direction

A calm, editorial dental-care experience: a warm near-white canvas, deep ink, muted teal, soft mint, and restrained coral details. Avoid loud gradients, generic repeated cards, unnecessary glass effects, or motion that competes with patient information.

## Core tokens

```css
--ink: #1c3545;
--ink-soft: #425965;
--sea: #477e85;
--sea-dark: #285b62;
--mint: #d6e5df;
--paper: #f7faf9;
--white: #fff;
--canvas: #edf3f0;
--line: #dce5e1;
--muted: #72828a;
--coral: #e0aa91;
```

The live CSS also defines responsive container width, spacing, shadows, radii, easing and typography tokens. Use these first before adding one-off values.

## Typography

- **Display and headings:** Manrope, 600–800.
- **Body and interface:** DM Sans, 400–700.
- Keep paragraph copy comfortable to read, with generous line-height and a restrained maximum width.
- Fonts load from Google Fonts. System fallbacks remain defined in the CSS font stacks.

## Layout and spacing

- Main content uses a centered responsive container capped at roughly 1180px.
- Section spacing uses `--section-space` and changes at tablet/mobile breakpoints.
- Prefer image-led editorial splits and purposeful asymmetry over repeating the same grid everywhere.
- Keep mobile header controls compact and use full-width form controls when appropriate.

## Buttons and focus

- Primary CTA: deep ink background, white text.
- Secondary actions: text links with small directional feedback or outlined buttons for contact shortcuts.
- All interactive elements must retain a visible `:focus-visible` outline.
- Use real buttons for actions and real anchors for navigation.

## Responsive breakpoints

- `max-width: 1060px`: tighter desktop spacing and grids.
- `max-width: 820px`: mobile/tablet navigation, stacked section headings and rebalanced layouts.
- `max-width: 580px`: compact mobile compositions and sticky appointment action.
- `max-width: 360px`: narrow-device refinements.

## Motion and accessibility

GSAP and ScrollTrigger add optional, restrained entrance/reveal motion. CSS owns hover feedback. `prefers-reduced-motion: reduce` disables the GSAP layer and reduces CSS transitions. Do not hide meaningful content until animation JavaScript runs.
