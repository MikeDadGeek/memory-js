// Travaille sur les cartes
const cardsArray = [
    {
        name: "t-rex",
        img: 'dinosaures/Trex.jpg',
    },

    {
        name: "cret",
        img: 'dinosaures/cret.jpg',
    },

    {
        name: "Long-Coup",
        img: 'dinosaures/LougCoup.jpg',
    },

    {
        name: "triceratops",
        img: 'dinosaures/Trice.jpg',
    },

    {
        name: "zebri",
        img: 'dinosaures/Zebri.jpg',
    },
    {
        name: "museau",
        img: 'dinosaures/museau.jpg',
    },
];

const game = document.getElementById('game');

const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

game.appendChild(grid);

cardsArray.forEach((item)=>{
    const carte = document.createElement('div')

    carte.classList.add('carte')

    carte.dataset.name = item.name

    carte.style.backgroundImage = 'url(${item.img})'

    grid.appendChild(carte)
});