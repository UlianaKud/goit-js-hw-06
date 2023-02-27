let counterValue = 0;
const counterData = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const handleClickIncr = () => {
    counterValue += 1;
    counterData.textContent = counterValue;
}

incrementBtn.addEventListener('click', handleClickIncr);

const handleClickDecr = () => {
    counterValue -= 1;
    counterData.textContent = counterValue;
}

decrementBtn.addEventListener('click', handleClickDecr);
