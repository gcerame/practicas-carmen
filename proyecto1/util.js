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
window.onresize = toggleMenu;
window.onload = toggleMenu;
window.onload = togglePreload;

function showHamburgerMenu () {
    menu.classList.toggle("hidden");
}
const cursor = document.querySelector("body");

cursor.addEventListener("mousemove", (e) => {
    const { x, y } = cursor.getBoundingClientRect();
    cursor.style.setProperty("--x", e.clientX - x);
    cursor.style.setProperty("--y", e.clientY - y);

});
