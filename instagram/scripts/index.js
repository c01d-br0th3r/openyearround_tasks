const id = document.querySelector(".idpw__id");
const pw = document.querySelector(".idpw__pw");
const btn = document.querySelector(".login__btn");

const handleClick = () => {
  const inputId = id.value;
  const inputPw = pw.value;

  let regexp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (inputId.length < 6 || !regexp.test(inputId)) {
    alert("이메일 형식에 맞지 않습니다.");
    id.select();
    id.focus();
    return false;
  }

  if (inputId === "root@root.com" && inputPw === "root") {
    alert(`email: ${inputId}, pw: ${inputPw}, 로그인 성공!!`);
    location.href = "./dashboard/index.html";
  } else {
    alert("로그인 실패!!");
  }
};

const handleChange = (event) => {
  if (event.target.value !== "") {
    btn.style.backgroundColor = "#0984e3";
  } else {
    btn.style.backgroundColor = "c0dffd";
  }
};

btn.addEventListener("click", handleClick);
id.addEventListener("change", handleChange);
