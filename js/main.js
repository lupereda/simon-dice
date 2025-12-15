//busco todos los botones con la clase 'color-button'
const colorButtons = document.querySelectorAll('.color-button');
const startButton = document.getElementById('start-button');

// Defino variables , una para la secuencia del juego, otra para la secuencia del usuario, el nivel actual y un indicador de turno del jugador
let sequence = [];
let userSequence = [];
let level = 0;
let isPlayerTurn = false;

//funcion para la secuencia de colores
function getRandomColor() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    return colors[Math.floor(Math.random() * colors.length)];
}
//funcion para iluminar un boton
function flashButton(color) {
    const button= document.getElementById(color);
    button.classList.add('sequence-active');
    setTimeout(() => {
        button.classList.remove('sequence-active');
    }, 600);
}

//funcion para iluminar un boton al hacer click
function flashButtonClick(color) {
    const button= document.getElementById(color);
    button.classList.add('click-active');
    setTimeout(() => {
        button.classList.remove('click-active');
    }, 300);
}

//funcion para reproducir la secuencia del jeugo
function playSequence() {
    let i=0;
    const interval = setInterval(() => {
        flashButton(sequence[i]);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
            setTimeout(() => {
            isPlayerTurn = true; //indico que es el turno del jugador
            }, 500);
        };
    }, 800);
}

//funcion para aumentar el nivel y agregar un nuevo color a la secuencia
function nextLevel() {
    level++;
    isPlayerTurn = false; //indico que no es el turno del jugador
    userSequence = [];
    sequence.push( getRandomColor() );
    setTimeout( () => {
        playSequence();
    }, 1000);
}

//funcion para reiniciar el juego
function resetGame() {
    alert(`Game Over! You reached level ${level}.`);
    sequence = [];
    userSequence = [];
    level = 0;
    isPlayerTurn = false;
}
