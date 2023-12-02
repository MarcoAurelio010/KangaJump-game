const kangaroo = document.querySelector('.kangaroo');
const cactus = document.querySelector('.cactus');

const jump = () => {
    kangaroo.classList.add('jump');

    setTimeout(() => {

        kangaroo.classList.remove('jump');
    }, 500);
}

const replay = (e) => {
    if (e.key === "Enter") {
        location.reload();
    }
}

const loop = setInterval(() => {
    const leftDistanceCactus = cactus.offsetLeft;
    const rightDistanceCactus = leftDistanceCactus+100;

    const bottomDistanceKangaroo = +window.getComputedStyle(kangaroo).bottom.replace('px', '');

    const gameOver = (leftDistanceCactus <= 90 && leftDistanceCactus > 0 && bottomDistanceKangaroo < 130) || (rightDistanceCactus <= 90 && rightDistanceCactus > 0 && bottomDistanceKangaroo < 130);

    if(gameOver) {
        cactus.style.animation = 'none';
        cactus.style.left = `${leftDistanceCactus}px`;

        kangaroo.style.animation = 'none';
        kangaroo.style.bottom = `${bottomDistanceKangaroo}px`;

        kangaroo.src = './imagens/kangaroo.cry.png';
    }

}, 15);



document.addEventListener('keydown', jump);

document.addEventListener('keydown', replay);

