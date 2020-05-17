const container = document.querySelector(".container");
const dots = document.querySelectorAll(".user__dots");
const bg = document.querySelector(".bg");
const modal = document.querySelector(".modal");
const cancelBtn = modal.querySelector(".last-icon");
const recommend = document.querySelector(".container__recommend");
const header = document.querySelector(".header");
const body = document.querySelector("body");
const settings = document.querySelector(".settings");

function redirectSettings() {
  location.href = "../settings/index.html";
}

function handleClick() {
  bg.style.height = `${document.body.scrollHeight}px`;
  modal.classList.remove("hide");
  bg.classList.remove("hide");
  body.style.overflow = "hidden";
}

function handleOutsideClick(event) {
  if (event.target === bg) {
    modal.classList.add("hide");
    bg.classList.add("hide");
    body.style.overflow = "scroll";
  }
}

function handleCancelClick() {
  modal.classList.add("hide");
  bg.classList.add("hide");
  body.style.overflow = "scroll";
}

function handleResize() {
  let offset = container.offsetLeft + 610 + 20;
  recommend.style.left = `${offset}px`;
  header.style.padding = `0 ${container.offsetLeft}px`;
}

function init() {
  let offset = container.offsetLeft + 610 + 20;
  recommend.style.left = `${offset}px`;
  header.style.padding = `0 ${container.offsetLeft}px`;
}

init();

settings.addEventListener("click", redirectSettings);
window.addEventListener("resize", handleResize);
dots.forEach((dot) => dot.addEventListener("click", handleClick));
window.addEventListener("click", handleOutsideClick);
cancelBtn.addEventListener("click", handleCancelClick);
