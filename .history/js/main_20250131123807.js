const detailsElements = document.querySelectorAll("details");

detailsElements.forEach((detailsElement) => {
    detailsElement.removeAttribute("open");
    detailsElement.addEventListener("toggle", (event) => {
        if (event.target === detailsElement) {
            event.preventDefault();
            detailsElement.setAttribute("open", true);
        }
    });
});