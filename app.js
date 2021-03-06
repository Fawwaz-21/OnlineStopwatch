let seconds=0;
let minutes=0; 
let hours=0;
let startTime;
let elapsedTime = 0;
let time ;
let startBtn = document.getElementById('btn-start');
let stopBtn = document.getElementById('btn-stop');
let resetBtn = document.getElementById('btn-reset');
function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);
  
    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);
  
    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");
  
    return `${formattedMM}:${formattedSS}:${formattedMS}`;
  }
  function print(txt) {
    document.getElementById("main-time").innerHTML = txt;
  }
function start(){
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(timeToString(elapsedTime));
    }, 10);
}
function stop(){
    clearInterval(timerInterval);
}
function reset(){
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
}

startBtn.addEventListener('click',start);
stopBtn.addEventListener('click',stop);
resetBtn.addEventListener('click',reset);


