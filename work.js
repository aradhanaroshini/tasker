const inputTask=document.getElementById('task');
const taskList=document.getElementById('todo');
function addTask(){
    let li=document.createElement('li');
    li.textContent=inputTask.value;
    document.getElementById('todo').appendChild(li);
    console.log(inputTask.value);
}