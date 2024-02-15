// const btn = document.querySelector("#myButton");
// btn.addEventListener("click", () => {
//   alert("클릭했니?"), btn.classList.add("class");
// });

/** 유저텍스트 추가 */
const handleClick = () => {
  const userInput = document.querySelector(".user_input").value;
  if (userInput !== "") {
    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<div>
    <input type="checkbox" onclick="handleChecked()" />
    <h6 class="user_todo">${userInput}</h6>
  </div>
  <div>
    <h6 class="delete_btn">삭제</h6>
  </div>`;
    ul.appendChild(li);
  } else {
    alert("할일을 입력해주세요");
  }
};

/** 체크시 */
const handleChecked = () => {
  const inputCheck = document.querySelector(".user_check");
  inputCheck.classList.toggle("checked");
  const check = document.querySelector(".checked");
  if (check !== null) {
    // document.querySelector(".user_todo").style =
    //   "text-decoration: line-through";
  } else {
    document.querySelector(".user_todo").style = "text-decoration: none";
  }
  console.log(check);
};
