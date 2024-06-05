const todoButton = document.getElementById("add-todo-item");



todoButton.addEventListener("click", () => {
    const todoText = document.getElementById("todo-item").value;
    if (todoText !== "") {
        const newTodoListItem = document.createElement("li");
        newTodoListItem.textContent = todoText;
        document.getElementById("todo-list").appendChild(newTodoListItem);
        document.getElementById("todo-item").value = "";
    }

})