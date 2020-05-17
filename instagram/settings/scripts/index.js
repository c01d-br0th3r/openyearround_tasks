const cog = document.querySelector(".cog");
const modal = document.querySelector(".modal");
const bg = document.querySelector(".bg");
const body = document.querySelector("body");
const cancelBtn = document.querySelector(".last-icon");
const articles = document.querySelector(".articles");
const articlesBg = document.querySelector(".articles__bg");
const articlesInfo = document.querySelector(".articles__info");
const container = document.querySelector(".container__articles");
const logo = document.querySelector(".header__logo");

const data = [
  {
    img: "../images/dogsTwo.jpeg",
    likes: "4,796",
    comments: "6,753",
  },
  {
    img: "../images/react.jpeg",
    likes: "17,426",
    comments: "13,967",
  },
  {
    id: "algorithm_is_hard",
    img: "../images/algo.jpeg",
    likes: "8,645",
    comments: "5,176",
  },
];

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

function handleMouseEnter() {
  articlesBg.classList.remove("hide");
  articlesInfo.classList.remove("hide");
}

function handleMouseOut() {
  articlesBg.classList.add("hide");
  articlesInfo.classList.add("hide");
}

function renderArticle(img, likes, comments) {
  const articlesDiv = document.createElement("div");
  articlesDiv.classList.add("articles");
  const articlesBackground = document.createElement("div");
  articlesBackground.classList.add("articles__bg");
  const articlesImg = document.createElement("img");
  articlesImg.classList.add("articles__img");
  articlesImg.src = img;
  const articlesInformation = document.createElement("div");
  articlesInformation.classList.add("articles__info");
  const heart = document.createElement("div");
  heart.classList.add("hearts");
  const iconHeart = document.createElement("i");
  iconHeart.classList.add("fas");
  iconHeart.classList.add("fa-heart");
  heart.appendChild(iconHeart);
  const textHeart = document.createElement("span");
  textHeart.innerText = likes;
  heart.appendChild(textHeart);
  const comment = document.createElement("div");
  comment.classList.add("comments");
  const iconComments = document.createElement("i");
  iconComments.classList.add("fas");
  iconComments.classList.add("fa-comment");
  comment.appendChild(iconComments);
  const textComment = document.createElement("span");
  textComment.innerText = comments;
  comment.appendChild(textComment);
  articlesInformation.appendChild(heart);
  articlesInformation.appendChild(comment);
  articlesDiv.appendChild(articlesBackground);
  articlesDiv.appendChild(articlesImg);
  articlesBackground.appendChild(articlesInformation);
  return articlesDiv;
}

function handleLogoImg() {
  location.href = "../dashboard/index.html";
}

cog.addEventListener("click", handleClick);
window.addEventListener("click", handleOutsideClick);
cancelBtn.addEventListener("click", handleCancelClick);
logo.addEventListener("click", handleLogoImg);

data.forEach((d) => {
  const article = renderArticle(d.img, d.likes, d.comments);
  container.appendChild(article);
});
