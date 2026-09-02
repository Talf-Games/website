//const menuToggle = document.getElementById("menuToggle");
//const navLinks = document.getElementById("navLinks");

//menuToggle.addEventListener("click", function () {

//    navLinks.classList.toggle("open");
//    menuToggle.classList.toggle("open");

//});


//document.querySelectorAll(".nav-link").forEach(function (link) {

//    link.addEventListener("click", function () {

//        navLinks.classList.remove("open");
//        menuToggle.classList.remove("open");

//    });

//});

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    menuToggle.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );
});


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});