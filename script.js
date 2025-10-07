document.addEventListener("DOMContentLoaded", () => {
  // === Efek Scroll Header ===
  const header = document.querySelector("header");
  const heroSection = document.querySelector(".hero");
  const headerHeight = header.offsetHeight;

  const changeHeaderOnScroll = () => {
    if (window.scrollY > headerHeight / 2) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  if (heroSection) {
    window.addEventListener("scroll", changeHeaderOnScroll);
  } else {
    header.classList.add("scrolled");
  }

  // === Animasi Fade-in Saat Scroll (menggunakan Intersection Observer) ===
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px",
  };
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach((fader) => {
    appearOnScroll.observe(fader);
  });

  // === Animasi Klik Logo ===
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    logo.style.transform = "scale(1.1)";
    setTimeout(() => {
      logo.style.transform = "scale(1)";
    }, 300);
  });
});
