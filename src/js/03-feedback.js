const inputEl = document.querySelector('.feedback-form');
const LOCALSTRKEY = 'feedback-form-state';
const throttle = require('lodash.throttle');

const onClick = () => {
  const email = inputEl.elements.email.value;
  const message = inputEl.elements.message.value;
  localStorage.setItem(LOCALSTRKEY, JSON.stringify({ email, message }));
};

inputEl.addEventListener('input', throttle(onClick, 500));

const automatInputForm = () => {
  const inputFormContent = localStorage.getItem(LOCALSTRKEY);
  if (!inputFormContent) return;

  const inputFormContentEl = JSON.parse(inputFormContent);
  const keys = Object.keys(inputFormContentEl);

  for (let key of keys) {
    inputEl.elements[key].value = inputFormContentEl[key];
  }
};

window.addEventListener('load', automatInputForm);

const clearForm = e => {
  e.preventDefault();
  const email = e.target.email.value;
  const message = e.target.message.value;

  console.log({ email: email, message: message });
  localStorage.removeItem(LOCALSTRKEY);
  inputEl.reset();
};

inputEl.addEventListener('submit', clearForm);
