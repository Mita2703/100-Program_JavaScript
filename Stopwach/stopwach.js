let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  const format = (unit) => unit.toString().padStart(2, '0');
  display.textContent = `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function timer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    interval = setInterval(timer, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  isRunning = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
});
