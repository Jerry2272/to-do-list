let ul = document.getElementById("list-item");
let todoInput = document.getElementById("todo-input");

// Load to-do list from local storage when the page loads
window.addEventListener("load", function () {
    loadTodoList();
});

// Add an event listener to the entire list
ul.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTodoList();
    } else if (e.target.tagName === "SPAN") {
        // Remove only the parent "li" element when "x" is clicked
        e.target.parentElement.remove();
        saveTodoList();
    }
}, false);

// Function to add a new to-do item
function addTodo() {
 

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.className = "todo-checkbox";

    let li = document.createElement("li");
    li.appendChild(inputElement);

    let inputValue = todoInput.value;
    let textNode = document.createTextNode(inputValue);

    if (inputValue === '') {
        alert("Please enter a to-do item.");
    }

    else{
    li.appendChild(textNode);

    let span = document.createElement("span");
    span.className = "close";
    span.appendChild(document.createTextNode("\u00d7"));

    li.appendChild(span);

    ul.appendChild(li);
    }
    // Clear the input field
    todoInput.value = "";

    // Save the updated to-do list to local storage
    saveTodoList();
}

// Function to save the to-do list to local storage
function saveTodoList() {
    localStorage.setItem("todoList", ul.innerHTML);
}

// Function to load the to-do list from local storage
function loadTodoList() {
    let savedList = localStorage.getItem("todoList");
    if (savedList) {
        ul.innerHTML = savedList;
    }
}




