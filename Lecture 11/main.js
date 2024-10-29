const LOCALSTORAGE_KEY = "todolist";

const todoList = [];
const todoInput = document.getElementById("todoInput");
const listContainer = document.getElementById("listContainer");

getTodoFromStorage();

function addTodo() {
  const todo = todoInput.value;
  const id = Date.now();

  const data = {
    id,
    todo,
    status: "pending",
  };

  todoList.unshift(data);
  todoInput.value = "";

  displayTodo();
  updateLocalStorage(todoList);
}

function removeTodo(id) {
  const newTodolist = todoList.map((el) =>
    el.id == id ? { ...el, status: "completed" } : el
  );

  todoList.length = 0;
  todoList.push(...newTodolist);

  displayTodo();
  updateLocalStorage(todoList);
}

function displayTodo() {
  listContainer.replaceChildren("");

  todoList.forEach((el) => {
    const li = document.createElement("li"); // Creates an li tag --> <li></li>

    li.textContent = el.todo; // <li>Hello</li>
    li.id = el.id; // <li id="174094037509">Hello</li>

    if (el.status !== "pending") {
      li.style.textDecoration = "line-through";
      li.style.color = "green";
    } else {
      li.addEventListener("click", (event) => {
        // console.log(event);
        const id = event.target.id;

        removeTodo(id);
      });
    }

    listContainer.appendChild(li);
  });
}

function updateLocalStorage(todoList) {
  const todoListStr = JSON.stringify(todoList);
  localStorage.setItem(LOCALSTORAGE_KEY, todoListStr);
}

function getTodoFromStorage() {
  const todosStr = localStorage.getItem(LOCALSTORAGE_KEY);

  if (!todosStr) {
    return;
  }

  const todos = JSON.parse(todosStr);

  // console.log(todos);
  todoList.push(...todos);

  displayTodo();
}

function clearAll() {
  todoList.length = 0;
  updateLocalStorage(todoList);
  displayTodo();
}
