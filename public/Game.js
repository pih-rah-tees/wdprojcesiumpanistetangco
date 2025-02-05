  function myScore(click){
const sum = document.getElementById('scoreCount')
const sumvalue = parseInt(sum.innerHTML) + click;
sum.innerHTML = sumvalue;  
}
    
var timeLeft = 30;
var elem = document.getElementById('timer');

var timerId = setInterval(countdown, 1000);

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    alert("Time's up! Well done!")
    location.href = "gamescreen.html"
  } else {
    elem.innerHTML = timeLeft + 's';
    timeLeft--;
  }
}


