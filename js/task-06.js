const inputValid = document.querySelector('#validation-input');
const attributeLength = inputValid.getAttribute('data-length');

inputValid.addEventListener("blur", (event) => {
    inputValid.classList.remove('invalid');
    inputValid.classList.remove('valid');
    let inputValue = (event.currentTarget.value).trim();
    inputValue.length != attributeLength ? inputValid.classList.add('invalid') : inputValid.classList.add('valid');
    console.log(inputValue.length);
  });
