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


const gameFilters = document.querySelectorAll(".game-filter");
const gameItems = document.querySelectorAll(".game-item");

gameFilters.forEach(function (filterButton) {

    filterButton.addEventListener("click", function () {

        const selectedFilter = filterButton.dataset.filter;


        // Active button
        gameFilters.forEach(function (button) {
            button.classList.remove("active");
        });

        filterButton.classList.add("active");


        // Games
        gameItems.forEach(function (game) {

            const gameStatus = game.dataset.status;

            if (
                selectedFilter === "all" ||
                selectedFilter === gameStatus
            ) {
                game.style.display = "";
            } else {
                game.style.display = "none";
            }

        });

    });

});