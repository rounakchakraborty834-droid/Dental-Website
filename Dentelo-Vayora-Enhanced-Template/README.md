# Dentelo — Vayora Dental Website Template

A responsive dental-practice website template customized by Vayora from the supplied Dentelo HTML/CSS/JavaScript starter. It keeps the original lightweight architecture and adds a central practice configuration, clearer English copy, responsive layouts, accessible interactions, optional GSAP scroll motion, article dialogs, category filtering, FAQs, and a deliberately honest appointment-inquiry fallback.

> **Template preview:** Dentelo is a demonstration brand, not a verified real clinic. Contact details are intentionally blank. Services and editorial content are examples that the clinic owner should review before launch. No appointment is confirmed by submitting the demo form.

## Run locally

No build step is required. In the project directory, run a small local server:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173` in a browser. VS Code Live Server also works. A local server is recommended over opening `index.html` directly because browser behavior for local files varies.

Fonts and GSAP/ScrollTrigger are loaded from pinned external CDN URLs, so internet access is needed for the remote font and motion enhancements. If GSAP cannot load, the HTML content and core interactions remain available without the GSAP animation layer.

## Personalize the template

1. Open `assets/js/site-config.js`.
2. Replace `clinic.name` and the editable `content` strings with the practice's approved brand voice.
3. Add the real `phone`, `phoneDisplay`, `email`, `address`, `mapUrl`, opening hours and social profile URLs. Leave fields blank until verified; empty contact details are not shown.
4. Configure **one real appointment destination** under `appointment`: `bookingUrl`, `whatsappNumber` (digits with country code, no `+`), or `emailFallback`. The form only prepares a WhatsApp/email message; the visitor must review and send it themselves. A booking URL opens in a new tab. Do not claim the appointment is confirmed unless a real booking system confirms it.
5. Review the `services` list and remove services the practice does not offer. Service-inquiry buttons preselect the chosen service in the form.
6. Add real team profiles to `doctors` only after names, photos, titles, qualifications and specialties are verified. The team section is hidden when the array is empty.
7. Update `blogPosts` and `faqs`. Articles are opened in an accessible modal rather than pointing to fake pages. Blog category filters are derived from article categories.
8. Update the four CSS theme tokens in `brand` or adjust CSS variables in `assets/css/style.css` for finer design changes.
9. Replace demonstration images with assets the practice owns or is licensed to use. Keep image descriptions accurate and avoid implying that stock photography depicts the actual clinic team. Add verified team portraits under `assets/images/` before configuring team profiles.

## What is included

- Responsive, compact mobile navigation and appointment action.
- Art-directed hero, service grid, approach section, values, editable team section, journal and FAQ.
- Article dialog with full sample article copy and further-reading links.
- Accessible accordion and live form feedback.
- Native validation, preferred date/time, service selection, and booking/WhatsApp/email fallback.
- Sticky mobile CTA that hides around the appointment form, back-to-top control, and current navigation state.
- GSAP + ScrollTrigger hero and scroll-reveal choreography with reduced-motion handling.
- SEO basics, Open Graph title/description, favicon and semantic page structure.
- Setup docs, design/skill audit, animation guide, asset credits and test report.

## Technical notes

- Core stack: HTML, CSS, vanilla JavaScript.
- No framework migration or build tooling is required.
- External animation scripts are optional enhancements; CSS layout and functional fallbacks are local.
- The appointment form is not connected to a backend and does not store submissions.
- There is no canonical URL or organization structured data because no production domain or verified clinic identity was provided.

## Credits and licensing review

The supplied project archive identifies the upstream Dentelo starter as `codewithsadee/dentelo`. The archive did not contain a standalone `LICENSE` file. Its README contains a general “free to use” statement, but that is not a formal open-source license. Review `docs/ASSET_CREDITS.md` before commercial redistribution or deployment, especially for inherited code and image assets. This customization does not assert that all starter code or photography was originally created by Vayora.

## Documentation

- `docs/DESIGN_AND_SKILL_AUDIT.md` — references reviewed, implementation choices and integration limitations.
- `docs/ANIMATION_GUIDE.md` — animation architecture and reduced-motion behavior.
- `docs/ASSET_CREDITS.md` — original source and asset/attribution notes.
- `docs/TEST_REPORT.md` — validation and browser-test results.
