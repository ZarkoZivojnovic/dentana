const goToTopBtn = document.getElementById("goToTop"),
    responsiveNav = document.getElementById("responsiveNav"),
    backBtn = document.getElementById("backBtn"),
    navBackground = document.getElementById("navBackground");

setTimeout(() => {
    if (navigator.userAgent.indexOf("Firefox") === -1 || navigator.userAgent.indexOf("Chrome") === -1 ||
        navigator.userAgent.indexOf("Safari") === -1 || navigator.userAgent.indexOf("Opera") === -1) {
        document.getElementById("header").style.transition = "all 600ms ease-out";
    }
    document.getElementById("header").style.top = "0";
}, 100);

setInterval(()=>{
    if (window.scrollY > 50) {
        goToTopBtn.style.display = "block";
    } else {
        goToTopBtn.style.display = "none";
    }
},1000);

document.getElementById("burgerBtn").addEventListener("click", event => {
    event.preventDefault();
    if (responsiveNav.style.display = "none") {
        responsiveNav.style.display = "block";
        responsiveNav.className = "visibleNav";
        navBackground.style.display = "block";
        setTimeout(() => {
            responsiveNav.style.width = "300px";
        }, 100);
        setTimeout(()=>{
            document.getElementById("navigationResponsive").style.display = "block";
        },500);
        backBtn.addEventListener("click", backFromMenu)
    } else {
        backFromMenu();
    }

    navBackground.addEventListener("click", hideSideNav);
    responsiveNav.addEventListener("click", ()=>{backFromMenu()});

    function backFromMenu(event) {
        if (event) event.preventDefault();
        responsiveNav.style.width = "0";
        document.getElementById("navigationResponsive").style.display = "none";
        setTimeout(() => {
            responsiveNav.style.display = "none";
            navBackground.style.display = "none";
            responsiveNav.className = "";
        }, 600);
    }

    function hideSideNav(ev) {
        if (ev.target === ev.currentTarget) {
            backFromMenu();
        }
    }
});