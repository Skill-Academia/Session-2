const todoList = [];
const todoInput = document.getElementById("todoInput");
const listContainer = document.getElementById("listContainer");

function addTodo() {
  const todo = todoInput.value;
  const id = Date.now();

  const data = {
    id,
    todo,
  };

  todoList.unshift(data);
  todoInput.value = "";

  displayTodo();
}

function displayTodo() {
  listContainer.replaceChildren("");

  todoList.forEach((el) => {
    const li = document.createElement("li"); // Creates an li tag --> <li></li>

    li.textContent = el.todo; // <li>Hello</li>
    li.id = el.id; // <li id="174094037509">Hello</li>

    li.addEventListener("click", (event) => {
      console.log(event);
      const id = event.target.id;

      removeTodo(id);
    });

    listContainer.appendChild(li);
  });
}

function removeTodo(id) {
  const newTodolist = todoList.filter((el) => el.id != id);

  todoList.length = 0;
  todoList.push(...newTodolist);

  displayTodo();
}
