
var enter = document.getElementById("enter")

document.addEventListener("click", del)

enter.addEventListener("click", function(event){
    // Select parent element
    var node = document.getElementById("tasks")
    var task = document.getElementById("taskEntry").value;

    // Create element1 to be added
    var add = document.createElement('div')
    add.className = "added-task"   
    add.innerHTML = "" + task + " <button class='delete'>delete</button>"

    // Delete text input 
    document.getElementById('taskEntry').value = "";

    // Add the new HTML element
    node.appendChild(add)
    event.preventDefault();
})

function del(e){
    const item = e.target;

    // delete TODO
    if (item.classList[0] === "delete"){
        const todo = item.parentElement;
        todo.remove()
    }
}

