function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

let inputData;
input.addEventListener("change", (event) => {
  inputData = event.currentTarget.value;
});

let defaultWidth = 30;
let defaultHeiht = 30;
const step = 10;

const createBoxes = (amount) => {
  const elements = [];

  for (let index = 0; index < amount; index++) {
    const boxEl = document.createElement("div");
    const width = defaultHeiht + index * step;
    const height = defaultHeiht + index * step;
    boxEl.style.backgroundColor = `${getRandomHexColor()}`;
    boxEl.style.width = `${width}px`;
    boxEl.style.height = `${height}px`;

    elements.push(boxEl);

    if (index === amount - 1) {
      defaultWidth = width + step;
      defaultHeiht = height + step;
    }
  }

  boxes.append(...elements);
};

const handleBoxCreate = () => createBoxes(inputData);

create.addEventListener("click", handleBoxCreate);


const destroyBoxes = () => {
  boxes.innerHTML = '';
  input.value = '';
  defaultWidth = 30;
  defaultHeiht = 30;
}

destroy.addEventListener("click", () => destroyBoxes ());
