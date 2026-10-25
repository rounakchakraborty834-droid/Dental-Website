<div align="center">

DENTELO
A considered digital experience for modern dental care
A responsive dental-practice website template, customized by Vayora with thoughtful layouts, accessible interactions, configurable clinic content, and restrained motion.

<a href="https://dentistrydemo.netlify.app/">
  <img src="https://img.shields.io/badge/VISIT_LIVE_DEMO-2B6267?style=for-the-badge&logo=netlify&logoColor=white" alt="Visit the live Dentelo demo" />
</a>
<a href="https://vayora.vayora-web-studio.workers.dev/">
  <img src="https://img.shields.io/badge/BUILT_BY-VAYORA-1C3545?style=for-the-badge" alt="Built by Vayora" />
</a>


<img src="https://img.shields.io/badge/HTML5-Structure-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/CSS3-Responsive_Design-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
<img src="https://img.shields.io/badge/JavaScript-Interactions-F7DF1E?style=flat-square&logo=javascript&logoColor=111111" alt="JavaScript" />
<img src="https://img.shields.io/badge/GSAP-Optional_Motion-88CE02?style=flat-square&logo=greensock&logoColor=111111" alt="GSAP" />

</div>

Overview
Dentelo is a polished, one-page website template for a dental practice. It is designed to help visitors understand a clinic's approach, explore example services, read educational content, find answers to common questions, and begin an appointment enquiry.

The visual direction is calm and editorial: deep ink, muted teal, soft mint, generous spacing, and clear typography. The implementation stays lightweight, using HTML, CSS, and vanilla JavaScript rather than requiring a frontend framework or build pipeline.
Demo notice
Dentelo is a demonstration brand, not a verified real clinic. The live demo contains example content. Clinic details, service offerings, clinician profiles, contact information, and imagery must be reviewed and verified before a real practice uses the template. Submitting the demo form does not confirm an appointment.

Live Preview
Live website: dentistrydemo.netlify.app

Created by: Vayora
Features
Area	Included
Responsive experience	Mobile navigation, flexible layouts, sticky mobile appointment action, and back-to-top control.
Services	Configurable service cards with actions that can preselect a service in the enquiry form.
Practice story	Clinic approach, values, and an optional team section that stays hidden until profiles are configured.
Dental journal	Editable educational articles, category filters, and an accessible article dialog.
FAQs	Configurable question-and-answer content with interactive presentation.
Appointment enquiry	Name, phone, preferred date and time, service selection, native validation, and clear status messages.
Motion	Optional GSAP and ScrollTrigger hero/reveal effects, with reduced-motion handling.
SEO foundations	Page title, meta description, Open Graph metadata, favicon, and semantic HTML.


Appointment enquiry behaviour
The form can be configured to direct visitors to a booking URL or prepare a message for WhatsApp or email. The visitor must review and send any prepared message themselves. The site has no backend, database, or submission storage, and an enquiry is not a confirmed booking.
Technology
- HTML5 — semantic page structure
- CSS3 — responsive design system and visual styling
- Vanilla JavaScript — configurable content and interactive behaviour
- GSAP 3.13.0 + ScrollTrigger — optional scroll-based motion
- HTML Dialog API — article modal
- Google Fonts — Manrope and DM Sans
- Netlify — live demo hosting
No framework migration, npm install, or build step is required for the current version. Fonts and animation scripts load from external CDNs, so an internet connection is needed for those enhancements.
Run Locally
Requirements
A modern browser and either Python or Visual Studio Code with the Live Server extension.
Option A — Python
Open a terminal in the project directory and run:
python -m http.server 4173
On Windows, this also works:
py -m http.server 4173
Then open http://localhost:4173.
Option B — VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension if needed.
3. Open index.html and choose Open with Live Server.
Using a local server is recommended over opening index.html directly, because browsers can handle local file access differently.
Customize for a Clinic
Most practice-specific content is managed in assets/js/site-config.js.
1. Brand and copy: Update clinic.name and the editable content using the clinic's approved wording.
2. Contact details: Add verified phone, email, address, map URL, opening hours, and social links. Leave details empty until confirmed.
3. Appointment destination: Configure one valid destination under appointment: bookingUrl, whatsappNumber (digits with country code, without +), or emailFallback.
4. Services: Edit the services list and remove any treatment the clinic does not offer.
5. Clinician profiles: Add verified details to doctors only after confirming names, qualifications, specialties, and photos. The team section is hidden when the list is empty.
6. Journal and FAQs: Update blogPosts and faqs. Article category filters are derived from the article categories.
7. Visual theme: Change the four theme tokens in brand or refine CSS variables in assets/css/style.css.
8. Images: Replace demonstration photography with assets the practice owns or is licensed to use. Keep alt text accurate and do not imply stock images show the real clinic or its staff.
Project Structure
.
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── site-config.js
│   │   └── script.js
│   └── images/
│       ├── hero-banner.png
│       ├── service-banner.png
│       └── about-banner.png
├── docs/
│   ├── ANIMATION_GUIDE.md
│   ├── ASSET_CREDITS.md
│   ├── BUILD_AND_RUN.md
│   ├── CONTENT_VERIFICATION.md
│   ├── DESIGN_AND_SKILL_AUDIT.md
│   └── TEST_REPORT.md
├── favicon.svg
├── index.html
├── README.md
└── style-guide.md
Keep any additional files already present in the repository. The tree above highlights the principal page, configuration, styling, assets, and documentation.
Accessibility & Motion
The template includes semantic page structure, labelled form controls, validation feedback, an accessible article dialog, visible focus styling, responsive navigation, and support for prefers-reduced-motion. GSAP is an enhancement rather than a dependency for the page's core structure.
Deployment
The current demo is hosted on Netlify: dentistrydemo.netlify.app.

For a static deployment, publish the project directory containing index.html and the assets/ folder. No build command is needed for the current version. After deployment, test the page on mobile and desktop and verify that all images, fonts, scripts, and configured contact links load correctly.

Before launching for a real clinic, verify all content and complete the checks in docs/CONTENT_VERIFICATION.md and docs/TEST_REPORT.md.
Documentation
- [`style-guide.md`](style-guide.md) — design tokens, typography, responsive layout, and interaction guidance
- [`docs/ANIMATION_GUIDE.md`](docs/ANIMATION_GUIDE.md) — animation architecture and reduced-motion behaviour
- [`docs/ASSET_CREDITS.md`](docs/ASSET_CREDITS.md) — inherited code and asset notes
- [`docs/BUILD_AND_RUN.md`](docs/BUILD_AND_RUN.md) — setup and local development
- [`docs/CONTENT_VERIFICATION.md`](docs/CONTENT_VERIFICATION.md) — content and launch checks
- [`docs/DESIGN_AND_SKILL_AUDIT.md`](docs/DESIGN_AND_SKILL_AUDIT.md) — implementation decisions and limitations
- [`docs/TEST_REPORT.md`](docs/TEST_REPORT.md) — validation and browser-test results
Credits & Licensing
The supplied project documentation identifies codewithsadee/dentelo as the upstream starter. The supplied archive did not include a standalone LICENSE file. A general statement that a project is free to use is not a substitute for a formal license.

Review docs/ASSET_CREDITS.md and verify permissions for inherited code, photography, fonts, and other assets before commercial redistribution or deployment. This customization does not claim that all inherited code or imagery was originally created by Vayora.
<div align="center">

Designed and customized by Vayora
Open the live Dentelo demo →
</div>
