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
    color: ["#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#aaaaaa", "#bbbbbb", "#cccccc"],
    connectParticles: true,
    maxParticles: 200,
    speed: 0.5,
    minDistance: 100,
    sizeVariations: 13,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#A78BFA", "#F87171", "#34D399", "#60A5FA", "#D946EF"],
          maxParticles: 43,
          connectParticles: false,
        },
      },
    ],
  });
});

