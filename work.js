const inputTask=document.getElementById('task');
const taskList=document.getElementById('todo');
const taskdeleted=document.getElementById('ul').addEventListener('click',()=>removeTask());
function addTask(){
    let li=document.createElement('li');
    li.className="list";
    li.textContent=inputTask.value;
    document.getElementById('ul').appendChild(li);
    inputTask.value=' ';
}
function removeTask(){
    let target=event.target;
    if(true){
        target.remove();
    }
    
}
let timer;
let minutes=25;
let seconds=0;
let isPaused = false;
let isTimerStarted=false;

document.getElementById('start').addEventListener('click',startTimer);

function startTimer(){
    if(!isTimerStarted){
    timer = setInterval(updateTimer, 1000);
    isTimerStarted=true;
    }
}

function updateTimer(){
    const timerValue=document.getElementById('timer');
    timerValue.textContent=formatTime(minutes,seconds);
    if (minutes==0 && seconds==0){
        clearInterval(timer);
        document.getElementById('timer').textContent=("done");
    }
    else if(!isPaused)
    {
        if(seconds>0){
            seconds--;
        }
        else
        {
            minutes--;
            seconds=59;
        }
    }
    
}

function formatTime(minutes,seconds){
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('stop').addEventListener('click',stopTimer);


function stopTimer(){
    const timerVal=document.getElementById('timer');
    timerVal.textContent=formatTime(minutes,seconds);
    
    if(isTimerStarted){

        clearInterval(timer);
        isTimerStarted=false;
    }
    
}

document.getElementById('reset').addEventListener('click',()=>resetTimer());
function resetTimer(){
    minutes=25;
    seconds=0;
    timerValu=document.getElementById('timer');
    timerValu.textContent=formatTime(minutes,seconds);
}


