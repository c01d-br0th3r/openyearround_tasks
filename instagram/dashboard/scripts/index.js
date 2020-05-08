const dots = document.querySelector(".user__dots");
const bg = document.querySelector(".bg");
const modal = document.querySelector(".modal");
const cancelBtn = modal.querySelector(".last-icon");

function handleClick() {
  modal.classList.remove("hide");
  bg.classList.remove("hide");
}

function handleOutsideClick(event) {
  if (event.target === bg) {
    modal.classList.add("hide");
    bg.classList.add("hide");
  }
}

function handleCancleClick() {
  modal.classList.add("hide");
  bg.classList.add("hide");
}

dots.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);
cancelBtn.addEventListener("click", handleCancleClick);
