// created tasks

const addBtn = document.querySelector(".form__btn");
const tasksList = document.querySelector(".list");

function displayTasks() {
  let task = "";
  allTasks.forEach((item) => {
    task += `
    <li class="list__item">
       <span id = "${item.id}" class="item__text">${item.title}</span>
       <input class="input-complete" data='${item.id}' ${
      item.completed ? "checked" : ""
    }
    } type="checkbox" />
       <button class="delete-btn" data='${item.id}'>Delete</button>
     </li>
    `;
  });
  tasksList.innerHTML = task;
}
displayTasks();
const checkedInput = document.querySelectorAll(".input-complete");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
  displayTasks();
  localStorage.setItem("allTask", JSON.stringify(allTasks));
});

tasksList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data");
    deleteTask(id);
    displayTasks();
    localStorage.setItem("allTask", JSON.stringify(allTasks));
  }
  if (e.target.classList.contains("input-complete")) {
    const id = e.target.getAttribute("data");
    completeTask(id);
    displayTasks();
    localStorage.setItem("allTask", JSON.stringify(allTasks));
  }
});
