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