
function MenuToggle() {
    const navmenu = document.getElementById("options")
    console.log(navmenu);
    navmenu.classList.toggle("show");
}

document.getElementById("menu").addEventListener("click", MenuToggle)
