let counter = 0;
let intervalId = null;
const intervalTime = 1; // Intervalo en milisegundos (0.5 segundos)

function updateCounter() {
  document.getElementById('counter').textContent = counter;
  counter++;
}

function toggleCounter() {
  const button = document.getElementById('toggleButton');
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    button.textContent = 'Inicio';
  } else {
    intervalId = setInterval(updateCounter, intervalTime);
    button.textContent = 'Pausa';
  }
}
