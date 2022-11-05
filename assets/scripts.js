function navbar() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");

        navMenu.classList.toggle("active");

        // document.body.style.overflow = "hidden";
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        document.body.style.overflow = "visible";
    }))

    const navmenu = document.querySelector(".navmenu");

    hamburger.addEventListener("click", () => {

        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "visible";
        }

    })
}



navbar();


function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("mysidenavRight").style.width = "50%";
}

setTimeout(() => {
    openNav()
}, 1000);

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("mysidenavRight").style.width = "0%";
    document.getElementById("middle").style.width = "0%";
    document.getElementById("middle1").style.width = "0%";
    document.getElementById("middle2").style.width = "0%";
    document.getElementById("myBtn").style.visibility = "hidden"
    document.getElementById("logo").style.opacity = "0"

}

setTimeout(() => {
    openNav()
}, 1000);



