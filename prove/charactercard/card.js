const sevenCard = {
    name: 'Seven',
    class: 'Electrifying Apotheosis',
    level: 5,
    health: 100,
    image: "https://cdn.deadlock.wiki/thumb/Seven_Render.png/1200px-Seven_Render.png",
    attacked() {
        this.health -= 20;
    },
    levelUp() {
        this.level += 1;
    }
};

function cardTemplate(card) {
    return `<div class="card">
            <img src="${card.image}" alt="${card.name}">
            <h2>${card.name}</h2>
            <div class="card-info">
                <p><strong>Class: </strong>${card.class}</p>
                <p id="lvlui"><strong>Level: </strong>${card.level}</p>
                <p id="hpui"><strong>Health: </strong>${card.health}</p>
            </div>
            <div class="button-container">
                <button id="attack">Attack</button>
                <button id="lvlup">Level Up</button>
            </div>
        </div>`
}

// create the card
maincard = document.querySelector('main').innerHTML = cardTemplate(sevenCard)

//event listeners
document.getElementById('attack').addEventListener('click', function () {
    sevenCard.attacked()
    document.getElementById('hpui').innerHTML = `<strong>Health: </strong>${sevenCard.health}`;
    if (sevenCard.health <= 0) {
        document.getElementById('hpui').innerHTML = "You have been defeated!";
    }
})
document.getElementById('lvlup').addEventListener('click', function () {
    sevenCard.levelUp()
    document.getElementById('lvlui').innerHTML = `<strong>Level: </strong>${sevenCard.level}`;
})

