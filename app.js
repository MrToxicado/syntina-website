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
      title: 'Horizon H5 Automated Hematology Analyzer',
      category: 'diagnostics',
      categoryLabel: 'Medical Diagnostics',
      image: 'images/medical_analyzer.png',
      badge: 'Bestseller',
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
      id: 'p2',
      title: '5424 R Precision Refrigerated Centrifuge',
      category: 'lab',
      categoryLabel: 'Lab Instrumentation',
      image: 'images/lab_centrifuge.png',
      badge: 'Precision Equipment',
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
      id: 'p3',
      title: 'CytoScan™ Ultra Molecular Reagent Kit',
      category: 'reagents',
      categoryLabel: 'Bioscience Reagents',
      image: 'images/molecular_reagents.png',
      badge: 'Certified Diagnostic',
      shortDesc: 'Ready-to-use RT-qPCR mastermix and diagnostic assay kits with 99.9% clinical sensitivity.',
      features: [
        'Multiplex detection capability',
        'Freeze-thaw resistant buffer system',
        'CE-IVD marked for diagnostic safety'
      ],
      specs: {
        'Assay Format': 'Real-Time PCR Mastermix',
        'Sensitivity': '99.9% clinical accuracy',
        'Storage Temp': '-20°C (Cold-chain verified)',
        'Pack Size': '100 tests per box',
        'Shelf Life': '24 months from manufacture'
      }
    },
    {
      id: 'p4',
      title: 'Sonoflex HD Portable Ultrasound System',
      category: 'pointofcare',
      categoryLabel: 'Point of Care',
      image: 'images/medical_analyzer.png',
      badge: 'New Arrival',
      shortDesc: 'High-definition digital portable ultrasound with multi-frequency cardiac and abdominal probes.',
      features: [
        'Color Doppler imaging engine',
        'Dual battery bay with 4-hr battery life',
        'DICOM 3.0 cloud export'
      ],
      specs: {
        'Display': '15.6-inch anti-glare LED monitor',
        'Probes Included': 'Convex, Linear & Cardiac Phased Array',
        'Imaging Modes': 'B, 2B, 4B, M, Color, Power Doppler, PDI',
        'Weight': '5.8 kg ultra-portable',
        'Storage': '512GB High-speed SSD'
      }
    },
    {
      id: 'p5',
      title: 'CryoShield -86°C Ultra-Low Temp Freezer',
      category: 'lab',
      categoryLabel: 'Lab Instrumentation',
      image: 'images/lab_centrifuge.png',
      badge: 'Energy Efficient',
      shortDesc: 'Medical-grade ultra-low temperature freezer engineered for biological sample preservation.',
      features: [
        'Dual cascade refrigeration system',
        'VIP Vacuum Insulation Panels',
        'Remote GSM temperature alarm & monitor'
      ],
      specs: {
        'Capacity': '728 Liters (500 micro-boxes)',
        'Temp Range': '-40°C to -86°C',
        'Power Cons.': '10.2 kWh/day',
        'Security': 'Biometric fingerprint + key lock',
        'Backup System': 'CO2 / LN2 backup ready'
      }
    },
    {
      id: 'p6',
      title: 'GeneFlow™ Fast Respiratory Panel Reagents',
      category: 'reagents',
      categoryLabel: 'Bioscience Reagents',
      image: 'images/molecular_reagents.png',
      badge: 'Rapid Diagnostic',
      shortDesc: 'Comprehensive multiplex reagent cartridge for 21 viral & bacterial respiratory pathogen targets.',
      features: [
        'Results in under 45 minutes',
        'Lyophilized room-temp stable reagents',
        'Zero cross-reactivity certified'
      ],
      specs: {
        'Target Count': '21 pathogens in single sample',
        'Sample Type': 'Nasal swab or sputum',
        'Turnaround Time': '42 minutes',
        'Format': 'Pre-loaded single-use cartridges',
        'Validation': 'ISO 13485 & FDA 510(k) cleared'
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

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeQuoteModal();
      showToast('Official Quote Request submitted! Our scientific specialist will contact you within 2 hours.', 'success');
      quoteForm.reset();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for contacting SYNTINA! Your message has been received.', 'success');
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Subscribed to SYNTINA scientific updates!', 'success');
      newsletterForm.reset();
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
