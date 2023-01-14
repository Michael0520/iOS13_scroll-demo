import "./index.css";

const button = document.getElementById("button");
const body = document.body;
const dialog = document.getElementById("dialog");

let isDialogOpen = false;

const isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

button.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  if (isDialogOpen) return;
  isDialogOpen = true;
  if (isMobile) {
    body.classList.add("dialog-mobile-open");
  } else {
    body.classList.add("dialog-open");
  }
  dialog.classList.remove("invisible");
});

body.addEventListener("click", (event) => {
  if (!isDialogOpen) return;
  if (event.target === dialog || dialog.contains(event.target)) return;
  isDialogOpen = false;
  dialog.classList.add("invisible");
  if (isMobile) {
    body.classList.remove("dialog-mobile-open");
  } else {
    body.classList.remove("dialog-open");
  }
});
