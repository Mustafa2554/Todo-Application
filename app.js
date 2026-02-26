var todoList = document.getElementById("todo_list");

function addTodo() {
    var inputField = document.getElementById("todo_input");
    var inputValue = inputField.value;

    if (inputValue === "") {
        alert("Please enter a todo item");
        return;
    }

    var todoItem = document.createElement("div");
    todoItem.setAttribute("class", "todo-item");

    var todoTextEle = document.createElement("p");
    todoTextEle.setAttribute("class", "todo-text");
    todoTextEle.textContent = inputValue;

    var editButton = document.createElement("button");
    editButton.setAttribute("class", "edit-button");
    editButton.setAttribute("onclick", "editButton(this)");
    editButton.textContent = "edit";

    var deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-button");
    deleteButton.setAttribute("onclick", "deleteButton(this)");
    deleteButton.textContent = "delete";

    todoItem.appendChild(todoTextEle);
    todoItem.appendChild(editButton);
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    console.log(todoItem);

    inputField.value = "";
}

function deleteButton(event) {

    var todoItem = event.parentNode;
    todoList.removeChild(todoItem);

}

function editButton(e) {

    var todoItems = e.parentNode;
    var todoText = todoItems.querySelector(".todo-text");

    var inputField = document.getElementById("todo_input");
    var inputValue = inputField.value;

    if (inputValue === "") {
        alert("Please enter a value to edit");
        return;
    }
    
    todoText.textContent = inputValue;

    inputField.value = "";
}
