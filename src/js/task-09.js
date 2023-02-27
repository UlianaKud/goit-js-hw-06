function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonEl = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const bodyEl = document.querySelector('body');

const handleChangeColor = () => {
bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
colorName.textContent = `${getRandomHexColor()}`;
}

buttonEl.addEventListener('click', handleChangeColor);

