const menu = document.getElementsByClassName("menu")[0];
const toggleMenu = () => {
    if (visualViewport.width < 768) {
        menu.classList.add("hidden");
    } else {
        menu.classList.remove("hidden");
    }
};
const togglePreload = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("preload");
}
const onLoad= () => {
    togglePreload();
    toggleMenu();
}
function showHamburgerMenu () {
    menu.classList.toggle("hidden");
}
window.onresize = toggleMenu;
window.onload = onLoad;

