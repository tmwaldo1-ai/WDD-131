
function MenuToggle() {
    const navmenu = document.getElementById("options");
    console.log(navmenu);
    navmenu.classList.toggle("show");
}

document.getElementById("menu").addEventListener("click", MenuToggle);

const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const modalclose = modal.querySelector('.modalclose');
const imgdivs = document.querySelector('.gallery');


imgdivs, addEventListener('click', openModal)

function openModal(e) {
    const imgClicked = e.target;
    const filename = imgClicked.src;
    const alt = imgClicked.alt;
    const largeImg = filename.replace("sm", "full");
    modalImage.src = largeImg;
    modalImage.alt = alt;
    modal.showModal();
}


modalclose.addEventListener('click', () => {
    modal.close();
});


modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});