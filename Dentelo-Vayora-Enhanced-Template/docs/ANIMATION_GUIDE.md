# Animation guide

## Motion principles

The motion system is designed to add rhythm and hierarchy without delaying information or taking control of scrolling. It uses native page scrolling and avoids scroll hijacking, mandatory pinning, horizontal-scroll sections and WebGL effects that would add weight without improving a dental-clinic task.

## GSAP + ScrollTrigger

`index.html` loads pinned GSAP and ScrollTrigger CDN scripts before `assets/js/script.js`. The main motion layer is implemented in `setupMotion()`:

- The hero copy enters in a short staggered sequence.
- The hero visual settles into place with a restrained translation and scale.
- Content blocks reveal when their top edge enters the viewport.
- Service items use a small stagger rather than animating the entire grid at once.
- Newly rendered journal cards can be initialized after category filtering.

The animation layer checks that both `gsap` and `ScrollTrigger` exist. It does not require them for content rendering or form behavior. If motion initialization throws, partial inline animation properties are cleared and a warning is logged.

## CSS micro-interactions

The navigation underline, button arrow, card lift, service-rule reveal, image zoom, FAQ plus/minus, and back-to-top feedback are CSS transitions. The FAQ itself uses a native button with `aria-expanded` and an associated panel. One FAQ item stays open at a time.

## Reduced motion

The script checks `prefers-reduced-motion: reduce` before initializing GSAP. CSS also shortens transitions and disables smooth scrolling for reduced-motion users. Essential content is not placed in a CSS-hidden state waiting for animation JavaScript.

## Maintenance

- Prefer `transform` and `opacity` over layout-affecting properties.
- Avoid adding ScrollTriggers inside repeatedly invoked callbacks without marking or cleaning them up.
- If more dynamically rendered content is introduced, initialize only new elements and refresh ScrollTrigger once after the batch.
- Test the hero and below-the-fold reveals on actual mobile browsers and with reduced motion enabled.
- The design intentionally does not use WebGL/Three.js: the page is a service-led healthcare template, and the supplied photography plus restrained two-dimensional motion better supports clarity and performance.
