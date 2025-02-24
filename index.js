window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".nav");
    const firstSection = document.querySelector("section"); 
    const firstSectionBottom = firstSection.offsetHeight; 

    if (window.scrollY > firstSectionBottom) {
        navbar.classList.add("transparent");
    } else {
        navbar.classList.remove("transparent");
    }
});