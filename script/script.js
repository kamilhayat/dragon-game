score = 0;
cross = 0;

audio = new Audio('../img/music.mp3');
audiogo = new Audio('../img/gameover.mp3');

setTimeout(() =>  {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 700);
    };
    if (e.keyCode == 39) {
        dino = querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";

    }
}