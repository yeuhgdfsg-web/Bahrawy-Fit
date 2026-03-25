/* ===============================
   GLOBAL HELPERS
================================ */
const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

/* ===============================
   SCROLL REVEAL (Animations)
================================ */
const revealElements = qsa(
  '.hero, .mission-section, .packages-section, .benefits-section, .calorie-section'
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

/* ===============================
   NAVBAR ACTIVE LINK
================================ */
const navLinks = qsa('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

/* ===============================
   HERO BUTTON RIPPLE EFFECT
================================ */
const buttons = qsa('button, .calorie-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = btn.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

/* ===============================
   PACKAGES HOVER & SELECT
================================ */
const packages = qsa('.package-card');

packages.forEach(card => {
  card.addEventListener('mouseenter', () => {
    packages.forEach(c => c.classList.remove('featured'));
    card.classList.add('featured');
  });
});

/* ===============================
   TESTIMONIALS AUTO FADE (OPTIONAL)
================================ */
const testimonials = qsa('.testimonial-card');
let testimonialIndex = 0;

const rotateTestimonials = () => {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[testimonialIndex].classList.add('active');
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
};

if (testimonials.length > 0) {
  setInterval(rotateTestimonials, 4000);
}

/* ===============================
   CALORIE BUTTON ACTION
================================ */
const calorieBtn = qs('.calorie-btn');

if (calorieBtn) {
  calorieBtn.addEventListener('click', () => {
    alert('Calorie Calculator coming soon 🚀');
  });
}

/* ===============================
   SMOOTH SCROLL
================================ */
qsa('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    qs(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } 
  else 
    {
    navbar.classList.remove("scrolled");
  }
});


/* =========================
   SMOOTH SCROLL (links)
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* =========================
   HERO BUTTONS
========================= */
const subscribeBtn = document.querySelector(".subscribe-btn");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    alert("Redirect to subscription page 🚀");
  });
}

if (calorieBtn) {
  calorieBtn.addEventListener("click", () => {
    alert("Open calorie calculator 🔥");
  });
}


/* =========================
   FAQ ACCORDION
========================= */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    // اقفل الكل
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // افتح/اقفل الحالي
    item.classList.toggle("active");
  });
});


/* =========================
   FAQ ANSWERS (اختياري)
========================= */
faqItems.forEach(item => {
  const answer = item.querySelector(".faq-answer");
  if (answer) answer.style.maxHeight = "0px";

  item.addEventListener("click", () => {
    if (!answer) return;

    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0px";
    }
  });
});


/* =========================
   LANGUAGE SWITCH (AR / EN)
========================= */
const langBtn = document.querySelector(".lang-btn");

if (langBtn) {
  langBtn.addEventListener("click", () => {
    document.body.classList.toggle("rtl");

    if (document.body.classList.contains("rtl")) {
      document.documentElement.setAttribute("dir", "rtl");
      langBtn.innerText = "English";
    } else {
      document.documentElement.setAttribute("dir", "ltr");
      langBtn.innerText = "العربية";
    }
  });
}


/* =========================
   SCROLL ANIMATIONS
========================= */
const animatedElements = document.querySelectorAll(
  ".hero-content, .faq-item, .footer-links, .footer-brand"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

animatedElements.forEach(el => observer.observe(el));

/* =========================
   TESTIMONIALS SLIDER
========================= */

  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('.right');
  const prev = document.querySelector('.left');

  let index = 0;
  const visibleSlides = 3;
  const slideWidth = 330;

  function moveSlide() {
    track.style.transform = `translateX(-${index * slideWidth}px)`;
  }

  next.onclick = () => {
    if (index < slides.length - visibleSlides) {
      index++;
      moveSlide();
    }
  };

  prev.onclick = () => {
    if (index > 0) {
      index--;
      moveSlide();
    }
  };

  // Auto Slide
  setInterval(() => {
    if (index >= slides.length - visibleSlides) {
      index = 0;
    } else {
      index++;
    }
    moveSlide();
  }, 4000);


