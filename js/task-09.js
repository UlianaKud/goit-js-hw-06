function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const bodyEl = document.querySelector("body");

const handleChangeColor = () => {
  const color = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = color;
  colorName.textContent = color;
};

buttonEl.addEventListener("click", handleChangeColor);
