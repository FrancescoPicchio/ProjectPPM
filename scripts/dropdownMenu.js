const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-icon")

openMenuButton.addEventListener("click", function() {
    console.log("opening button was clicked!");
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector("#main-column").style.display = "none";
    document.querySelector("footer").style.display = "none";
    document.querySelector("#menu-panel").style.display = "block";
});

closeMenuButton.addEventListener("click", function() {
    console.log("closing button was clicked!");
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("#main-column").style.display = "block";
    document.querySelector("footer").style.display = "flex";
    document.querySelector("#menu-panel").style.display = "none";
});