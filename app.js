var hours = document.getElementById("hours");
var mints = document.getElementById("mints");
var sec   = document.getElementById("sec");
var ms    = document.getElementById("ms");

var playbutton = document.getElementById("playbtn")
var stopbutton = document.getElementById("stopbtn")
var resetbutton = document.getElementById("resetbtn")






var miliSec = 0;
var seconds = 0;
var minutes   = 0;
var hors   = 0;
var interval;
function start(){
    interval = setInterval(startTimer, 10);
}

function startTimer(){
    miliSec++;
   // console.log("miliseconds: ", miliSec);
   ms.innerHTML = miliSec;
   playbutton.disabled=true;

   if (miliSec == 100) {
    seconds++;
    sec.innerHTML = seconds;
    //console.log(seconds);
    miliSec = 0;
   }else if (seconds == 59){
    minutes++;
    mints.innerHTML = minutes;
    //console.log(seconds);
    seconds = 0;
   }else if (mints == 59){
    hors++;
    hours.innerHTML = hors;
    console.log(seconds);
    mints = 0;
   } if (hours == 59){
    mints = 1;
    mints.innerHTML = minutes;
    hours = 0;
    hours.innerHTML = hors;
    seconds = 0;
    sec.innerHTML = seconds;
    ms.innerHTML = miliSec
   } if (mints == hours){
    
   }

}
function stop() {
    clearInterval(interval);
    playbutton.disabled=false;
}
function resetTimer() {
    stop();
    miliSec = 0;
    seconds = 0;
    mints   = 0;
    hours   = 0;
    hours.innerHTML = hours;
    mints.innerHTML = mints;
    sec.innerHTML = seconds;
    ms.innerHTML = miliSec
}

