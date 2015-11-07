window.onload = function () {
  const initialTime = 20 * 60;  // 20 minutes
  const burstTime = 20 * 60;
  const shortBreakTime = 5 * 60;
  const longBreakTime = 5 * 60;

  var display = document.querySelector('#time-remaining');
  var timer = new CountDownTimer(initialTime);
  var timerObj;

  // specifies how time is formatted when displayed
  function format(minutes, seconds) {
    // add a leading zero if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    // seperate with a colon
    display.textContent = minutes + ':' + seconds;
  }

  timeObj = CountDownTimer.parse(initialTime);
  format(timeObj.minutes, timeObj.seconds);
  timer.onTick(format);

  document.querySelector('#start-button').addEventListener('click', function() {
    timer.start();
  });

  document.querySelector('#start-burst-button').addEventListener('click', function() {
    timer = new CountDownTimer(burstTime);
    timeObj = CountDownTimer.parse(initialTime);
    format(timeObj.minutes, timeObj.seconds);
    timer.start();
    timer.onTick(format);
  });

  document.querySelector('#short-break-button').addEventListener('click', function() {
    timer = new CountDownTimer(shortBreakTime);
    timeObj = CountDownTimer.parse(shortBreakTime);
    format(timeObj.minutes, timeObj.seconds);
    timer.start();
    timer.onTick(format);
  });

  document.querySelector('#long-break-button').addEventListener('click', function() {
    timer = new CountDownTimer(longBreakTime);
    timeObj = CountDownTimer.parse(longBreakTime);
    format(timeObj.minutes, timeObj.seconds);
    timer.start();
    timer.onTick(format);
  });
};

