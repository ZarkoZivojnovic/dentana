const nav = document.getElementById("nav");

const openMenu = () => {
    nav.style.left = '0';
    document.body.style.overflow = 'hidden';
}

const closeMenu = () => {
    nav.style.left = '-100vw';
    document.body.style.overflow = 'auto';
}