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
    color: ["#03dac6", "#ff0266", "#000000"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#faebd7", "#03dac6", "#ff0266"],
          maxParticles: 43,
          connectParticles: false,
        },
      },
    ],
  });
});