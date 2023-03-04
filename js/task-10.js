function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

const defaultSize = 30;
const step = 10;

const createBoxes = () => {
  const amount = input.value;
  const elements = [];

  for (let index = 0; index < amount; index++) {
    const color = getRandomHexColor();
    const width = defaultSize + index * step;
    const height = defaultSize + index * step;
    const boxEl = `<div style='width:${width}px;height:${height}px;background-color:${color}'></div>`;

    elements.push(boxEl);
  }
  boxes.insertAdjacentHTML("beforeend", elements.join(""));
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  input.value = "";
};

create.addEventListener("click", createBoxes);

destroy.addEventListener("click", destroyBoxes);
