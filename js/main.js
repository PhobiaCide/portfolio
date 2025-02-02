const detailsElements = document.querySelectorAll("details");

detailsElements.forEach((detailsElement) => {
  detailsElement.addEventListener("toggle", (event) => {
    if (detailsElement.open) {
      // Close all other details elements
      detailsElements.forEach((otherDetails) => {
        if (otherDetails !== detailsElement) {
          otherDetails.removeAttribute("open");
        }
      });
    }
  });
});

// 🌗 Remember user theme preferences
const theme = localStorage.getItem("theme");
if (theme) {
  document.body.dataset.bsTheme = theme;
}

document.addEventListener("DOMContentLoaded", function () {
  Particles.init({
    selector: ".background",
    color: ["#A78BFA", "#F87171", "#34D399", "#60A5FA", "#D946EF"],
    connectParticles: true,
    maxParticles: 12,
    speed: 0.015,
    minDistance: 1400,
    showParticles: 1,
    sizeVariations: 10,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#A78BFA", "#F87171", "#34D399", "#60A5FA", "#D946EF"],
          maxParticles: 43,
          connectParticles: false,
          sizeVariations: 10,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  /*** 🌓 Theme Toggle: Updates data-bs-theme & Stylesheets ***/
  const themeToggle = document.getElementById("mode-toggle");
  const topcoatStylesheet = document.getElementById("topcoat-stylesheet"); // Must be set in HTML

  function setTheme(theme) {
    document.body.dataset.bsTheme = theme;
    localStorage.setItem("theme", theme);

    // Detect device type (mobile or desktop)
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const topcoatVersion = isMobile ? `mobile-${theme}` : `desktop-${theme}`;

    // Update Topcoat stylesheet
    if (topcoatStylesheet) {
      topcoatStylesheet.href = `https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-${topcoatVersion}.min.css`;
    }
  }

  // Load saved theme preference
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);

  // Handle theme toggle
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      if (themeToggle.classList.contains("sun-active")) {
        themeToggle.classList.remove("sun-active");
        themeToggle.classList.add("moon-active");
      } else {
        themeToggle.classList.remove("moon-active");
        themeToggle.classList.add("sun-active");
      }
      const currentTheme = document.body.dataset.bsTheme;
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
    });
  }
  // Initialize with sun-active state
  themeToggle.classList.add("sun-active");

  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const defaultTheme =
    localStorage.getItem("theme") || (systemPrefersDark ? "dark" : "light");
  setTheme(defaultTheme);
});
