import "./index.css";

const button = document.getElementById("button");
const body = document.body;
const dialog = document.getElementById("dialog");
let isDialogOpen = false;

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  if (isDialogOpen) return;
  isDialogOpen = true;
  body.style.overflow = "hidden";
  dialog.classList.remove("invisible");
});

body.addEventListener("click", () => {
  if (!isDialogOpen) return;
  isDialogOpen = false;
  body.style.overflow = "visible";
  dialog.classList.add("invisible");
});
