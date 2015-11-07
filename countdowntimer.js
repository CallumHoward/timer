function CountDownTimer(duration) {
  this.duration = duration;  // in seconds
  this.original = duration;
  this.percentage = 0;
  this.running = false;
}

// set up initial reading
CountDownTimer.prototype.start = function() {
  if (this.running) { return; }
  this.running = true;
  this.startTime = Math.floor(Date.now() / 1000);  // seconds since epoch time
};

CountDownTimer.prototype.stop = function() {
  var remainingTime = this.remaining();
  this.running = false;
  this.duration = remainingTime;
};

CountDownTimer.prototype.reset = function() {
  this.running = false;
  this.duration = this.original;
  this.percentage = 0;
};

CountDownTimer.prototype.remaining = function() {
  if (!this.running) { return this.duration; }
  var finishTime = this.startTime + this.duration;
  var remainingTime = finishTime - Math.floor(Date.now() / 1000);

  // when time is up stop the clock
  if (remainingTime <= 0) {
    this.running = false;
    remainingTime = 0;
    this.percentage = 100;
  }

  return remainingTime;
};

CountDownTimer.prototype.progress = function() {
  if (this.running) {
    this.percentage = (this.original - this.remaining()) / this.original * 100;
  }
  return this.percentage;
};

CountDownTimer.prototype.expired = function() {
  return !this.running;
};

CountDownTimer.parse = function(seconds) {
  return {
    'minutes': (seconds / 60) | 0,
    'seconds': (seconds % 60) | 0
  };
};
