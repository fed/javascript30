let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // Clear any existing timers.
  clearInterval(countdown);

  const now = Date.now(); // Now timestamp.
  const then = now + seconds * 1000; // Target date timestamp.

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    // Stop the interval from going negative if we reached 0.
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function addInitialZero(seconds) {
  return seconds < 10 ? `0${seconds}` : seconds;
}

function parseHour(hour) {
  return hour > 12 ? hour - 12 : hour;
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${addInitialZero(remainingSeconds)}`;

  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = parseHour(end.getHours());
  const minutes = addInitialZero(end.getMinutes());

  endTime.textContent = `Be back at ${hour}:${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);

  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting and refreshing the page.
  event.preventDefault();

  // Query an element of name `minutes` within `this`,
  // which refers to our form element.
  const mins = this.minutes.value;

  timer(mins * 60);

  // Reset the form. `this` here refers to the html form element.
  this.reset();
});
