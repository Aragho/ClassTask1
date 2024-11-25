const inputBox = document.getElementById("input-box"); 
const listContainer = document.getElementById("list-container")
const find = document.querySelector("#page-banner form input")
console.log(find)

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = ""; 
    saveData();
}   
listContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

find.addEventListener('input',(event)=>{
    event.preventDefault();
    const searchItem = event.target.value.toLowerCase();
    const tasks = taskList  .getElementsByTagName("li")
    // console.log(tasks)

    for(let task of tasks ){
        const taskName = task.querySelector(".name").textContent.toLocaleLowerCase()
        if(taskName.includes(searchItem)){
            task.style.display = "";
        }else{
            task.style.display = "none"
        }
    }

});


