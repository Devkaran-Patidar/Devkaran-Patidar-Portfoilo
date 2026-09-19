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
      { type: "video", src: "https://www.youtube.com/embed/0QvvNunzhP4?autoplay=1&rel=0" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (838).png" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (839).png" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (840).png" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (841).png" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (842).png" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (843).png" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (844).png" },
      { type: "image", src: "./Images/Projects/agromart/Screenshot (845).png" }
    ],
    liveUrl: "https://agromart-ad69.onrender.com/",
    sourceUrl: "https://github.com/Devkaran-Patidar/FarmerApp-Frontend"
  },
  {
    type: "Algo Analyzer",
    title: "Premium Algorithm Visualizer",
    description: "A sophisticated tool for visualizing and analyzing sorting and searching algorithms in real-time, providing deep insights into computational complexity, step execution, and data performance.",
    tech: ["React", "ReCharts", "JavaScript", "Algorithms", "CSS3"],
    mediaList: [
      { type: "video", src: "https://www.youtube.com/embed/ToQgRJv4M7w?autoplay=1&rel=0" },
      { type: "image", src: "./Images/Projects/algo_visualizer/Screenshot1.png" },
      { type: "image", src: "./Images/Projects/algo_visualizer/Screenshot2.png" },
      { type: "image", src: "./Images/Projects/algo_visualizer/Screenshot3.png" }
    ],
    liveUrl: "https://github.com/Devkaran-Patidar/AlgoAnalyzer",
    sourceUrl: "https://github.com/Devkaran-Patidar/AlgoAnalyzer"
  },
  {
    type: "Air Piano",
    title: "Play piano Music in the Air",
    description: "An innovative musical experience that allows users to play piano notes in the air using  hand gestures and motion detection.",
    tech: ["React", "TensorFlow.js","openCV", "JavaScript", "CSS3"],
    mediaList: [
      { type: "video", src: "https://www.youtube.com/embed/l3LkXYQY5uU?autoplay=1&rel=0" },
    ],
    liveUrl: "https://github.com/Devkaran-Patidar/DataDashboard",
    sourceUrl: "https://github.com/Devkaran-Patidar/DataDashboard"
  },
  {
    type: "AI Chatbot",
    title: "Agrisure AI Assistant",
    description: "A conversational AI assistant built with React and integrated with backend natural language processing. Supports real-time text streaming, context retention, and custom prompt workflows.",
    tech: ["React", "Python", "OpenAI API", "FastAPI", "GemminiApi"],
    mediaList: [
      { type: "video", src: "https://res.cloudinary.com/dmfrenu9q/video/upload/v1786631321/Screen_Recording_2026-08-10_213531_rswqsm.mp4" },
      { type: "image", src: "./images/Projects/chatboat/chatboat1.png" },
      { type: "image", src: "./images/Projects/chatboat/chatboat2.png" },
    ],
    liveUrl: "https://github.com/Devkaran-Patidar",
    sourceUrl: "https://github.com/Devkaran-Patidar"
  },
  {
    type: "Frontend Application",
    title: "Global News Aggregator",
    description: "A dynamic news application that fetches and displays the latest articles from multiple global sources. Features category filtering, live search, and a responsive reading experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "REST API"],
    mediaList: [
      { type: "image", src: "./Images/Projects/images/newsApp.png" }
    ],
    liveUrl: "https://github.com/Devkaran-Patidar/NewsApp",
    sourceUrl: "https://github.com/Devkaran-Patidar/NewsApp"
  },
  {
    type: "Web Game",
    title: "Interactive Tic-Tac-Toe",
    description: "A classic Tic Tac Toe game with modern UI elements, smooth transitions, and turn indicators implemented with vanilla web technologies. Focuses on clean state management and interactive logic.",
    tech: ["HTML5", "CSS3", "Vanilla JS"],
    mediaList: [
      { type: "image", src: "./Images/Projects/images/tic toc toe.png" }
    ],
    liveUrl: "https://github.com/Devkaran-Patidar",
    sourceUrl: "https://github.com/Devkaran-Patidar"
  }
];

