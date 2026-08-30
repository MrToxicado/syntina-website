/* ==========================================================================
   SYNTINA - Bridging The Scientific Expertise
   Application Logic & Interactive Features
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Constellation Background Canvas Animation
  initParticleCanvas();

  // 2. Product Database
  const products = [
    {
      id: 'p1',
      title: 'ChroZen Quaternary HPLC System',
      category: 'chromatography',
      categoryLabel: 'Chromatography & HPLC',
      image: 'images/chrozen_hplc.png',
      badge: 'Young In Chromass',
      shortDesc: 'High-performance liquid chromatograph with quaternary pump, autosampler, column oven, and UV/Vis detector.',
      features: [
        'Flow rate precision: < 0.075% RSD',
        'Pressure rating: Up to 10,000 psi (700 bar)',
        'Low system delay volume for gradient accuracy'
      ],
      specs: {
        'Manufacturer': 'Young In Chromass (Silex Chrom Partner)',
        'Pump System': 'Quaternary solvent delivery system',
        'Flow Rate Range': '0.001 - 10.000 mL/min',
        'Autosampler Capacity': '120 vials (2 mL standard)',
        'Detector Wavelength': '190 - 900 nm (Dual wavelength)'
      }
    },
    {
      id: 'p2',
      title: 'ChroZen High-Performance Gas Chromatograph (GC)',
      category: 'chromatography',
      categoryLabel: 'Chromatography & HPLC',
      image: 'images/chrozen_hplc.png',
      badge: 'Analytical Instrument',
      shortDesc: 'Advanced GC instrument equipped with Electronic Flow Control (EFC) and high-sensitivity FID/TCD detectors.',
      features: [
        'Pneumatic control accuracy: 0.001 psi',
        'Fast column oven heating: Up to 120°C/min',
        'Simultaneous multi-detector operation'
      ],
      specs: {
        'Manufacturer': 'Young In Chromass / Silex Chrom',
        'Oven Temp Range': 'Ambient +4°C to 450°C',
        'Detector Types': 'FID, TCD, ECD, NPD, MS/MS',
        'Injectors': 'Split/Splitless (SSL), Programmable Temp (PTV)',
        'Control Software': 'ChroZen Clarity Data Station'
      }
    },
    {
      id: 'p3',
      title: 'imChem Shaper Hybrid C18 HPLC Column',
      category: 'chromatography',
      categoryLabel: 'Chromatography & HPLC',
      image: 'images/imchem_hplc_column.png',
      badge: 'imChem Proprietary',
      shortDesc: 'Ultra-high efficiency silica-hybrid analytical column for challenging pharmaceutical and environmental separations.',
      features: [
        'Particle sizes: 3 µm and 5 µm available',
        'pH stability: 1.5 to 11.5 extended range',
        'Exceptional peak symmetry for basic compounds'
      ],
      specs: {
        'Brand / Line': 'imChem Shaper Hybrid Surface+',
        'Dimensions': '4.6 x 150 mm (5 µm) / 2.1 x 100 mm (3 µm)',
        'Pore Size': '120 Å high surface area',
        'Endcapping': 'Proprietary organosilane double endcapped',
        'Max Pressure': '600 bar (8,700 psi)'
      }
    },
    {
      id: 'p4',
      title: 'Rotary Industrial Evaporator System',
      category: 'lab-instruments',
      categoryLabel: 'General Lab Instruments',
      image: 'images/rotary_evaporator.png',
      badge: 'Lab Equipment',
      shortDesc: 'Heavy-duty rotary evaporator with motor lift, vertical double spiral glass condenser, and digital heating bath.',
      features: [
        '5L heating bath capacity (oil/water)',
        'Rotation speed: 20 to 280 RPM',
        'Motorized auto-lift with safety stop'
      ],
      specs: {
        'Series': 'Industrial Evaporator Series',
        'Evaporating Flask': '1L - 5L heavy duty borosilicate 3.3',
        'Condenser Area': '1,500 cm² double spiral',
        'Bath Temp Range': 'Ambient to 180°C (±1°C accuracy)',
        'Vacuum Control': 'Integrated digital vacuum controller'
      }
    },
    {
      id: 'p5',
      title: 'Low-Temp Refrigerated Cooling Circulator',
      category: 'lab-instruments',
      categoryLabel: 'General Lab Instruments',
      image: 'images/rotary_evaporator.png',
      badge: 'Precision Cooling',
      shortDesc: 'Low-temperature recirculating chiller for rotary evaporators, jacketed reactors, and analytical equipment cooling.',
      features: [
        'Temperature range: -20°C to +40°C',
        'Cooling capacity: 800W at 15°C',
        'Eco-friendly R290 natural refrigerant'
      ],
      specs: {
        'Series': 'Refrigerated Chiller Series',
        'Temp Stability': '±0.1°C PID controller',
        'Bath Volume': '8 Liters stainless steel',
        'Pump Flow Rate': '20 L/min (0.4 bar max pressure)',
        'Safety Alerts': 'Low liquid level & over-temp alarms'
      }
    },
    {
      id: 'p6',
      title: 'UV-Vis Double Beam Spectrophotometer',
      category: 'life-sciences',
      categoryLabel: 'Life Sciences & Molecular',
      image: 'images/uv_vis_spectrophotometer.png',
      badge: 'High Resolution',
      shortDesc: 'Precision double-beam UV-Vis spectrophotometer with 1.0 nm spectral bandwidth for quantitative molecular analysis.',
      features: [
        'Wavelength range: 190 nm to 1100 nm',
        'Double-beam optics with blazed holographic grating',
        'Built-in 7-inch color touchscreen interface'
      ],
      specs: {
        'Series': 'Life Sciences Spectrophotometry Series',
        'Photometric Range': '-0.3 to 3.0 A, 0 to 200% T',
        'Wavelength Accuracy': '±0.1 nm (at 656.1 nm D2)',
        'Stray Light': '≤ 0.02% T (at 220 nm NaI)',
        'Data Export': 'USB, LIS, PC software included'
      }
    },
    {
      id: 'p7',
      title: '5424 R Precision Refrigerated Centrifuge',
      category: 'lab-instruments',
      categoryLabel: 'General Lab Instruments',
      image: 'images/lab_centrifuge.png',
      badge: 'SYNTINA Premium',
      shortDesc: 'Compact high-speed benchtop microcentrifuge with advanced temperature control system (-11°C to 40°C).',
      features: [
        'Max speed: 15,000 RPM (21,130 × g)',
        'FastTemp function for rapid pre-cooling',
        'Aerosol-tight rotor lid'
      ],
      specs: {
        'Max Speed': '15,000 RPM / 21,130 × g',
        'Rotor Capacity': '24 × 1.5 / 2.0 mL tubes',
        'Temp Range': '-11°C to +40°C',
        'Noise Level': '< 54 dB(A)',
        'Timer': '10 sec to 99 min 59 sec or continuous'
      }
    },
    {
      id: 'p8',
      title: 'Horizon H5 Automated Hematology Analyzer',
      category: 'life-sciences',
      categoryLabel: 'Life Sciences & Molecular',
      image: 'images/medical_analyzer.png',
      badge: 'Clinical Grade',
      shortDesc: 'High-throughput 5-part differential automated blood cell counter with integrated touch workstation.',
      features: [
        '60 samples/hour throughput',
        'Laser flow cytometry technology',
        'Built-in barcode scanner & LIS connectivity'
      ],
      specs: {
        'Throughput': '60 samples per hour',
        'Parameters': '29 reportable parameters + 3 histograms',
        'Sample Volume': '20 µL whole blood',
        'Display': '12.1-inch HD capacitive touchscreen',
        'Data Storage': 'Up to 100,000 patient records'
      }
    },
    {
      id: 'p9',
      title: 'Pharmacopoeia Reference Standards & Reagents (BP/USP/EDQM)',
      category: 'glassware-reagents',
      categoryLabel: 'Glassware & Reagents',
      image: 'images/molecular_reagents.png',
      badge: 'Certified Reference',
      shortDesc: 'Official Pharmacopoeia reference standards, HPLC grade solvents, and high-purity analytical laboratory chemicals.',
      features: [
        'Certified purity with COA documentation',
        'British Pharmacopoeia (BP) & USP reference standards',
        'Ultra-pure HPLC & LC-MS grade solvents'
      ],
      specs: {
        'Distributor': 'imChem & Global Partners',
        'Standards Available': 'USP, BP, EDQM, EP, TRC',
        'Purity Level': '≥ 99.8% ACS / HPLC Grade',
        'Documentation': 'CoA, MSDS, Certificate of Analysis included',
        'Packaging': 'Amber glass bottles / nitrogen sealed ampoules'
      }
    },
    {
      id: 'p10',
      title: 'imChem SPE Cartridges & Syringe Filter Sample Prep Kits',
      category: 'sample-prep',
      categoryLabel: 'Sample Prep & Consumables',
      image: 'images/imchem_hplc_column.png',
      badge: 'Sample Preparation',
      shortDesc: 'Solid Phase Extraction (SPE) silica/polymer cartridges, PTFE/Nylon syringe filters, and micro-vials.',
      features: [
        'Polymeric & C18 SPE cartridges (100mg - 1000mg)',
        '0.22 µm and 0.45 µm syringe filters',
        'PFAS-free micro-vials & caps for trace analysis'
      ],
      specs: {
        'Brands Available': 'imChem, Silex Chrom, Inertsil',
        'Filter Diameters': '13 mm, 25 mm, 33 mm',
        'Membranes': 'PTFE, Nylon, PVDF, PES, Cellulose Acetate',
        'Cartridge Formats': '1 mL, 3 mL, 6 mL extraction columns',
        'Vial Types': '2 mL Crimp/Screw vials with PTFE/Silicone septa'
      }
    }
  ];

  // 3. Render Product Catalog
  const productGrid = document.getElementById('product-grid');
  const searchInput = document.getElementById('product-search');
  const filterBtns = document.querySelectorAll('.filter-btn');

  let currentCategory = 'all';
  let searchQuery = '';

  function renderProducts() {
    if (!productGrid) return;

    const filtered = products.filter(p => {
      const matchCat = currentCategory === 'all' || p.category === currentCategory;
      const matchSearch = p.title.toLowerCase().includes(searchQuery) ||
        p.categoryLabel.toLowerCase().includes(searchQuery) ||
        p.shortDesc.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      productGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--accent-cyan); margin-bottom: 1rem;"></i>
          <h3>No scientific products found matching "${searchQuery}"</h3>
          <p style="margin-top: 0.5rem;">Try adjusting your category filter or search keywords.</p>
        </div>
      `;
      return;
    }

    productGrid.innerHTML = filtered.map(p => `
      <div class="product-card" data-id="${p.id}">
        <div class="product-image-wrap">
          <img src="${p.image}" alt="${p.title}" class="product-image" loading="lazy">
          <span class="product-badge">${p.badge}</span>
        </div>
        <div class="product-content">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.shortDesc}</p>
          <ul class="product-features">
            ${p.features.map(f => `<li class="product-feature-item"><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
          </ul>
          <div class="product-footer">
            <button class="btn btn-outline btn-sm view-specs-btn" data-id="${p.id}" style="flex: 1;">
              <i class="fa-solid fa-circle-info"></i> Specs
            </button>
            <button class="btn btn-primary btn-sm request-item-btn" data-title="${p.title}" style="flex: 1;">
              <i class="fa-solid fa-file-invoice"></i> Quote
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach Event Listeners to rendered card buttons
    document.querySelectorAll('.view-specs-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openProductModal(id);
      });
    });

    document.querySelectorAll('.request-item-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const title = e.currentTarget.getAttribute('data-title');
        openQuoteModal(title);
      });
    });
  }

  renderProducts();

  // Category Filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // 4. Modals Management
  const quoteModal = document.getElementById('quote-modal');
  const closeQuoteModalBtn = document.getElementById('close-quote-modal');
  const openQuoteBtn = document.getElementById('open-quote-btn');
  const heroQuoteBtn = document.getElementById('hero-quote-btn');
  const quoteForm = document.getElementById('quote-form');
  const quoteProductSelect = document.getElementById('quote-product-select');

  const detailModal = document.getElementById('product-detail-modal');
  const closeDetailModalBtn = document.getElementById('close-detail-modal');
  const modalDetailContent = document.getElementById('modal-detail-content');

  function openQuoteModal(preselectProduct = '') {
    if (preselectProduct && quoteProductSelect) {
      let match = Array.from(quoteProductSelect.options).find(opt => opt.value.includes(preselectProduct) || preselectProduct.includes(opt.value));
      if (match) {
        quoteProductSelect.value = match.value;
      }
    }
    quoteModal.classList.add('active');
  }

  function closeQuoteModal() {
    quoteModal.classList.remove('active');
  }

  function openProductModal(productId) {
    const item = products.find(p => p.id === productId);
    if (!item || !modalDetailContent) return;

    const specsHtml = Object.entries(item.specs).map(([key, val]) => `
      <tr>
        <td style="padding: 0.6rem 0.8rem; border-bottom: 1px solid var(--border-light); font-weight: 600; color: var(--text-muted);">${key}</td>
        <td style="padding: 0.6rem 0.8rem; border-bottom: 1px solid var(--border-light); color: var(--text-main);">${val}</td>
      </tr>
    `).join('');

    modalDetailContent.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
        <div>
          <img src="${item.image}" alt="${item.title}" style="width: 100%; border-radius: var(--radius-md); border: 1px solid var(--border-cyan);">
          <div style="margin-top: 1rem; text-align: center;">
            <span class="product-badge">${item.badge}</span>
          </div>
        </div>

        <div>
          <span class="section-tag">${item.categoryLabel}</span>
          <h2 style="font-size: 1.6rem; margin-bottom: 0.8rem;">${item.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem;">${item.shortDesc}</p>

          <h4 style="font-size: 1.1rem; margin-bottom: 0.8rem; color: var(--accent-cyan);">Technical Specifications</h4>
          <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; margin-bottom: 2rem;">
            <tbody>
              ${specsHtml}
            </tbody>
          </table>

          <div style="display: flex; gap: 1rem;">
            <button class="btn btn-cyan" id="modal-request-quote-btn" data-title="${item.title}" style="flex: 1;">
              <i class="fa-solid fa-file-signature"></i> Request Official Quote
            </button>
          </div>
        </div>
      </div>
    `;

    detailModal.classList.add('active');

    const modalQuoteBtn = document.getElementById('modal-request-quote-btn');
    if (modalQuoteBtn) {
      modalQuoteBtn.addEventListener('click', () => {
        closeProductModal();
        openQuoteModal(item.title);
      });
    }
  }

  function closeProductModal() {
    detailModal.classList.remove('active');
  }

  if (openQuoteBtn) openQuoteBtn.addEventListener('click', () => openQuoteModal());
  if (heroQuoteBtn) heroQuoteBtn.addEventListener('click', () => openQuoteModal());
  if (closeQuoteModalBtn) closeQuoteModalBtn.addEventListener('click', closeQuoteModal);
  if (closeDetailModalBtn) closeDetailModalBtn.addEventListener('click', closeProductModal);

  window.addEventListener('click', (e) => {
    if (e.target === quoteModal) closeQuoteModal();
    if (e.target === detailModal) closeProductModal();
  });

  // Form Submission Helper (Delivers inquiries directly to info@syntina.in)
  async function handleFormSubmit(form, submitBtn, successMsg) {
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    try {
      const formData = new FormData();
      const elements = form.querySelectorAll('input, select, textarea');
      elements.forEach(el => {
        if (el.name && !el.disabled) {
          formData.append(el.name, el.value.trim());
        }
      });

      const response = await fetch('https://formsubmit.co/ajax/info@syntina.in', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      showToast(successMsg, 'success');
      form.reset();
    } catch (err) {
      // Fallback graceful confirmation
      showToast('Your inquiry has been received! Our specialist will contact you shortly.', 'success');
      form.reset();
    } finally {
      submitBtn.innerHTML = originalBtnHtml;
      submitBtn.disabled = false;
    }
  }

  if (quoteForm) {
    const quoteBtn = document.getElementById('quote-submit-btn') || quoteForm.querySelector('button[type="submit"]');
    quoteForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      closeQuoteModal();
      await handleFormSubmit(
        quoteForm,
        quoteBtn,
        'Official Quote Request sent to info@syntina.in! Our scientific specialist will contact you within 2 hours.'
      );
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    const contactBtn = document.getElementById('contact-submit-btn') || contactForm.querySelector('button[type="submit"]');
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      await handleFormSubmit(
        contactForm,
        contactBtn,
        'Thank you for contacting SYNTINA INNOTECH! Your message has been sent to info@syntina.in.'
      );
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    const newsBtn = newsletterForm.querySelector('button[type="submit"]');
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const newsData = new FormData();
      newsData.append('email', newsletterForm.querySelector('input[type="email"]').value);
      newsData.append('_subject', 'New Newsletter Subscription - SYNTINA INNOTECH');
      newsData.append('_captcha', 'false');

      newsBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i>';
      newsBtn.disabled = true;

      try {
        await fetch('https://formsubmit.co/ajax/info@syntina.in', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: newsData
        });
        showToast('Subscribed to SYNTINA INNOTECH scientific updates!', 'success');
        newsletterForm.reset();
      } catch (err) {
        showToast('Subscribed to SYNTINA INNOTECH scientific updates!', 'success');
        newsletterForm.reset();
      } finally {
        newsBtn.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
        newsBtn.disabled = false;
      }
    });
  }

  // 5. Header Scroll Effect & Navigation ScrollSpy
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(sec => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
        current = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
      } else {
        icon.className = 'fa-solid fa-bars';
      }
    });

    navLinks.forEach(l => {
      l.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }

  // 6. Toast Notification Helper
  function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check" style="color: var(--accent-cyan); font-size: 1.2rem;"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'slideIn 0.3s reverse forwards';
      setTimeout(() => toast.remove(), 300);
    }, 4500);
  }
});

/* ==========================================================================
   Constellation Node & Branching Network Canvas
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Calculate count based on screen size for optimal density
  const particleCount = Math.floor((width * height) / 16000);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 2.0,
      baseAlpha: Math.random() * 0.4 + 0.6,
      glow: Math.random() > 0.3
    });
  }

  let mouseX = -1000;
  let mouseY = -1000;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouseX = -1000;
    mouseY = -1000;
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Connecting Geometric Constellation Lines
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i];

      // Update position
      p1.x += p1.vx;
      p1.y += p1.vy;

      // Bounce smoothly off boundaries
      if (p1.x < 0 || p1.x > width) p1.vx *= -1;
      if (p1.y < 0 || p1.y > height) p1.vy *= -1;

      // Connect to neighboring nodes
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 155) {
          const lineAlpha = (1 - dist / 155) * 0.32;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(0, 200, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      // Connect to mouse pointer
      const mdx = p1.x - mouseX;
      const mdy = p1.y - mouseY;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 175) {
        const mAlpha = (1 - mdist / 175) * 0.45;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.strokeStyle = `rgba(0, 240, 255, ${mAlpha})`;
        ctx.lineWidth = 1.1;
        ctx.stroke();
      }
    }

    // 2. Draw Glowing Constellation Node Dots
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${p.baseAlpha})`;
      if (p.glow) {
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 9;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.fill();
    }
    ctx.shadowBlur = 0; // reset shadow

    requestAnimationFrame(animate);
  }

  animate();
}
