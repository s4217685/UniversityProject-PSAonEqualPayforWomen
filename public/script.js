const currentPage = document.body.dataset.page;
const navLinks = Array.from(document.querySelectorAll("[data-nav]"));

navLinks.forEach((link) => {
  if (link.dataset.nav === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

// Fade animation

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeElements.forEach((el) => observer.observe(el));