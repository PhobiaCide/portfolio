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
