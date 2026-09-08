/* ─────────────────────────────────────────────────────────────
   nav.js  —  Shared navigation renderer for AI on IBM Z site
   ─────────────────────────────────────────────────────────────

   renderNav({
     root:         '../',           // path prefix to site root
     activeTop:    'lifecycle',     // 'overview'|'use-cases'|'lifecycle'|'products'|'help'
     activeSub:    'prepare-data',  // sub-tab id, or null
     pageNavItems: [
       { id: 'overview', label: 'Overview' },
       ...
     ]
   });

   ───────────────────────────────────────────────────────────── */

function renderNav(opts) {
  const p   = opts.root || '';
  const top = opts.activeTop || '';
  const sub = opts.activeSub || '';

  /* ── Lifecycle stages with their tool sub-items ─────────────── */
  const lifecycleItems = [
    {
      id: 'prepare-data', label: 'Prepare Data',
      href: p + 'prepare-data/prepare-data.html',
      tools: [
        { label: 'IBM Synthetic Data Sets',       href: p + 'products-tools/data-analytics.html#synthetic-data-sets' },
        { label: 'IBM Z Platform for Apache Spark', href: p + 'products-tools/data-analytics.html#apache-spark' },
        { label: 'Python AI Toolkit for z/OS',    href: p + 'products-tools/ai-frameworks.html#python-ai-toolkit' },
      ]
    },
    {
      id: 'train-model', label: 'Train Model',
      href: p + 'train-model/train-model.html',
      tools: [
        { label: 'IBM Z Accelerated SnapML',      href: p + 'products-tools/ai-frameworks.html#snapml' },
        { label: 'IBM Z Accelerated for TensorFlow', href: p + 'products-tools/ai-frameworks.html#tensorflow' },
        { label: 'IBM Z Accelerated for PyTorch', href: p + 'products-tools/ai-frameworks.html#pytorch' },
        { label: 'Machine Learning for IBM z/OS', href: p + 'products-tools/ai-platforms.html#mlz' },
        { label: 'Red Hat OpenShift AI',          href: p + 'products-tools/ai-platforms.html#rhoai' },
      ]
    },
    {
      id: 'optimize-model', label: 'Optimize Model',
      href: p + 'optimize-model/optimize-model.html',
      tools: [
        { label: 'ONNX & IBM Z Deep Learning Compiler', href: p + 'products-tools/ai-frameworks.html#onnx-zdlc' },
        { label: 'AI Optimizer for IBM Z and LinuxONE', href: p + 'products-tools/ai-platforms.html#ai-optimizer' },
      ]
    },
    {
      id: 'deploy-models', label: 'Deploy Models',
      href: p + 'deploy-models/deploy-models.html',
      tools: [
        { label: 'Machine Learning for IBM z/OS', href: p + 'products-tools/ai-platforms.html#mlz' },
        { label: 'Red Hat OpenShift AI',          href: p + 'products-tools/ai-platforms.html#rhoai' },
        { label: 'watsonx.ai',                    href: p + 'products-tools/ai-platforms.html#watsonx-ai' },
      ]
    },
    {
      id: 'serve-model', label: 'Serve Model',
      href: p + 'serve-model/serve-model.html',
      tools: [
        { label: 'IBM Z Accelerated Serving for TensorFlow', href: p + 'products-tools/inference-serving.html#tf-serving' },
        { label: 'IBM Z Accelerated for Triton',  href: p + 'products-tools/inference-serving.html#triton' },
        { label: 'Red Hat AI Inference Server',   href: p + 'products-tools/inference-serving.html#rh-inference' },
        { label: 'AI Optimizer for IBM Z and LinuxONE', href: p + 'products-tools/ai-platforms.html#ai-optimizer' },
      ]
    },
    {
      id: 'ai-governance', label: 'AI Governance',
      href: p + 'ai-governance/ai-governance.html',
      tools: [
        { label: 'watsonx.governance',            href: p + 'products-tools/ai-platforms.html#watsonx-governance' },
        { label: 'Machine Learning for IBM z/OS', href: p + 'products-tools/ai-platforms.html#mlz' },
        { label: 'Red Hat OpenShift AI',          href: p + 'products-tools/ai-platforms.html#rhoai' },
      ]
    },
  ];

  /* ── Product categories with their tool sub-items ───────────── */
  const productsCategoryItems = [
    {
      id: 'data-analytics', label: 'Data & Analytics',
      href: p + 'products-tools/data-analytics.html',
      tools: [
        { label: 'IBM Synthetic Data Sets',         href: p + 'products-tools/data-analytics.html#synthetic-data-sets' },
        { label: 'IBM Z Platform for Apache Spark', href: p + 'products-tools/data-analytics.html#apache-spark' },
      ]
    },
    {
      id: 'ai-frameworks', label: 'AI Frameworks & Dev Tools',
      href: p + 'products-tools/ai-frameworks.html',
      tools: [
        { label: 'AI Toolkit for IBM Z and LinuxONE',   href: p + 'products-tools/ai-frameworks.html#ai-toolkit' },
        { label: 'IBM Z Accelerated SnapML',            href: p + 'products-tools/ai-frameworks.html#snapml' },
        { label: 'IBM Z Accelerated for TensorFlow',    href: p + 'products-tools/ai-frameworks.html#tensorflow' },
        { label: 'IBM Z Accelerated for PyTorch',       href: p + 'products-tools/ai-frameworks.html#pytorch' },
        { label: 'Python AI Toolkit for z/OS',          href: p + 'products-tools/ai-frameworks.html#python-ai-toolkit' },
        { label: 'ONNX & IBM Z Deep Learning Compiler', href: p + 'products-tools/ai-frameworks.html#onnx-zdlc' },
      ]
    },
    {
      id: 'inference-serving', label: 'Inference & Serving',
      href: p + 'products-tools/inference-serving.html',
      tools: [
        { label: 'IBM Z Accelerated Serving for TensorFlow', href: p + 'products-tools/inference-serving.html#tf-serving' },
        { label: 'IBM Z Accelerated for Triton',             href: p + 'products-tools/inference-serving.html#triton' },
        { label: 'Red Hat AI Inference Server',              href: p + 'products-tools/inference-serving.html#rh-inference' },
      ]
    },
    {
      id: 'ai-platforms', label: 'AI Platforms',
      href: p + 'products-tools/ai-platforms.html',
      tools: [
        { label: 'Machine Learning for IBM z/OS',       href: p + 'products-tools/ai-platforms.html#mlz' },
        { label: 'AI Optimizer for IBM Z and LinuxONE', href: p + 'products-tools/ai-platforms.html#ai-optimizer' },
        { label: 'Red Hat OpenShift AI',                href: p + 'products-tools/ai-platforms.html#rhoai' },
        { label: 'watsonx.ai',                          href: p + 'products-tools/ai-platforms.html#watsonx-ai' },
        { label: 'watsonx.governance',                  href: p + 'products-tools/ai-platforms.html#watsonx-governance' },
      ]
    },
    {
      id: 'hardware-solutions', label: 'Hardware',
      href: p + 'products-tools/hardware-solutions.html',
      tools: [
        { label: 'IBM Integrated Accelerator for AI (Telum)', href: p + 'products-tools/hardware-solutions.html#telum' },
        { label: 'IBM Spyre Accelerator',                     href: p + 'products-tools/hardware-solutions.html#spyre' },
      ]
    },
  ];

  const helpItems = [
    { id: 'terminology',        label: 'Terminology',          href: p + 'getting-help/terminology.html#terminology' },
    { id: 'resources-contacts', label: 'Resources & Contacts', href: p + 'getting-help/terminology.html#resources-contacts' },
  ];

  const useCasesItems = [
    { id: 'ai-solution-patterns',  label: 'AI Solution Patterns',  href: p + 'use-cases/use-cases.html#ai-solution-patterns' },
    { id: 'ai-solution-template',  label: 'AI Solution Template',  href: p + 'use-cases/ai-solution-template.html' },
  ];

  /* ── Helper: simple dropdown (no flyout) ───────────────────── */
  function dropdown(labelText, items, activeSub) {
    const links = items.map(l => {
      const isActive = activeSub && (l.id === activeSub || (l.href && l.href.includes('#' + activeSub)));
      return `<a href="${l.href}"${isActive ? ' class="active"' : ''}>${l.label}</a>`;
    }).join('');
    return `<div class="topnav-dropdown">
      <div class="topnav-dropdown-label">${labelText}</div>
      ${links}
    </div>`;
  }

  /* ── Helper: flyout dropdown (category → tools) ─────────────── */
  function flyoutDropdown(labelText, items, activeSub) {
    const rows = items.map(l => {
      const isActive = activeSub && l.id === activeSub;
      const toolLinks = (l.tools || []).map(t =>
        `<a href="${t.href}" class="flyout-tool-link">${t.label}</a>`
      ).join('');
      const hasFlyout = l.tools && l.tools.length > 0;
      return `<div class="topnav-flyout-item${hasFlyout ? ' has-flyout' : ''}">
        <a href="${l.href}" class="topnav-dropdown-cat${isActive ? ' active' : ''}">${l.label}${hasFlyout ? '<span class="flyout-caret">›</span>' : ''}</a>
        ${hasFlyout ? `<div class="flyout-panel">${toolLinks}</div>` : ''}
      </div>`;
    }).join('');
    return `<div class="topnav-dropdown">
      <div class="topnav-dropdown-label">${labelText}</div>
      ${rows}
    </div>`;
  }

  /* ── 1. Build top nav ─────────────────────────────────────── */
  const topbarEl = document.getElementById('topnav');
  if (topbarEl) {
    const items = [
      {
        id: 'overview', label: 'Overview',
        href: p + 'overview/overview.html',
        dropdown: null,
      },
      {
        id: 'use-cases', label: 'Use Cases',
        href: p + 'use-cases/use-cases.html',
        dropdown: dropdown('Use Cases', useCasesItems, top === 'use-cases' ? sub : null),
      },
      {
        id: 'lifecycle', label: 'AI Lifecycle',
        href: p + 'prepare-data/prepare-data.html',
        dropdown: flyoutDropdown('AI Lifecycle', lifecycleItems, sub),
      },
      {
        id: 'products', label: 'Products & Tools',
        href: p + 'products-tools/data-analytics.html',
        dropdown: flyoutDropdown('Products & Tools', productsCategoryItems, sub),
      },
      {
        id: 'help', label: 'Getting Help',
        href: p + 'getting-help/terminology.html',
        dropdown: dropdown('Getting Help', helpItems, sub),
      },
    ];

    topbarEl.innerHTML = items.map(item => {
      const isActive = top === item.id;
      const hasCaret = item.dropdown !== null;
      const caret = hasCaret ? `<span class="caret">▾</span>` : '';
      return `<div class="topnav-item">
        <a href="${item.href}" class="topnav-link${isActive ? ' active' : ''}">${item.label}${caret}</a>
        ${item.dropdown || ''}
      </div>`;
    }).join('');
  }

  /* ── 2. Sub-nav bar (lifecycle OR products) ──────────────── */
  const lifecycleEl = document.getElementById('lifecycle-nav');
  if (lifecycleEl) {
    if (top === 'lifecycle') {
      lifecycleEl.style.display = '';
      lifecycleEl.innerHTML = lifecycleItems.map(l =>
        `<a href="${l.href}" class="lifecycle-link${sub === l.id ? ' active' : ''}">${l.label}</a>`
      ).join('');
      document.body.classList.add('has-lifecycle');
      document.body.classList.remove('no-lifecycle');
    } else if (top === 'products') {
      lifecycleEl.style.display = '';
      lifecycleEl.innerHTML = productsCategoryItems.map(l =>
        `<a href="${l.href}" class="lifecycle-link${sub === l.id ? ' active' : ''}">${l.label}</a>`
      ).join('');
      document.body.classList.add('has-lifecycle');
      document.body.classList.remove('no-lifecycle');
    } else {
      lifecycleEl.style.display = 'none';
      document.body.classList.add('no-lifecycle');
      document.body.classList.remove('has-lifecycle');
    }
  }

  /* ── 3. Right page-nav ───────────────────────────────────── */
  const navItems = opts.pageNavItems || [];
  const pagenavEl = document.getElementById('pagenav');
  if (pagenavEl && navItems.length) {
    const hasSubnav = top === 'lifecycle' || top === 'products';
    pagenavEl.style.top = hasSubnav
      ? 'calc(var(--topbar-height) + var(--lifecycle-height))'
      : 'var(--topbar-height)';

    pagenavEl.innerHTML =
      `<div class="pagenav-label">On this page</div>` +
      navItems.map(item =>
        `<a href="#${item.id}" class="pagenav-link" data-target="${item.id}">${item.label}</a>`
      ).join('');
  }

  /* ── 4. Scroll-spy ───────────────────────────────────────── */
  const sections = document.querySelectorAll('.section');
  const navLinks  = document.querySelectorAll('.pagenav-link');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const a = document.querySelector(`.pagenav-link[data-target="${entry.target.id}"]`);
          if (a) a.classList.add('active');
        }
      });
    }, { rootMargin: '-22% 0px -65% 0px' });
    sections.forEach(s => observer.observe(s));
  }
}

/* Legacy shim */
function renderSidebar() {}
function initScrollSpy() {}
