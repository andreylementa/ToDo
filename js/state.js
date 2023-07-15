// store
const allTasks = JSON.parse(localStorage.getItem("allTask")) || [];

// Add task
function addTask() {
  const inputValue = document.querySelector(".form__input").value;

  if (inputValue.trim()) {
    const nextTask = {
      id: Date.now().toString(),
      title: inputValue,
      completed: false,
    };

    allTasks.push(nextTask);
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
    const task = allTasks.find((item) => item.id === id);
    //$item.classList.toggle('completed')
    if (task.completed) {
      $item.classList.add("completed");
    } else {
      $item.classList.remove("completed");
    }
  }
}
