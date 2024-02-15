const changeColor = () => {
  const arr = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
  const changeButton = document.querySelector(".box");

  const arrIndex = Math.floor(Math.random() * arr.length);
  console.log(arrIndex);

  changeButton.style.backgroundColor = `${arr[arrIndex]}`;
};
