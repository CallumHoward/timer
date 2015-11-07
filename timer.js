window.onload = function () {
  //const initialTime = 20 * 60;  // 20 minutes in seconds
  const initialTime = 5;
  const burstTime = 20 * 60;
  const shortBreakTime = 5 * 60;
  const longBreakTime = 5 * 60;

  var display = document.querySelector('#time-remaining');
  var timer = new CountDownTimer(initialTime);
  var timeInterval;

  // specifies how time is formatted when displayed
  function format(minutes, seconds) {
    // add a leading zero if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // seperate with a colon
    return minutes + ':' + seconds;
  }

  // updates the time displayed
  function updateClock() {
      if (timer.expired()) { clearInterval(timeInterval); }
      var timeObj = CountDownTimer.parse(timer.remaining());
      display.textContent = format(timeObj.minutes, timeObj.seconds);
  }

  updateClock();

  document.querySelector('#start-button').addEventListener('click', function() {
    timer.start();
    updateClock();  // run initially to avoid delay
    timeInterval = setInterval(updateClock, 1000);  // run every second
  });

  document.querySelector('#start-burst-button').addEventListener('click', function() {
      timer = new CountDownTimer(burstTime);
      updateClock();
  });

  document.querySelector('#short-break-button').addEventListener('click', function() {
      timer = new CountDownTimer(shortBreakTime);
      updateClock();
  });

  document.querySelector('#long-break-button').addEventListener('click', function() {
      timer = new CountDownTimer(longBreakTime);
      updateClock();
  });
};

