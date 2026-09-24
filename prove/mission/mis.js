
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
const all = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        all.classList.add('dark')
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-white.png')
    } else {
        all.classList.remove('dark')
        logo.setAttribute('src', 'https://wddbyui.github.io/wdd131/images/byui-logo-blue.webp')
    }
}           
                    