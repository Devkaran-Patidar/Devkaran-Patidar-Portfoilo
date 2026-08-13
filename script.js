// ============================
// Dynamic Projects Rendering
// ============================
const projectsData = [
  {
    type: "Full Stack Web App",
    title: "Agromart Platform",
    description: "Direct market access for farmers and consumers. A comprehensive full-stack solution allowing seamless transactions, produce tracking, and secure authentication to bridge the gap in agricultural commerce.",
    tech: ["React", "Django", "JWT", "Cloudinary", "PostgreSQL"],
    mediaType: "video",
    mediaSrc: "https://res.cloudinary.com/dmfrenu9q/video/upload/v1786631104/agromart_0.1_v03igc.mp4",
    liveUrl: "https://agromart-ad69.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/FarmerApp-Frontend"
  },
  {
    type: "Algo Analyzer",
    title: "Premium Algorithm Visualizer",
    description: "A sophisticated tool for visualizing and analyzing algorithms in real-time, providing insights into their performance and behavior.",
    tech: ["React", "ReCharts", "Django", "REST API"],
    mediaType: "video",
    mediaSrc: "https://res.cloudinary.com/dmfrenu9q/video/upload/v1786630983/algo_analyzer0.1_zltequ.mp4",
    liveUrl: "https://news-app-example.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/AlgoAnalyzer"
  },
  {
    type: "AI Chatbot",
    title: "Smart AI Assistant",
    description: "A conversational AI chatbot built with React and integrated with a powerful backend for natural language processing.",
    tech: ["React", "ReCharts", "Django", "REST API"],
    mediaType: "video",
    mediaSrc: "https://res.cloudinary.com/dmfrenu9q/video/upload/v1786631321/Screen_Recording_2026-08-10_213531_rswqsm.mp4",
    liveUrl: "https://news-app-example.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/AlgoAnalyzer"
  },
  {
    type: "Frontend Application",
    title: "Global News Aggregator",
    description: "A dynamic news application that fetches and displays the latest articles from multiple global sources. Features categorical filtering and a responsive reading experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    mediaType: "image",
    mediaSrc: "./Images/Projects/images/newsApp.png",
    liveUrl: "https://news-app-example.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/NewsApp"
  },
  {
    type: "Web Game",
    title: "Interactive Tic-Tac-Toe",
    description: "A classic Tic Tac Toe game with modern UI elements, implemented purely with vanilla web technologies. Focuses on state management and game logic.",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    mediaType: "image",
    mediaSrc: "./Images/Projects/images/tic toc toe.png",
    liveUrl: "#",
    sourceUrl: "#"
  }
];

const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
  let projectsHTML = "";
  projectsData.forEach((project, index) => {
    // Alternate rows by adding 'reversed' class to every odd index
    const reversedClass = index % 2 !== 0 ? "reversed" : "";
    
    // Generate tech stack tags
    const techHTML = project.tech.map(t => `<span>${t}</span>`).join('');
    
    // Generate media HTML
    let mediaHTML = "";
    if (project.mediaType === "video") {
      mediaHTML = `<video src="${project.mediaSrc}" class="project-img" muted loop autoPlay></video>`;
    } else {
      mediaHTML = `<img src="${project.mediaSrc}" alt="${project.title}" class="project-img">
                  `;
    }

    projectsHTML += `
      <div class="project-feature ${reversedClass} fade-in">
        <div class="project-media">
          <div class="media-container">
            ${mediaHTML}
          </div>
        </div>
        <div class="project-content">
          <span class="project-type">${project.type}</span>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-desc">
            <p>${project.description}</p>
          </div>
          <div class="project-tech">
            ${techHTML}
          </div>
          <div class="project-links">
            <a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Live demo ↗</a>
            <a href="${project.sourceUrl}" target="_blank" rel="noopener" class="project-github" title="Source Code"><i class="fa-brands fa-github"></i> Source</a>
          </div>
        </div>
      </div>
    `;
  });
  
  projectsContainer.innerHTML = projectsHTML;
}

// ============================
// Fade-in on scroll
// ============================
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
fadeEls.forEach(el => fadeObserver.observe(el));

// ============================
// Mobile nav toggle
// ============================
const nav = document.querySelector('nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// ============================
// Scroll-to-top button
// ============================
const scrollBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});

// ============================
// Active nav link highlight
// ============================
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// ============================
// Contact form (demo only — no backend wired up yet)
// ============================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.form-submit');
  const originalText = btn.textContent;

  btn.textContent = '✓ Message sent!';
  btn.style.background = '#2dd4bf';

  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    contactForm.reset();
  }, 2500);

  // NOTE: this only simulates sending. To actually receive messages,
  // connect this form to a service like Formspree, EmailJS, or your own backend.
});
