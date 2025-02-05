  function myScore(click){
const sum = document.getElementById('scoreCount')
const sumvalue = parseInt(sum.innerHTML) + click;
sum.innerHTML = sumvalue;  
}
    
var timeLeft = 5;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    location.href = "gameend.html"
  } else {
    elem.innerHTML = timeLeft + 's';
    timeLeft--;
  }
}
