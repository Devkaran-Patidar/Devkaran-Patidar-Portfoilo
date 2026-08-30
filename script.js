// ============================
// Dynamic Projects Rendering
// ============================
const projectsData = [
  {
    type: "Full Stack Web App",
    title: "Agromart Platform",
    description: "Direct market access for farmers and consumers. A comprehensive full-stack solution allowing seamless transactions, produce tracking, and secure authentication to bridge the gap in agricultural commerce.",
    tech: ["React", "Django", "JWT", "Cloudinary", "PostgreSQL"],
    mediaList: [
      { type: "video", src: "https://res.cloudinary.com/dmfrenu9q/video/upload/v1786631104/agromart_0.1_v03igc.mp4" },
      { type: "image", src: "../images/Projects/agromart/Screenshot (838).png" },
      // { type: "image", src: "../images/Projects/agromart/Screenshot (839).png" },
      // { type: "image", src: "../images/Projects/agromart/Screenshot (840).png" },
      { type: "image", src: "../images/Projects/agromart/Screenshot (842).png" },
      // { type: "image", src: "../images/Projects/agromart/Screenshot (843).png" },
      { type: "image", src: "../images/Projects/agromart/Screenshot (844).png" },
      { type: "image", src: "../images/Projects/agromart/Screenshot (845).png" },
      { type: "image", src: "../images/Projects/agromart/Screenshot (841).png" },
    ],
    liveUrl: "https://agromart-ad69.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/FarmerApp-Frontend"
  },
  {
    type: "Algo Analyzer",
    title: "Premium Algorithm Visualizer",
    description: "A sophisticated tool for visualizing and analyzing algorithms in real-time, providing insights into their performance and behavior.",
    tech: ["React", "ReCharts", "Django", "REST API"],
    mediaList: [
      { type: "video", src: "https://res.cloudinary.com/dmfrenu9q/video/upload/v1786630983/algo_analyzer0.1_zltequ.mp4" },
      { type: "image", src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop" }
    ],
    liveUrl: "https://news-app-example.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/AlgoAnalyzer"
  },
  {
    type: "AI Chatbot",
    title: "Smart AI Assistant",
    description: "A conversational AI chatbot built with React and integrated with a powerful backend for natural language processing.",
    tech: ["React", "ReCharts", "Django", "REST API"],
    mediaList: [
      { type: "video", src: "https://res.cloudinary.com/dmfrenu9q/video/upload/v1786631321/Screen_Recording_2026-08-10_213531_rswqsm.mp4" },
      { type: "image", src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop" }
    ],
    liveUrl: "https://news-app-example.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/AlgoAnalyzer"
  },
  {
    type: "Frontend Application",
    title: "Global News Aggregator",
    description: "A dynamic news application that fetches and displays the latest articles from multiple global sources. Features categorical filtering and a responsive reading experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    mediaList: [
      { type: "image", src: "./Images/Projects/images/newsApp.png" },
      { type: "image", src: "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop" }
    ],
    liveUrl: "https://news-app-example.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/NewsApp"
  },
  {
    type: "Web Game",
    title: "Interactive Tic-Tac-Toe",
    description: "A classic Tic Tac Toe game with modern UI elements, implemented purely with vanilla web technologies. Focuses on state management and game logic.",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    mediaList: [
      { type: "image", src: "./Images/Projects/images/tic toc toe.png" },
      { type: "image", src: "https://images.unsplash.com/photo-1611996575749-79a3a250f56a?q=80&w=800&auto=format&fit=crop" }
    ],
    liveUrl: "#",
    sourceUrl: "#"
  }
];

const projectsContainer = document.getElementById("projects-container");

if (projectsContainer) {
  let projectsHTML = "";
  projectsData.forEach((project, index) => {
    // Generate tech stack tags
    const techHTML = project.tech.map(t => `<span>${t}</span>`).join('');
    
    // Generate slider HTML
    let sliderTracks = "";
    let thumbnailsHTML = "";
    
    project.mediaList.forEach((media, mIndex) => {
      let mediaContent = media.type === "video" 
        ? `<video src="${media.src}" class="project-img" muted loop autoplay playsinline></video>`
        : `<img src="${media.src}" alt="${project.title} - ${mIndex + 1}" class="project-img" loading="lazy">`;
      
      sliderTracks += `
        <div class="slider-slide" data-index="${mIndex}">
          ${mediaContent}
          <div class="media-overlay" onclick="openLightbox(${index}, ${mIndex})">
            <div class="view-indicator"><i class="fa-solid fa-expand"></i> View</div>
          </div>
        </div>
      `;

      // Small thumbnail
      let thumbContent = media.type === "video"
        ? `<div class="thumb-video-icon"><i class="fa-solid fa-play"></i></div><video src="${media.src}" class="thumb-img" muted></video>`
        : `<img src="${media.src}" class="thumb-img">`;
      
      thumbnailsHTML += `
        <div class="thumbnail-item ${mIndex === 0 ? 'active' : ''}" onclick="switchSlide(event, ${index}, ${mIndex})">
          ${thumbContent}
        </div>
      `;
    });

    projectsHTML += `
      <div class="project-feature fade-in" id="project-${index}">
        <div class="project-media-section">
          <div class="project-media">
            <div class="media-slider-container" id="slider-container-${index}">
              <div class="slider-track" id="slider-track-${index}">
                ${sliderTracks}
              </div>
            </div>
            ${project.mediaList.length > 1 ? `
            <button class="slider-btn prev-btn" onclick="prevSlide(${index})"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slider-btn next-btn" onclick="nextSlide(${index})"><i class="fa-solid fa-chevron-right"></i></button>
            ` : ''}
          </div>
          ${project.mediaList.length > 1 ? `
          <div class="project-thumbnails" id="thumbnails-${index}">
            ${thumbnailsHTML}
          </div>
          ` : ''}
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
// Slider and Lightbox Logic
// ============================
let slideIndices = {};
projectsData.forEach((_, i) => slideIndices[i] = 0);

window.switchSlide = function(event, projIndex, slideIndex) {
  slideIndices[projIndex] = slideIndex;
  updateSlider(projIndex);
};

window.nextSlide = function(projIndex) {
  slideIndices[projIndex] = (slideIndices[projIndex] + 1) % projectsData[projIndex].mediaList.length;
  updateSlider(projIndex);
};

window.prevSlide = function(projIndex) {
  let len = projectsData[projIndex].mediaList.length;
  slideIndices[projIndex] = (slideIndices[projIndex] - 1 + len) % len;
  updateSlider(projIndex);
};

function updateSlider(projIndex) {
  const track = document.getElementById(`slider-track-${projIndex}`);
  if (track) {
    track.style.transform = `translateX(-${slideIndices[projIndex] * 100}%)`;
  }
  const thumbs = document.querySelectorAll(`#thumbnails-${projIndex} .thumbnail-item`);
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle('active', i === slideIndices[projIndex]);
  });
}

// Lightbox
const lightbox = document.createElement('div');
lightbox.id = 'project-lightbox';
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <div class="lightbox-overlay" onclick="closeLightbox()"></div>
  <div class="lightbox-content">
    <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
    <button class="lightbox-btn prev-btn" id="lb-prev"><i class="fa-solid fa-chevron-left"></i></button>
    <div class="lightbox-media-container" id="lb-media"></div>
    <button class="lightbox-btn next-btn" id="lb-next"><i class="fa-solid fa-chevron-right"></i></button>
  </div>
`;
document.body.appendChild(lightbox);

let currentLbProj = 0;
let currentLbMedia = 0;

window.openLightbox = function(projIndex, mediaIndex) {
  currentLbProj = projIndex;
  currentLbMedia = mediaIndex;
  updateLightboxMedia();
  document.getElementById('project-lightbox').classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

window.closeLightbox = function() {
  document.getElementById('project-lightbox').classList.remove('active');
  document.body.style.overflow = '';
  const mediaContainer = document.getElementById('lb-media');
  mediaContainer.innerHTML = ''; // Stop video playback
};

function updateLightboxMedia() {
  const media = projectsData[currentLbProj].mediaList[currentLbMedia];
  const mediaContainer = document.getElementById('lb-media');
  
  if (media.type === 'video') {
    mediaContainer.innerHTML = `<video src="${media.src}" controls autoplay class="lightbox-img"></video>`;
  } else {
    mediaContainer.innerHTML = `<img src="${media.src}" class="lightbox-img">`;
  }
  
  const len = projectsData[currentLbProj].mediaList.length;
  document.getElementById('lb-prev').style.display = len > 1 ? 'flex' : 'none';
  document.getElementById('lb-next').style.display = len > 1 ? 'flex' : 'none';
}

document.getElementById('lb-prev').addEventListener('click', (e) => {
  e.stopPropagation();
  let len = projectsData[currentLbProj].mediaList.length;
  currentLbMedia = (currentLbMedia - 1 + len) % len;
  updateLightboxMedia();
});

document.getElementById('lb-next').addEventListener('click', (e) => {
  e.stopPropagation();
  let len = projectsData[currentLbProj].mediaList.length;
  currentLbMedia = (currentLbMedia + 1) % len;
  updateLightboxMedia();
});

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
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
