const menu = document.getElementsByClassName("menu")[0];
const toggleMenu = () => {
    if (visualViewport.width < 768) {
        menu.classList.toggle("hidden");
    } else {
        menu.classList.toggle("hidden");
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
window.onresize = toggleMenu;
window.onload = onLoad;

function showHamburgerMenu () {
    menu.classList.toggle("hidden");
}
const cursor = document.querySelector("body");

cursor.addEventListener("mousemove", (e) => {
    const { x, y } = cursor.getBoundingClientRect();
    cursor.style.setProperty("--x", e.clientX - x);
    cursor.style.setProperty("--y", e.clientY - y);

});
