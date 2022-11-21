const inputEl = document.querySelector('.feedback-form');
const LOCALSTRKEY = 'feedback-form-state';
const throttle = require('lodash.throttle');
let formData = {};

const onInput = e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(LOCALSTRKEY, JSON.stringify(formData));
};

inputEl.addEventListener('input', throttle(onInput, 500));

const automatInputForm = () => {
  const inputFormContent = localStorage.getItem(LOCALSTRKEY);
  if (!inputFormContent) return;

  formData = JSON.parse(inputFormContent);
  const keys = Object.keys(formData);
  for (let key of keys) {
    inputEl.elements[key].value = formData[key];
  }
};

window.addEventListener('load', automatInputForm);

const clearForm = e => {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCALSTRKEY);
  inputEl.reset();
};

inputEl.addEventListener('submit', clearForm);
