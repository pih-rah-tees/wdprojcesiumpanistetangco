function myScore(click){
const sum = document.getElementById('scoreCount')
const sumvalue = parseInt(document.getElementById('scoreCount')) + click;
document.getElementById('scoreCount') = sumvalue;  
}