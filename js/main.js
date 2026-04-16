// ============================================
// GLOBAL CONFIGURATIONS & UTILITIES
// ============================================

let isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
  document.body.classList.add('dark');
}

// ============================================
// THEME TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', isDarkMode);
  
  // Update icon
  themeToggle.querySelector('.theme-icon').textContent = isDarkMode ? '☀️' : '🌙';
});

// ============================================
// STICKY NAV ENHANCEMENT
// ============================================

const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  lastScrollY = window.scrollY;
  
  if (lastScrollY > 50) {
    navbar.style.boxShadow = 'var(--shadow)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ============================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#' && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// RENDER EXPERIENCE TIMELINE
// ============================================

function renderExperience() {
  if (!config || !config.experience) return;
  
  const timeline = document.getElementById('experienceTimeline');
  if (!timeline) return;
  
  timeline.innerHTML = config.experience.map(exp => `
    <div class="item">
      <h3>${exp.icon} ${exp.role} — <span class="company-name">${exp.company}</span></h3>
      <span>${exp.period}</span>
      <p>${exp.description}</p>
    </div>
  `).join('');
}

// ============================================
// RENDER PROJECTS
// ============================================

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalOverlay = document.querySelector('.modal-overlay');

function renderProjects() {
  if (!config || !config.projects) return;
  
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  grid.innerHTML = config.projects.map(project => `
    <div class="project-card" data-project-id="${project.id}">
      <div class="project-image">${project.id === 1 ? '⚖️' : project.id === 2 ? '💼' : '🏥'}</div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectId = parseInt(card.dataset.projectId);
      const project = config.projects.find(p => p.id === projectId);
      openProjectModal(project);
    });
  });
}

function openProjectModal(project) {
  modalContent.innerHTML = `
    <span class="close-modal">✕</span>
    <div class="project-image" style="height: 250px; margin-bottom: 24px;">
      ${project.id === 1 ? '⚖️' : project.id === 2 ? '💼' : '🏥'}
    </div>
    <h3>${project.title}</h3>
    <p>${project.details}</p>
    <div class="project-tags">
      ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
    </div>
    ${project.link && project.link !== '#' ? `<a href="${project.link}" target="_blank" class="btn btn-primary" style="margin-top: 24px;">View Project</a>` : ''}
  `;
  
  modal.classList.add('active');
  
  // Close modal handlers
  document.querySelector('.close-modal').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
}

function closeModal() {
  modal.classList.remove('active');
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('active')) {
    closeModal();
  }
});

// ============================================
// RENDER COMMUNITY & EXTRACURRICULAR
// ============================================

function renderCommunity() {
  if (!config || !config.community) return;
  
  const grid = document.getElementById('community-grid');
  if (!grid) return;
  
  grid.innerHTML = config.community.map(item => `
    <div class="community-card">
      <div class="community-icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <div class="community-period">${item.period}</div>
      <p>${item.description}</p>
    </div>
  `).join('');
}

// ============================================
// RENDER HACKATHONS & AWARDS
// ============================================

function renderHackathons() {
  if (!config || !config.hackathons) return;
  
  const grid = document.getElementById('hackathons-grid');
  if (!grid) return;
  
  grid.innerHTML = config.hackathons.map(hackathon => `
    <div class="hackathon-card">
      <div class="hackathon-icon">${hackathon.icon}</div>
      <h3>${hackathon.title}</h3>
      <div class="hackathon-period">${hackathon.period}</div>
      <p>${hackathon.achievement}</p>
    </div>
  `).join('');
}

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all skill cards, timeline items, project cards, and hackathon cards
document.querySelectorAll('.skill-card, .timeline .item, .project-card, .community-card, .hackathon-card').forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  observer.observe(element);
});

// ============================================
// PARALLAX EFFECT FOR HERO (SUBTLE)
// ============================================

window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (hero) {
    const scrolled = window.scrollY;
    const orbs = hero.querySelectorAll('.gradient-orb');
    orbs.forEach((orb, index) => {
      const offset = scrolled * (0.1 + index * 0.02);
      orb.style.transform = `translateY(${offset}px)`;
    });
  }
});

// ============================================
// INITIALIZE APP
// ============================================

function initApp() {
  renderExperience();
  renderProjects();
  renderCommunity();
  renderHackathons();
}

// Wait for config to load, then initialize
const checkConfig = setInterval(() => {
  if (Object.keys(config).length > 0) {
    clearInterval(checkConfig);
    initApp();
  }
}, 100);

// Fallback initialization after 2 seconds
setTimeout(() => {
  if (Object.keys(config).length > 0) {
    clearInterval(checkConfig);
    initApp();
  }
}, 2000);
