let counter = 0;
let intervalId = null;

function updateCounter() {
  document.getElementById('counter').textContent = counter;
  counter = (counter + 1) % 10; // Incrementa y reinicia a 0 después de 9
}

function toggleCounter() {
  const button = document.getElementById('toggleButton');
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    button.textContent = 'Inicio';
  } else {
    intervalId = setInterval(updateCounter, 1000);
    button.textContent = 'Pausa';
  }
}
