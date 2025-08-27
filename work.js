const inputTask=document.getElementById('task');
const taskList=document.getElementById('todo');
 addTask(){
    let li=document.createElement('li');
    li.textContent=inputTask;
    document.getElementById('todo').appendChild(li);
 };