const projectsContainer = document.getElementById("projects-container");

function buildVideoMarkup(src, className, options = {}) {
  const {
    autoplay = false,
    muted = false,
    controls = false,
    loop = false,
    thumbnail = false,
  } = options;

  const isYouTube = /youtube\.com\/embed\//i.test(src) || /youtu\.be\//i.test(src);

  if (isYouTube) {
    const separator = src.includes('?') ? '&' : '?';
    const youtubeSrc = `${src}${separator}autoplay=${autoplay ? 1 : 0}&mute=${muted ? 1 : 0}&controls=${controls ? 1 : 0}&playsinline=1`;

    return `<iframe src="${youtubeSrc}" class="${className}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ${thumbnail ? '' : 'loading="lazy"'}></iframe>`;
  }

  const autoplayAttr = autoplay ? 'autoplay' : '';
  const mutedAttr = muted ? 'muted' : '';
  const controlsAttr = controls ? 'controls' : '';
  const loopAttr = loop ? 'loop' : '';

  return `<video class="${className}" ${autoplayAttr} ${mutedAttr} ${controlsAttr} ${loopAttr} playsinline preload="metadata"><source src="${src}" type="video/mp4"></video>`;
}

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
        ? buildVideoMarkup(media.src, "project-img", { autoplay: true, muted: true, controls: false, loop: true, thumbnail: false })
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
        ? `<div class="thumb-video-icon"><i class="fa-solid fa-play"></i></div>${buildVideoMarkup(media.src, "thumb-img", { autoplay: false, muted: true, controls: false, loop: true, thumbnail: true })}`
        : `<img src="${media.src}" class="thumb-img" alt="${project.title} thumbnail ${mIndex + 1}">`;
      
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
            <button class="slider-btn prev-btn" onclick="prevSlide(${index})" aria-label="Previous slide"><i class="fa-solid fa-chevron-left"></i></button>
            <button class="slider-btn next-btn" onclick="nextSlide(${index})" aria-label="Next slide"><i class="fa-solid fa-chevron-right"></i></button>
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

// Lightbox Modal
const lightbox = document.createElement('div');
lightbox.id = 'project-lightbox';
lightbox.className = 'lightbox';
lightbox.innerHTML = `
  <div class="lightbox-overlay" onclick="closeLightbox()"></div>
  <div class="lightbox-content">
    <button class="lightbox-close" onclick="closeLightbox()" aria-label="Close Lightbox">&times;</button>
    <button class="lightbox-btn prev-btn" id="lb-prev" aria-label="Previous Media"><i class="fa-solid fa-chevron-left"></i></button>
    <div class="lightbox-media-container" id="lb-media"></div>
    <button class="lightbox-btn next-btn" id="lb-next" aria-label="Next Media"><i class="fa-solid fa-chevron-right"></i></button>
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
  document.body.style.overflow = 'hidden';
};

window.closeLightbox = function() {
  document.getElementById('project-lightbox').classList.remove('active');
  document.body.style.overflow = '';
  const mediaContainer = document.getElementById('lb-media');
  mediaContainer.innerHTML = '';
};

function updateLightboxMedia() {
  const media = projectsData[currentLbProj].mediaList[currentLbMedia];
  const mediaContainer = document.getElementById('lb-media');

  if (media.type === 'video') {
    mediaContainer.innerHTML = buildVideoMarkup(media.src, 'lightbox-video', {
      autoplay: true,
      muted: true,
      controls: true,
      loop: true
    });
  } else {
    mediaContainer.innerHTML = `<img src="${media.src}" class="lightbox-img" alt="Enlarged project media">`;
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
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

const fadeEls = document.querySelectorAll('.fade-in');
fadeEls.forEach(el => fadeObserver.observe(el));

// ============================
// Mobile nav toggle
// ============================
const nav = document.querySelector('nav');
const navToggle = document.getElementById('navToggle');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a, .nav-cta').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    if (navToggle) {
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ============================
// Scroll-to-top button
// ============================
const scrollBtn = document.getElementById('scrollTop');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 400);
  });
}

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
// Contact form simulation
// ============================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
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
  });
}

