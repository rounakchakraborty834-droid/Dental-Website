/*
 * DENTELO / VAYORA TEMPLATE CONFIGURATION
 * Replace example copy and contact details with information verified by the practice.
 * Leave unavailable contact fields blank. Empty contact details are intentionally not rendered.
 */
window.siteConfig = {
  clinic: {
    name: "Dentelo",
    logo: "",
    announcement: "A calmer approach to dental care.",
    tagline: "Thoughtful care, clearer choices",
    phone: "",
    phoneDisplay: "",
    email: "",
    address: "",
    mapUrl: "",
    hours: [],
    socials: { instagram: "", facebook: "", linkedin: "" }
  },
  brand: { primary: "#1c3545", secondary: "#477e85", accent: "#d6e5df", paper: "#f7faf9" },
  appointment: { whatsappNumber: "", bookingUrl: "", emailFallback: "" },
  content: {
    heroEyebrow: "Thoughtful care, clearer choices",
    heroTitle: "A healthier smile begins with <em>feeling heard.</em>",
    heroDescription: "Dental care should feel clear, personal and considered. Start with a conversation, understand your options, and take the next step at your own pace.",
    heroNote: "Clear information. Considered care. A plan that makes sense to you.",
    heroImageCaption: "Care that puts the conversation first",
    servicesTitle: "Care for every stage<br>of your smile.",
    servicesIntro: "From preventive check-ups to treatment conversations, explore the kinds of care a dental practice may offer. Your clinic can tailor this list to its confirmed services.",
    aboutTitle: "A little more listening. A lot more clarity.",
    aboutParagraphOne: "Every patient brings a different question, concern and history. A good conversation makes room for all of it before decisions are made.",
    aboutParagraphTwo: "We believe dental information should be straightforward, treatment options should be explained clearly, and patients should feel able to ask questions.",
    teamTitle: "Meet your dental team.",
    teamIntro: "Learn about the clinicians who may be part of your care.",
    valuesTitle: "A dental visit should leave you with more clarity, not more questions.",
    valuesIntro: "Use this space to describe what patients can expect from your practice—once those commitments reflect how your team actually works.",
    journalTitle: "A little knowledge goes a long way.",
    journalIntro: "Plain-language notes on everyday oral care, appointments and questions worth asking. General information only—not a substitute for advice from a dental professional.",
    faqTitle: "A few things you might be wondering.",
    faqIntro: "Have another question? Send the clinic an inquiry and ask what to expect before booking.",
    appointmentTitle: "Let’s find the right next step.",
    appointmentIntro: "Tell us a little about the appointment you have in mind. The clinic can follow up to discuss availability and next steps.",
    contactTitle: "A question is a good place to start.",
    footerText: "A clear, considered approach to dental care—one conversation at a time."
  },
  services: [
    { id: "preventive-care", title: "Preventive oral care", category: "Everyday care", description: "Routine visits and practical guidance to help you understand and maintain your oral health.", icon: "assets/images/service-icon-4.png" },
    { id: "dental-consultation", title: "Dental consultation", category: "First steps", description: "A conversation about your concerns, questions and possible next steps with a dental professional.", icon: "assets/images/service-icon-5.png" },
    { id: "cavity-assessment", title: "Cavity assessment", category: "Assessment", description: "An examination to assess tooth concerns and discuss whether further care may be needed.", icon: "assets/images/service-icon-6.png" },
    { id: "root-canal", title: "Root canal treatment", category: "Treatment", description: "Learn what root canal treatment involves and whether it may be relevant to your situation.", icon: "assets/images/service-icon-1.png" },
    { id: "teeth-alignment", title: "Teeth alignment", category: "Alignment", description: "Discuss alignment concerns and the options a qualified clinician may recommend.", icon: "assets/images/service-icon-2.png" },
    { id: "cosmetic-dentistry", title: "Cosmetic dentistry", category: "Smile care", description: "Explore appropriate cosmetic options and ask about benefits, limitations and care needs.", icon: "assets/images/service-icon-3.png" }
  ],
  approachPoints: [
    { number: "01", title: "Listen first", text: "Start with what matters to you and the questions you want answered." },
    { number: "02", title: "Explain clearly", text: "Make room for plain-language explanations and informed choices." },
    { number: "03", title: "Plan together", text: "Discuss possible next steps with a qualified dental professional." }
  ],
  values: [
    { number: "01", title: "Clarity before decisions", text: "Understand the options, ask questions and take time to discuss what is right for you." },
    { number: "02", title: "Care that respects your questions", text: "Your concerns deserve a clear answer and a conversation that makes space for them." },
    { number: "03", title: "Prevention as a partnership", text: "Small everyday habits and appropriate check-ups can support ongoing oral health." }
  ],
  /* Only add real team members with verified names, photos, titles and qualifications. */
  doctors: [],
  blogPosts: [
    {
      id: "daily-oral-care", category: "Everyday care", title: "A simple routine for looking after your teeth", readTime: "3 min read", image: "assets/images/blog-1.jpg", imageAlt: "A patient receiving dental care", summary: "A few repeatable habits can make day-to-day oral care easier to maintain.",
      paragraphs: ["A useful oral-care routine is one you can repeat consistently. Guidance from the American Dental Association includes brushing twice a day for two minutes with fluoride toothpaste and cleaning between teeth daily. A dentist can tailor advice to your needs.", "Choose a soft-bristled toothbrush and take time to clean all tooth surfaces gently. Clean between your teeth with floss or another suitable interdental cleaner. Follow the directions on your dental products and ask your dental professional about any technique questions.", "Routine care is not a substitute for an examination. If you notice ongoing discomfort, bleeding gums or a change that concerns you, arrange an assessment rather than relying on home care alone."],
      references: [{ label: "American Dental Association — Home oral care", url: "https://www.ada.org/resources/ada-library/oral-health-topics/home-care" }, { label: "American Dental Association — Interdental cleaners", url: "https://www.ada.org/resources/ada-library/oral-health-topics/floss" }]
    },
    {
      id: "routine-checkups", category: "Appointments", title: "What happens during a routine dental check-up?", readTime: "4 min read", image: "assets/images/blog-2.jpg", imageAlt: "Dental professional preparing for an examination", summary: "Knowing the usual steps can make it easier to prepare for your next visit.",
      paragraphs: ["A dental check-up generally begins with a conversation about your concerns, health history and any changes since your last visit. The exact process depends on your needs and the practice's approach.", "A clinician may examine your teeth, gums and other areas of your mouth, then explain any findings and the options available. X-rays are not automatically needed at every visit; the dental professional decides whether they are appropriate for your situation.", "It can help to bring a list of questions, mention any discomfort and ask the clinician to explain unfamiliar terms. If you are unsure about a recommendation, ask about the reason, alternatives and what may happen if you wait."]
    },
    {
      id: "tooth-discomfort", category: "When to seek care", title: "Tooth discomfort: when should you ask for advice?", readTime: "3 min read", image: "assets/images/blog-3.jpg", imageAlt: "Close-up of a dental examination", summary: "Persistent pain or swelling deserves professional assessment instead of guesswork.",
      paragraphs: ["Tooth discomfort can have different causes, and symptoms alone cannot establish the cause. Contact a dentist if pain persists, keeps returning, or is accompanied by pain when biting, fever, a bad taste or swelling.", "Seek urgent dental advice if you suspect an infection or have significant swelling. Swelling that affects breathing, swallowing or speaking needs emergency medical attention.", "This article is general information only and cannot diagnose a condition. A dental professional can assess your symptoms and explain appropriate next steps."],
      references: [{ label: "NHS — Toothache", url: "https://www.nhs.uk/symptoms/toothache/" }, { label: "NHS — Dental abscess", url: "https://www.nhs.uk/conditions/dental-abscess/" }]
    },
    {
      id: "prepare-for-visit", category: "Appointments", title: "How to feel more prepared for a dental appointment", readTime: "2 min read", image: "assets/images/hero-banner.png", imageAlt: "Dental professional in a white coat", summary: "A few details to gather before you visit can help make the conversation more useful.",
      paragraphs: ["Before a visit, jot down the questions you want to cover and when any concern started. Be ready to share relevant medical history and medicines with your dental professional through the practice's preferred private process.", "You can ask what an examination may involve, what the proposed next steps are, and whether there are alternatives. It is reasonable to ask for an explanation if something is unclear.", "For an appointment request on this demo website, the form is not sent anywhere until a real clinic contact method has been configured. Never use a demonstration form to send urgent or sensitive medical details."]
    }
  ],
  faqs: [
    { question: "How do I request an appointment?", answer: "Use the inquiry form on this page. Once the practice configures a real phone, email or booking destination, the form can open that channel for you. An inquiry is not a confirmed booking." },
    { question: "What should I bring to my first visit?", answer: "Ask the clinic what it needs. It may be useful to have relevant medical history, a list of medicines and your questions ready, shared through the practice's preferred private process." },
    { question: "Which treatment is right for me?", answer: "That depends on an examination and your individual circumstances. A qualified dental professional can explain findings, options, likely benefits and limitations, and any alternatives." },
    { question: "What if I am worried about a symptom?", answer: "Contact a dental professional for advice, especially if pain persists or you notice swelling. Severe swelling that affects breathing, swallowing or speaking needs emergency medical attention." },
    { question: "Are the services shown guaranteed to be available?", answer: "No. This is a reusable demo template. The clinic owner should confirm which services are offered and update the central configuration before publishing." }
  ]
};
