const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
const startSizeValue = "56";

rangeEl.value = startSizeValue;

const setFontSize = (elem, size) => {
  elem.style.fontSize = `${size}px`;
};
setFontSize(textEl, startSizeValue);

rangeEl.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  setFontSize(textEl, inputValue);
});
