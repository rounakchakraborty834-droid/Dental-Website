# Test report

**Date:** 25 October 2026  
**Project:** Dentelo — Vayora dental website template  
**Scope:** Static markup, local asset references, JavaScript syntax, responsive layouts and core interaction smoke tests.

## Results

| Check | Result | Notes |
|---|---|---|
| JavaScript syntax | PASS | `node --check` passed for `assets/js/script.js` and `assets/js/site-config.js`. |
| CSS syntax parsing | PASS | `tinycss2` parsed the stylesheet without syntax errors (300 top-level rules/at-rules). |
| HTML structure / IDs | PASS | Parsed the source markup; no duplicate IDs. |
| Internal navigation targets | PASS | No broken internal fragment links and no `href="#"` placeholders. |
| Local image and source assets | PASS | All local paths referenced in HTML and all 10 configured image paths exist. |
| Placeholder-language scan | PASS | No matches for `Cras accumsan`, `Aliquam`, `Lorem ipsum` or `dolor sit amet` in the site source. |
| New-tab link safety | PASS | All inspected `target="_blank"` anchors include `noopener noreferrer`. |
| Initial render | PASS | Page title present; 6 services, 4 journal posts and 5 FAQs rendered; unconfigured team section remains hidden. |
| Image loading in smoke test | PASS | 13 images were present after rendering; none reported a failed load. |
| FAQ accordion | PASS | Clicking a question toggles `aria-expanded` and its answer panel. |
| Journal filtering | PASS | Selecting “Appointments” filters the four-post sample to two posts. |
| Service inquiry prefill | PASS | Selecting “Preventive oral care” preselects `preventive-care` in the inquiry form. |
| Inquiry form validation | PASS | Empty required fields show feedback; valid demo submission states that preview details were not sent or stored. |
| Repeat-submission protection | PASS | With a mocked WhatsApp destination, the submit control disables after the inquiry is prepared and a repeated request shows a clear duplicate-prevention message. No message was sent. |
| Article dialog | PASS | Article dialog opens and closes through its controls. |
| Mobile menu | PASS | Opens, updates `aria-expanded`, and closes on Escape. |
| Mobile CTA / back-to-top | PASS | CTA appears after scrolling, is hidden around the appointment form, and back-to-top becomes visible after scrolling. |
| Responsive overflow | PASS | No horizontal page overflow detected at widths 360, 390, 430, 768, 1024, 1280, 1440 and 1920 pixels. |
| Reduced-motion path | PASS | In a reduced-motion browser context, the class is applied and the hero remains visible. |
| Vayora credit | PASS | Link destination, new-tab target and `noopener noreferrer` were verified. |
| Browser JavaScript errors | PASS | No page errors were observed during the smoke test, including the reduced-motion context. |

## Browser-test method and limits

The browser smoke test used Playwright with Chromium. To keep the test isolated from network/CDN access, the supplied HTML, local CSS, `site-config.js` and application JavaScript were loaded in a self-contained browser page, and local image requests were fulfilled from the supplied project assets. The interactions and responsive layouts therefore exercised the shipped source code, but **the remote GSAP and ScrollTrigger CDN scripts were intentionally omitted from this isolated run**. Their runtime animation timing was not independently verified in this environment; the relevant initialization and reduced-motion guards are present in the source and documented in `ANIMATION_GUIDE.md`.

No framework/build step is configured or required. A production build command was not applicable to this static HTML/CSS/JavaScript project. A real booking destination is intentionally not set, so form submission was tested in preview mode; connect a verified clinic booking URL, WhatsApp number or email before collecting inquiries from patients.

## Visual review files

Screenshots were captured after rendering the page at desktop size, plus a 390-pixel mobile hero:

- `qa-screenshots/hero.jpg`
- `qa-screenshots/hero-mobile.jpg`
- `qa-screenshots/services.jpg`
- `qa-screenshots/about.jpg`
- `qa-screenshots/journal.jpg`
- `qa-screenshots/appointment.jpg`
- `qa-screenshots/footer.jpg`

The team section is not shown in the default demo because no real, verified doctor profiles have been configured. Add actual profiles to `assets/js/site-config.js` to enable it.
