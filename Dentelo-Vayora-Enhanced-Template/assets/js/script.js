'use strict';

(() => {
  const config = window.siteConfig;
  if (!config) return;

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const esc = (value = '') => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  const safeUrl = (value = '') => /^(https?:|mailto:|tel:|#|\.\/|assets\/)/i.test(String(value).trim()) ? String(value).trim() : '';
  const initials = (name = '') => name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join('').toUpperCase();
  const serviceById = id => config.services.find(service => service.id === id);

  function applyBrandAndCopy() {
    const root = document.documentElement;
    const brand = config.brand || {};
    if (brand.primary) root.style.setProperty('--ink', brand.primary);
    if (brand.secondary) root.style.setProperty('--sea', brand.secondary);
    if (brand.accent) root.style.setProperty('--mint', brand.accent);
    if (brand.paper) root.style.setProperty('--paper', brand.paper);
    $$('[data-config]').forEach(el => {
      const key = el.dataset.config;
      const text = config.content?.[key] ?? config.clinic?.[key];
      if (typeof text === 'string') el.innerHTML = esc(text).replace(/&lt;em&gt;/g, '<em>').replace(/&lt;\/em&gt;/g, '</em>').replace(/&lt;br\s*\/??&gt;/gi, '<br>');
    });
    $$('[data-clinic-name]').forEach(el => { el.textContent = config.clinic.name || 'Dental practice'; });
    const logoPath = safeUrl(config.clinic?.logo || '');
    $$('.brand-mark').forEach(mark => {
      if (logoPath) { mark.classList.add('has-image'); mark.innerHTML = `<img src="${esc(logoPath)}" alt="">`; }
    });
    document.title = `${config.clinic.name || 'Dental practice'} — Care that starts with listening`;
    const description = $('meta[name="description"]');
    if (description && config.content?.heroDescription) description.content = config.content.heroDescription;
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = document.title;
    const ogDescription = $('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = config.content?.heroDescription || '';
  }

  function renderServices() {
    const grid = $('#services-grid');
    const select = $('#appointment-service');
    if (!grid || !select) return;
    const services = Array.isArray(config.services) ? config.services : [];
    grid.innerHTML = services.map((service, index) => {
      const icon = safeUrl(service.icon);
      return `<article class="service-item" data-service-card data-reveal style="--service-index:${index}">
        <div class="service-card-top"><span class="service-number">${String(index + 1).padStart(2, '0')}</span>${icon ? `<img class="service-icon" src="./${esc(icon.replace(/^\.\//, ''))}" alt="" width="48" height="48" loading="lazy">` : '<span class="service-icon-fallback" aria-hidden="true">✳</span>'}</div>
        <p class="service-category">${esc(service.category || 'Dental care')}</p><h3>${esc(service.title)}</h3><p class="service-description">${esc(service.description)}</p>
        <button class="service-inquire" type="button" data-service-inquiry="${esc(service.id)}" aria-label="Ask about ${esc(service.title)}">Ask about this <span aria-hidden="true">↗</span></button>
      </article>`;
    }).join('');
    select.innerHTML = '<option value="">Choose a service (optional)</option>' + services.map(service => `<option value="${esc(service.id)}">${esc(service.title)}</option>`).join('');
  }

  function renderApproach() {
    const points = $('#approach-points');
    if (points) points.innerHTML = (config.approachPoints || []).map(item => `<div class="approach-point"><span>${esc(item.number)}</span><div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div></div>`).join('');
    const values = $('#values-list');
    if (values) values.innerHTML = (config.values || []).map(item => `<article class="value-row"><span class="value-number">${esc(item.number)}</span><div><h3>${esc(item.title)}</h3><p>${esc(item.text)}</p></div><span class="value-arrow" aria-hidden="true">↗</span></article>`).join('');
  }

  function renderDoctors() {
    const team = Array.isArray(config.doctors) ? config.doctors.filter(person => person && person.name && person.title && person.image) : [];
    const section = $('#team');
    const grid = $('#team-grid');
    if (!section || !grid) return;
    if (!team.length) { section.hidden = true; return; }
    section.hidden = false;
    grid.innerHTML = team.map(person => `<article class="team-card" data-reveal>
      <div class="team-image">${safeUrl(person.image) ? `<img src="./${esc(person.image.replace(/^\.\//, ''))}" alt="Portrait of ${esc(person.name)}" loading="lazy">` : `<span>${esc(initials(person.name))}</span>`}</div>
      <div class="team-details"><h3>${esc(person.name)}</h3><p class="team-title">${esc(person.title)}</p>${person.specialty ? `<p class="team-specialty">${esc(person.specialty)}</p>` : ''}${person.qualifications ? `<p class="team-qualifications">${esc(person.qualifications)}</p>` : ''}${person.bio ? `<p class="team-bio">${esc(person.bio)}</p>` : ''}${safeUrl(person.profileUrl) ? `<a href="${esc(person.profileUrl)}" class="text-link" target="_blank" rel="noopener noreferrer">Professional profile <span aria-hidden="true">↗</span></a>` : ''}</div>
    </article>`).join('');
  }

  function renderBlog() {
    const posts = Array.isArray(config.blogPosts) ? config.blogPosts : [];
    const filters = $('#blog-filters');
    const grid = $('#blog-grid');
    const dialogContent = $('#article-dialog-content');
    if (!filters || !grid) return;
    const categories = ['All articles', ...new Set(posts.map(post => post.category).filter(Boolean))];
    filters.innerHTML = categories.map((category, index) => `<button class="filter-button${index === 0 ? ' is-active' : ''}" type="button" data-filter="${esc(category)}" aria-pressed="${index === 0 ? 'true' : 'false'}">${esc(category)}</button>`).join('');
    const paintPosts = category => {
      const shown = category === 'All articles' ? posts : posts.filter(post => post.category === category);
      grid.innerHTML = shown.map((post, index) => `<article class="journal-card" data-post-id="${esc(post.id)}" data-reveal style="--post-index:${index}">
        <button class="journal-image" type="button" data-open-article="${esc(post.id)}" aria-label="Read ${esc(post.title)}">${safeUrl(post.image) ? `<img src="./${esc(post.image.replace(/^\.\//, ''))}" alt="${esc(post.imageAlt || '')}" loading="lazy" width="1180" height="800">` : '<span aria-hidden="true">✳</span>'}<span class="journal-image-arrow" aria-hidden="true">↗</span></button>
        <div class="journal-card-content"><div class="journal-meta"><span>${esc(post.category || 'Dental health')}</span><span>${esc(post.readTime || 'Article')}</span></div><h3><button type="button" class="journal-title-button" data-open-article="${esc(post.id)}">${esc(post.title)}</button></h3><p>${esc(post.summary)}</p><button class="journal-read-link" type="button" data-open-article="${esc(post.id)}">Read article <span aria-hidden="true">→</span></button></div>
      </article>`).join('');
      if (!shown.length) grid.innerHTML = '<p class="empty-state">No articles are available in this category yet.</p>';
    };
    paintPosts('All articles');
    filters.addEventListener('click', event => {
      const button = event.target.closest('[data-filter]');
      if (!button) return;
      $$('[data-filter]', filters).forEach(item => { const active = item === button; item.classList.toggle('is-active', active); item.setAttribute('aria-pressed', String(active)); });
      paintPosts(button.dataset.filter);
      initRevealForNewContent();
    });
    grid.addEventListener('click', event => {
      const button = event.target.closest('[data-open-article]');
      if (!button) return;
      const post = posts.find(item => item.id === button.dataset.openArticle);
      if (!post || !dialogContent) return;
      dialogContent.innerHTML = `<p class="eyebrow"><span class="eyebrow-line"></span>${esc(post.category || 'Dental health')} <span class="dialog-dot">·</span> ${esc(post.readTime || '')}</p><h2 id="article-dialog-title">${esc(post.title)}</h2><p class="article-intro">${esc(post.summary)}</p>${(post.paragraphs || []).map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}<p class="article-medical-note">General educational information only. This is not a diagnosis or a substitute for professional dental advice.</p>${post.references?.length ? `<h3>Further reading</h3><ul>${post.references.map(ref => `<li><a href="${esc(safeUrl(ref.url))}" target="_blank" rel="noopener noreferrer">${esc(ref.label)}</a></li>`).join('')}</ul>` : ''}`;
      const dialog = $('#article-dialog');
      if (dialog?.showModal) dialog.showModal();
      else { dialog?.setAttribute('open', ''); dialog?.classList.add('is-open'); }
    });
  }

  function renderFaqs() {
    const list = $('#faq-list');
    if (!list) return;
    list.innerHTML = (config.faqs || []).map((item, index) => `<article class="faq-item"><h3><button type="button" class="faq-question" id="faq-question-${index + 1}" aria-expanded="false" aria-controls="faq-answer-${index + 1}"><span class="faq-index">${String(index + 1).padStart(2, '0')}</span><span>${esc(item.question)}</span><span class="faq-toggle" aria-hidden="true"></span></button></h3><div class="faq-answer" id="faq-answer-${index + 1}" role="region" aria-labelledby="faq-question-${index + 1}" hidden><p>${esc(item.answer)}</p></div></article>`).join('');
    list.addEventListener('click', event => {
      const button = event.target.closest('.faq-question');
      if (!button) return;
      const answer = document.getElementById(button.getAttribute('aria-controls'));
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
      // Keep one answer open at a time, and expose state to assistive technology.
      $$('.faq-question', list).forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        const panel = document.getElementById(other.getAttribute('aria-controls'));
        if (panel) { panel.hidden = true; panel.style.maxHeight = ''; }
      });
      button.setAttribute('aria-expanded', String(shouldOpen));
      if (answer) { answer.hidden = !shouldOpen; answer.style.maxHeight = shouldOpen ? `${answer.scrollHeight + 24}px` : ''; }
    });
  }

  function renderContacts() {
    const clinic = config.clinic || {};
    const phone = String(clinic.phone || '').trim();
    const email = String(clinic.email || config.appointment?.emailFallback || '').trim();
    const address = String(clinic.address || '').trim();
    const contactBlock = $('#appointment-contact');
    const footerContact = $('#footer-contact-details');
    const footerHours = $('#footer-hours');
    const contactActions = $('#contact-actions');
    const items = [];
    if (phone) items.push(`<a href="tel:${esc(phone.replace(/[^+\d]/g, ''))}" class="contact-shortcut"><span class="contact-shortcut-icon" aria-hidden="true">↗</span><span><small>Call the clinic</small><strong>${esc(clinic.phoneDisplay || phone)}</strong></span></a>`);
    if (email) items.push(`<a href="mailto:${esc(email)}" class="contact-shortcut"><span class="contact-shortcut-icon" aria-hidden="true">↗</span><span><small>Email the clinic</small><strong>${esc(email)}</strong></span></a>`);
    if (contactBlock) contactBlock.innerHTML = items.join('') || '<p class="contact-unconfigured">Clinic contact options will appear here once a real phone number or email address is added to the configuration.</p>';
    if (contactActions) contactActions.innerHTML = [phone ? `<a class="button button-outline" href="tel:${esc(phone.replace(/[^+\d]/g, ''))}">Call the clinic <span aria-hidden="true">↗</span></a>` : '', email ? `<a class="button button-outline" href="mailto:${esc(email)}">Send an email <span aria-hidden="true">↗</span></a>` : '', clinic.mapUrl && safeUrl(clinic.mapUrl) && address ? `<a class="button button-outline" href="${esc(safeUrl(clinic.mapUrl))}" target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a>` : '', !phone && !email ? '<a class="button button-primary" href="#appointment">Send an inquiry <span aria-hidden="true">↗</span></a>' : ''].filter(Boolean).join('');
    if (footerContact) {
      const contactBits = [];
      if (address) contactBits.push(`<address>${esc(address)}</address>`);
      if (phone) contactBits.push(`<a href="tel:${esc(phone.replace(/[^+\d]/g, ''))}">${esc(clinic.phoneDisplay || phone)}</a>`);
      if (email) contactBits.push(`<a href="mailto:${esc(email)}">${esc(email)}</a>`);
      footerContact.innerHTML = contactBits.join('') || '<p>Clinic contact details can be added in <code>assets/js/site-config.js</code>.</p>';
    }
    if (footerHours) footerHours.innerHTML = Array.isArray(clinic.hours) && clinic.hours.length ? `<p class="footer-heading">Hours</p>${clinic.hours.map(entry => `<p>${esc(entry.days)} <span>${esc(entry.hours)}</span></p>`).join('')}` : '';
    const socialContainer = $('#footer-socials');
    if (socialContainer) {
      const socials = Object.entries(clinic.socials || {}).filter(([name, url]) => url && /^https?:\/\//i.test(String(url).trim()));
      socialContainer.innerHTML = socials.map(([name, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(name)} (opens in a new tab)">${esc(name)}</a>`).join('');
      socialContainer.hidden = !socials.length;
    }
  }

  function setupAppointmentForm() {
    const form = $('#appointment-form');
    const status = $('#form-status');
    const submit = $('#appointment-submit');
    const date = $('#appointment-date');
    if (!form || !status || !submit) return;
    if (date) {
      const localToday = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 10);
      date.min = localToday;
    }
    let preparedSignature = '';
    const resetPreparedInquiry = () => {
      if (!preparedSignature) return;
      preparedSignature = '';
      submit.disabled = false;
      submit.removeAttribute('aria-disabled');
      status.textContent = '';
      status.className = 'form-status';
    };
    form.addEventListener('input', resetPreparedInquiry);
    form.addEventListener('change', resetPreparedInquiry);
    $('#services-grid')?.addEventListener('click', event => {
      const button = event.target.closest('[data-service-inquiry]');
      if (!button) return;
      const service = serviceById(button.dataset.serviceInquiry);
      const select = $('#appointment-service');
      if (select && service) select.value = service.id;
      $('#appointment')?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      window.setTimeout(() => $('#patient-name')?.focus({ preventScroll: true }), 350);
    });
    const errorFields = [
      { input: $('#patient-name'), error: $('#name-error'), message: 'Enter your name so the clinic knows who to contact.' },
      { input: $('#patient-phone'), error: $('#phone-error'), message: 'Enter a valid phone number for the clinic to reach you.' },
      { input: date, error: $('#date-error'), message: 'Choose today or a future date.' }
    ];
    const validate = () => {
      let valid = true;
      errorFields.forEach(({ input, error, message }) => {
        if (!input || !error) return;
        const invalid = !input.checkValidity();
        if (input === date && input.value && input.value < input.min) { input.setCustomValidity(message); } else { input.setCustomValidity(''); }
        const reallyInvalid = !input.checkValidity();
        input.setAttribute('aria-invalid', String(reallyInvalid));
        error.textContent = reallyInvalid ? (input.validity.valueMissing ? 'This field is required.' : message) : '';
        if (reallyInvalid) valid = false;
      });
      if (!valid) errorFields.find(({ input }) => input && !input.checkValidity())?.input?.focus();
      return valid;
    };
    errorFields.forEach(({ input }) => input?.addEventListener('input', () => {
      input.setCustomValidity('');
      const item = errorFields.find(field => field.input === input);
      if (item?.error && input.checkValidity()) { item.error.textContent = ''; input.setAttribute('aria-invalid', 'false'); }
    }));
    form.addEventListener('submit', event => {
      event.preventDefault();
      status.textContent = '';
      status.className = 'form-status';
      if (!validate()) { status.textContent = 'Please review the highlighted fields.'; status.classList.add('is-error'); return; }
      const data = new FormData(form);
      const selected = serviceById(String(data.get('service') || ''));
      const messageLines = [
        `Appointment inquiry for ${config.clinic?.name || 'the dental clinic'}`,
        `Name: ${String(data.get('name') || '').trim()}`,
        `Phone: ${String(data.get('phone') || '').trim()}`,
        `Preferred date: ${String(data.get('date') || 'No preference')}`,
        `Preferred time: ${String(data.get('time') || 'No preference')}`,
        `Service: ${selected?.title || 'Not specified'}`,
        `Note: ${String(data.get('message') || '').trim() || 'None'}`
      ].join('\n');
      const whatsapp = String(config.appointment?.whatsappNumber || '').replace(/\D/g, '');
      const fallbackEmail = String(config.appointment?.emailFallback || config.clinic?.email || '').trim();
      const bookingUrl = safeUrl(config.appointment?.bookingUrl || '');
      const hasDestination = Boolean(bookingUrl || whatsapp || fallbackEmail);
      if (hasDestination && preparedSignature === messageLines) {
        status.textContent = 'This same inquiry has already been prepared. Change a field before opening another copy.';
        status.classList.add('is-preview');
        return;
      }
      const markPrepared = () => {
        preparedSignature = messageLines;
        submit.disabled = true;
        submit.setAttribute('aria-disabled', 'true');
      };
      if (bookingUrl) {
        markPrepared();
        window.open(bookingUrl, '_blank', 'noopener,noreferrer');
        status.textContent = 'Your booking destination has opened in a new tab. Follow its steps to complete the request.';
        status.classList.add('is-success');
        return;
      }
      if (whatsapp) {
        markPrepared();
        const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(messageLines)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        status.textContent = 'WhatsApp should open with your inquiry prepared. Review the message and tap Send there; no message is sent automatically.';
        status.classList.add('is-success');
        return;
      }
      if (fallbackEmail) {
        markPrepared();
        const subject = encodeURIComponent(`Appointment inquiry — ${config.clinic?.name || 'Dental clinic'}`);
        window.location.href = `mailto:${encodeURIComponent(fallbackEmail)}?subject=${subject}&body=${encodeURIComponent(messageLines)}`;
        status.textContent = 'Your email app should open with the inquiry prepared. Review it and send it from your email app; nothing is sent automatically.';
        status.classList.add('is-success');
        return;
      }
      status.textContent = 'Preview mode: your details were not sent or stored. Add the clinic’s real booking URL, WhatsApp number or email address in assets/js/site-config.js before using this form with patients.';
      status.classList.add('is-preview');
    });
  }

  function setupNavigation() {
    const header = $('[data-header]');
    const nav = $('[data-navbar]');
    const toggle = $('[data-nav-toggler]');
    const navLinks = $$('[data-nav-link]');
    const backTop = $('[data-back-top-btn]');
    const mobileAppointment = $('[data-mobile-appointment]');
    const appointmentSection = $('#appointment');
    if (!header || !nav || !toggle) return;
    const closeNav = () => { nav.classList.remove('is-open'); toggle.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Open navigation'); };
    toggle.addEventListener('click', () => {
      const open = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', open); toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
    navLinks.forEach(link => link.addEventListener('click', closeNav));
    document.addEventListener('click', event => { if (nav.classList.contains('is-open') && !nav.contains(event.target) && !toggle.contains(event.target)) closeNav(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeNav(); const dialog = $('#article-dialog'); if (dialog?.open) dialog.close(); } });
    const updateScroll = () => {
      const scrolled = window.scrollY > 18;
      header.classList.toggle('is-scrolled', scrolled);
      backTop?.classList.toggle('is-visible', window.scrollY > 580);
      mobileAppointment?.classList.toggle('is-active', window.innerWidth <= 580 && window.scrollY > 260);
    };
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    if ('IntersectionObserver' in window && appointmentSection && mobileAppointment) {
      const observer = new IntersectionObserver(entries => {
        const isVisible = entries.some(entry => entry.isIntersecting);
        mobileAppointment.classList.toggle('is-obscured', isVisible);
      }, { threshold: 0.05 });
      observer.observe(appointmentSection);
    }
    if ('IntersectionObserver' in window) {
      const sectionIds = ['home', 'services', 'about', 'journal', 'faq', 'contact'];
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          navLinks.forEach(link => link.classList.toggle('is-current', link.hash === `#${entry.target.id}`));
        });
      }, { rootMargin: '-38% 0px -52% 0px', threshold: 0 });
      sections.forEach(section => observer.observe(section));
    }
  }

  function setupDialog() {
    const dialog = $('#article-dialog');
    const close = $('[data-dialog-close]');
    if (!dialog || !close) return;
    close.addEventListener('click', () => { if (dialog.close) dialog.close(); else { dialog.removeAttribute('open'); dialog.classList.remove('is-open'); } });
    dialog.addEventListener('click', event => { if (event.target === dialog && dialog.close) dialog.close(); });
    dialog.addEventListener('close', () => { const articleButton = document.activeElement; if (articleButton?.matches?.('[data-open-article]')) articleButton.focus(); });
  }

  function initRevealForNewContent() {
    if (!window.gsap || !window.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const newItems = $$('[data-reveal]:not([data-reveal-initialized])');
    newItems.forEach(element => {
      element.dataset.revealInitialized = 'true';
      window.gsap.fromTo(element, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } });
    });
    window.ScrollTrigger.refresh();
  }

  function setupMotion() {
    if (!window.gsap || !window.ScrollTrigger || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    try {
      window.gsap.registerPlugin(window.ScrollTrigger);
      const heroCopy = $('.hero-copy');
      const heroArt = $('[data-hero-art]');
      if (heroCopy) window.gsap.fromTo($$('.eyebrow, .hero-copy h1, .hero-description, .hero-actions, .hero-note', heroCopy), { y: 24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.75, stagger: 0.11, ease: 'power3.out', delay: 0.08 });
      if (heroArt) window.gsap.fromTo(heroArt, { y: 18, autoAlpha: 0, scale: 0.985 }, { y: 0, autoAlpha: 1, scale: 1, duration: 1, ease: 'power2.out', delay: 0.2 });
      $$('[data-reveal]:not(.service-item)').forEach(element => {
        element.dataset.revealInitialized = 'true';
        const isImage = element.matches('.about-visual, .service-feature');
        window.gsap.fromTo(element, { y: isImage ? 14 : 22, autoAlpha: 0, ...(isImage ? { scale: 0.99 } : {}) }, { y: 0, autoAlpha: 1, scale: 1, duration: isImage ? 0.95 : 0.72, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });
      const serviceCards = $$('[data-service-card]');
      serviceCards.forEach(element => { element.dataset.revealInitialized = 'true'; });
      if (serviceCards.length) window.gsap.fromTo(serviceCards, { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.07, ease: 'power2.out', scrollTrigger: { trigger: '#services-grid', start: 'top 85%', once: true } });
      window.ScrollTrigger.refresh();
    } catch (error) {
      // Progressive enhancement: remove any partial animation styles if a third-party script fails.
      if (window.gsap) window.gsap.set('[data-reveal], .hero-copy > *, [data-hero-art]', { clearProps: 'opacity,visibility,transform' });
      console.warn('Motion enhancement was skipped; all content remains available.', error);
    }
  }

  function setupSmallInteractions() {
    $('#current-year').textContent = String(new Date().getFullYear());
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) document.documentElement.classList.add('reduced-motion');
  }

  applyBrandAndCopy();
  renderServices();
  renderApproach();
  renderDoctors();
  renderBlog();
  renderFaqs();
  renderContacts();
  setupAppointmentForm();
  setupNavigation();
  setupDialog();
  setupSmallInteractions();
  setupMotion();
})();
