// created tasks

const addBtn = document.querySelector(".form__btn");
const tasksList = document.querySelector(".list");

renderTasks();
const checkedInput = document.querySelectorAll(".input-complete");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
  renderTasks();

  localStorage.setItem("allTask", JSON.stringify(allTasks));
});

tasksList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data");
    deleteTask(id);
  } else if (e.target.classList.contains("input-complete")) {
    const id = e.target.getAttribute("data");
    completeTask(id);
  }
  renderTasks();
  localStorage.setItem("allTask", JSON.stringify(allTasks));
});
