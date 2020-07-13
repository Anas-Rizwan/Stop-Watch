var min = 0;
var sec = 0;
var msec = 0;
var hour = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var hourHeading = document.getElementById("hour");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100 ){
        sec++
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60 ){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
    else if(min >= 60 ){
        hour++
        hourHeading.innerHTML = hour;
        min = 0;
    }
     
}


function start(){
interval = setInterval (timer,10)
document.getElementById("starting").disabled = true;
}


function stop(){
    clearInterval(interval)
    document.getElementById("starting").disabled = false;
}

function reset(){
    var min = 0;
    var sec = 0;
    var msec = 0;
    var hour = 0;

hourHeading.innerHTML = hour
minHeading.innerHTML = min
secHeading.innerHTML = sec
msecHeading.innerHTML = msec
document.getElementById("starting").disabled = false;
stop()
}