const data = [
  {
    id: "c01d_br0th3r",
    img: "../images/dogsTwo.jpeg",
    likes: "4,796",
    content: "먹지 말랬다",
  },
  {
    id: "react_idol",
    img: "../images/react.jpeg",
    likes: "17,426",
    content:
      "리액트 Hooks 적용하기<br><br>Hooks의 등장은 많은 것을 편리하게 만들어 주었습니다. 클래스형 컴포넌트에 의존했던 JS를 함수형으로 작성될 수 있게끔 만들어주었죠. 언어는 언어에 맞게 써야 하잖아요 ㅎㅎ..🙂",
  },
  {
    id: "algorithm_is_hard",
    img: "../images/algo.jpeg",
    likes: "8,645",
    content:
      "DFS와 BFS<br><br>이 두 친구는 최단거리를 찾는 알고리즘입니다. 전자는 재귀, 후자는 큐를 이용해요.",
  },
];

const Container = document.querySelector(".container");

function renderArticle(id, img, likes, content) {
  const containerArticle = renderArticleUser(id);
  const containerImg = renderArticleImg(img);
  const containerBtns = renderArticleBtns();
  const containerLikes = renderArticleLikes(likes);
  const conatinerMain = renderArticleMain(id, content);
  const containerComment = renderArticleComment();
  containerArticle.appendChild(containerImg);
  containerArticle.appendChild(containerBtns);
  containerArticle.appendChild(containerLikes);
  containerArticle.appendChild(conatinerMain);
  containerArticle.appendChild(containerComment);
  Container.appendChild(containerArticle);
}

function renderArticleUser(id) {
  const userImgId = document.createElement("div");
  const imgIdImg = document.createElement("i");
  imgIdImg.classList.add("fas");
  imgIdImg.classList.add("fa-user-circle");
  const imgIdId = document.createElement("div");
  imgIdId.classList.add("imgId__id");
  imgIdId.innerText = id;
  userImgId.appendChild(imgIdImg);
  userImgId.appendChild(imgIdId);
  userImgId.classList.add("user__imgId");
  const userDots = document.createElement("i");
  userDots.classList.add("fas");
  userDots.classList.add("fa-ellipsis-h");
  userDots.classList.add("user__dots");
  const articleUser = document.createElement("div");
  articleUser.appendChild(userImgId);
  articleUser.appendChild(userDots);
  articleUser.classList.add("article__user");
  const containerArticle = document.createElement("div");
  containerArticle.classList.add("container__article");
  containerArticle.appendChild(articleUser);

  return containerArticle;
}

function renderArticleImg(img) {
  const articleImg = document.createElement("img");
  articleImg.classList.add("article__img");
  articleImg.src = img;
  return articleImg;
}

function renderArticleBtns() {
  const btnsHeart = document.createElement("i");
  btnsHeart.classList.add("far");
  btnsHeart.classList.add("fa-heart");
  const btnsComment = document.createElement("i");
  btnsComment.classList.add("far");
  btnsComment.classList.add("fa-comment");
  const btnsPaperPlane = document.createElement("i");
  btnsPaperPlane.classList.add("far");
  btnsPaperPlane.classList.add("fa-paper-plane");
  const articleBtns = document.createElement("div");
  articleBtns.classList.add("article__btns");
  articleBtns.appendChild(btnsHeart);
  articleBtns.appendChild(btnsComment);
  articleBtns.appendChild(btnsPaperPlane);
  return articleBtns;
}

function renderArticleLikes(likes) {
  const articleLikes = document.createElement("div");
  articleLikes.classList.add("article__likes");
  articleLikes.innerText = `좋아요 ${likes}개`;
  return articleLikes;
}

function renderArticleMain(id, content) {
  const userName = document.createElement("span");
  userName.style.fontWeight = 700;
  userName.innerText = id;
  const articleContent = document.createElement("span");
  articleContent.style.fontWeight = 500;
  articleContent.style.lineHeight = 1.4;
  articleContent.innerHTML = content;
  const articleMain = document.createElement("div");
  articleMain.classList.add("article__main");
  articleMain.appendChild(userName);
  articleMain.appendChild(articleContent);
  return articleMain;
}

function renderArticleComment() {
  const inputComment = document.createElement("input");
  inputComment.type = "text";
  inputComment.placeholder = "댓글 달기...";
  inputComment.classList.add("comments__inputComments");
  const commentSubmit = document.createElement("div");
  commentSubmit.innerText = "게시";
  commentSubmit.classList.add("comments__submit");
  const articleComment = document.createElement("div");
  articleComment.classList.add("article__comments");
  articleComment.appendChild(inputComment);
  articleComment.appendChild(commentSubmit);
  return articleComment;
}

data.forEach((d) => {
  renderArticle(d.id, d.img, d.likes, d.content);
});
