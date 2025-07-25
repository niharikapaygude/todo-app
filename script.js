function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }
// 🌙 Toggle Dark Mode
const toggleBtn = document.getElementById("toggleTheme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change button icon and label
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.innerText = taskText;

  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "task-buttons";

  const tickBtn = document.createElement("button");
  tickBtn.innerText = "✔️";
  tickBtn.className = "tick-btn";
  tickBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const editBtn = document.createElement("button");
  editBtn.innerText = "✏️";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.innerText);
    if (newText !== null && newText.trim() !== "") {
      span.innerText = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => {
    li.remove();
  };

  buttonsDiv.appendChild(tickBtn);
  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
