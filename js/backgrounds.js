const images = [
    'paris.jpg',
    'prague.jpg',
    'beach.jpg',
    'waikiki.jpg'
]
const iNum = parseInt(Math.random()*images.length);
const chosenImnage = images[iNum];

function init() {
    const image = `url(img/${chosenImnage})`;
    const body = document.querySelector('body');
    body.style.backgroundImage = image;
}

init();