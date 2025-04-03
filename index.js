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
// -----------nav bar
 var menu_btn = document.getElementById("menu_btn");
    var navbar = document.getElementById("navbar");
    menu_btn.addEventListener('click',function(){

        if(navbar.style.left == "0%"){
            navbar.style.left = "-100%" 
        }else{
            navbar.style.left = "0%"
        }
    })
