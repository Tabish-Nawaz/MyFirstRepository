let btn = document.querySelector("#Addbtn");
let input = document.querySelector("#taskinput");
let tasklists = document.querySelector("#task_list");

btn.addEventListener('click',() => {
    const TaskInput = input.value.trim();
    if(TaskInput === ""){
        alert("Some thing went Wrong!");
        return;
    }   

    let li = document.createElement('li');
    li.textContent = TaskInput;

    li.addEventListener('click', () => {
        li.classList.toggle("Active");
    }); 
    
    li.addEventListener('contextmenu',(e) => {
        e.preventDefault();
        li.remove();
    });

    tasklists.appendChild(li);
    tasklists.value = "";

});











