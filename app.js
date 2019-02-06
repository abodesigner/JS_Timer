// grab elements
const seconds = document.querySelector('.seconds');
const minutes = document.querySelector('.minutes');

const startButton = document.querySelector('[data-action="start"]');
const stopButton = document.querySelector('[data-action="stop"]');
const resetButton = document.querySelector('[data-action="reset"]');

// add functions
let counter = 00;
let interval;
function increamentTimer() {
  counter++;
  seconds.textContent = pad(counter % 60);
  minutes.textContent = pad(Math.floor(counter / 60));
}
function startTimer() {
  interval = setInterval(increamentTimer, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  stopTimer();
  counter = 0;
  seconds.textContent = '00';
  minutes.textContent = '00';
}

function pad(number) {
  return (number < 10) ? "0" + number : number;
}


// add eventListener
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);