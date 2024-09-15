const currentTime = document.querySelector(".para");
const btnContainer = document.querySelector(".btn-container");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerId;

function displayCurrentTime(hours,minutes,seconds){
    currentTime.innerText = `${hours < 10 ? `0${hours}`: hours} : ${minutes < 10 ? `0${minutes}`: minutes} : ${seconds < 10 ? `0${seconds}`: seconds}`;
}

function handleClickEvent(event){
    let clickEvent = event.target.name;

    if(clickEvent === "start"){
      timerId = setInterval(()=>{
        seconds++;
        if(seconds>58){
            minutes++;
            seconds = 0;
        }
        if(minutes>58){
            hours++;
            minutes = 0;
        }
        displayCurrentTime(hours,minutes,seconds);
       },1000)
    }
    if(clickEvent === "stop"){
        clearInterval(timerId);
    }
    if(clickEvent === "reset"){
        clearInterval(timerId);
        hours = 0;
        minutes = 0;
        seconds = 0;
        displayCurrentTime(hours,minutes,seconds);
    }
}

btnContainer.addEventListener("click",handleClickEvent);