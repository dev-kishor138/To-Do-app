window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const listContainer = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    if (!task) {
      alert("Please fill out the task");
      return;
    }

    const taskConatiner = document.createElement("div");
    taskConatiner.classList.add("task");

    const content = document.createElement("div");
    content.classList.add("content");

    taskConatiner.appendChild(content);

    const taskInput = document.createElement("textarea");
    taskInput.classList.add("text");
    taskInput.type = "text";
    taskInput.value = task;
    taskInput.setAttribute("readonly", "readonly");

    content.appendChild(taskInput);

    const taskAction = document.createElement("div");
    taskAction.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerHTML = "Edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "Delete";

    taskAction.appendChild(editBtn);
    taskAction.appendChild(deleteBtn);

    taskConatiner.appendChild(taskAction);

    listContainer.appendChild(taskConatiner);

    input.value = "";

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText.toLowerCase() == "edit") {
        taskInput.removeAttribute("readonly");
        taskInput.focus();
        editBtn.innerText = "Save";
      } else {
        taskInput.setAttribute("readonly", "readonly");
        editBtn.innerText = "Edit";
      }
    });

    deleteBtn.addEventListener("click", () => {
      listContainer.removeChild(taskConatiner);
    });
  });
});
