const addTask = document.querySelector("#addTask");
const addBtn = document.querySelector("#add-task button")
const taskList = document.querySelector("#task-list ul");
const input = document.querySelector("#add-task input")
const find = document.querySelector("#page-banner form input")
console.log(find)
let toDoList = JSON.parse(localStorage.getItem('toDoList')) || []

function saveTodoList(){
    localStorage.setItem('toDoList',JSON.stringfy(toDoList))
}

taskList.addEventListener('click',(event)=>{
    const deleteBtn = event.target.className
    if(deleteBtn == "delete"){
        const liTag = event.target.parentNode;
        taskList.removeChild(liTag)
        toDoList = toDoList.filter(task => task !== taskNmae);
        saveTodoList()
    }
})

addBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    const another = input.value.trim();
    if(another != ""){
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" name="" id="">
    <span class="name">${another}</span>
	    			<span class="delete">x</span>`
        taskList.appendChild(li);
        input.value = ""            
    }
})

find.addEventListener('input',(event)=>{
    event.preventDefault();
    const searchItem = event.target.value.toLowerCase();
    const tasks = taskList.getElementsByTagName("li")

    for(let task of tasks ){
        const taskName = task.querySelector(".name").textContent.toLocaleLowerCase()
        if(taskName.includes(searchItem)){
            task.style.display = "";
        }else{
            task.style.display = "none"
        }
    }

});

