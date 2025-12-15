//busco todos los botones con la clase 'color-button'
const colorButtons = document.querySelectorAll('.color-button');
const startButton = document.getElementById('start-button');

// Defino variables , una para la secuencia del juego, otra para la secuencia del usuario, el nivel actual y un indicador de turno del jugador
let sequence = [];
let userSequence = [];
let level = 0;
let isPlayerTurn = false;