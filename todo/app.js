const form = document.getElementById("add-task-form");
const input = document.getElementById("new-task");
const list = document.getElementById("task-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text !== "") {
    console.log(text);
  }
  input.value = "";
});
