/* 
get the elements you want to modify
figure out when the modification should occur
modify said elements:
    figure out which one it is
    output that number

figure out where we will display the message...get a reference
figure out datetime

*/

function displayWelcome(){
    const headerEl = document.querySelector("header");
    const dayindex = new Date().getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const message = `Happy ${days[dayindex]}`
    const messageEl = document.createElement("p");
    messageEl.textContent = message;
    headerEl.append(messageEl)
}

function renderNum(element, index) {
    const number = document.createElement("span");
    number.textContent = index + 1;
    element.prepend(number);
}

function addIndex() {
    const scriptureElements = document.querySelectorAll(".scripture")
    scriptureElements.forEach(renderNum);
}

addIndex()
displayWelcome()