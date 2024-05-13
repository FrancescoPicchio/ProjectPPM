const openMenuButton = document.getElementById("open-menu-button");
const closeMenuButton = document.getElementById("close-menu-icon")

openMenuButton.addEventListener("click", function() {
    console.log("opening button was clicked!");
    document.querySelector("#main-column").style.display = "none";
    document.querySelector("#menu-panel").style.display = "block";
});

closeMenuButton.addEventListener("click", function() {
    console.log("closing button was clicked!");
    document.querySelector("#main-column").style.display = "block";
    document.querySelector("#menu-panel").style.display = "none";
});