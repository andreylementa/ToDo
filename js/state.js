// store
const allTasks = JSON.parse(localStorage.getItem("allTask")) || [];

// Add task
function addTask() {
  let input = document.querySelector(".form__input");

  if (input.value.trim()) {
    const nextTask = {
      id: Date.now().toString(),
      title: input.value,
      completed: false,
    };
    allTasks.push(nextTask);
    input.value = "";
  }
}

// Delete task
function deleteTask(id) {
  const removeIndex = allTasks.findIndex((task) => task.id === id);
  allTasks.splice(removeIndex, 1);
}

// Completed task
function completeTask(id) {
  allTasks.forEach((elem) => {
    if (elem.id === id) {
      elem.completed = !elem.completed;
    }
  });

  const $item = document.getElementById(id);

  if ($item) {
    $item.classList.toggle("completed");
  }
}

// Render Tasks

function renderTasks() {
  let task = "";
  allTasks.forEach((item) => {
    task += `
    <li class="list__item">
       <span id = "${item.id}" class="item__text ${
      item.completed ? "completed" : ""
    }">${item.title}</span>
       <input class="input-complete" data='${item.id}' ${
      item.completed ? "checked" : ""
    }
     type="checkbox" />
       <button class="delete-btn" data='${item.id}'>Delete</button>
     </li>
    `;
  });
  tasksList.innerHTML = task;
}
