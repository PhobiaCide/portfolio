const detailsElements = document.querySelectorAll("details");

detailsElements.forEach((detailsElement) => {
    detailsElement.addEventListener("toggle", (event) => {
        if (event.target.open) {
            event.target.setAttribute("open", "");
        } else {
            event.target.removeAttribute("open");
        }
    });
});