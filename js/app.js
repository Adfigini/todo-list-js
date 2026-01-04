function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#task-list li").forEach(function (li) {
    tasks.push({
      text: li.textContent,
      completed: li.classList.contains("completed"),
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(function (task) {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) {
      li.classList.add("completed");
    }

    li.addEventListener("click", function () {
      li.classList.toggle("completed");
      saveTasks();
    });

    list.appendChild(li);
  });
}

const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
li.textContent = taskText;

li.addEventListener("click", function () {
  li.classList.toggle("completed");
});

  list.appendChild(li);
  input.value = "";
  saveTasks();

});
loadTasks();
