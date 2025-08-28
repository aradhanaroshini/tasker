const inputTask=document.getElementById('task');
const taskList=document.getElementById('todo');
const taskdeleted=document.getElementById('ul').addEventListener('click',removeTask());
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