const menu = document.getElementsByClassName("menu")[0];
const toggleMenu = () => {
    if (visualViewport.width < 768) {
        menu.classList.add("hidden");
    } else {
        menu.classList.remove("hidden");
    }
};
window.onresize = toggleMenu;
window.onload = toggleMenu;

function showHamburgerMenu () {
    menu.classList.toggle("hidden");
}
