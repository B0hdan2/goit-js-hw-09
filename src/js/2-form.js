import {
  addDataToLocalStorage,
  getDataLocalStorage,
  removeDataLocalStorage,
} from './localStorage-API.js';

const formEl = document.querySelector('form');
formEl.addEventListener('input', recordsData);
formEl.addEventListener('submit', clearsFormData);

function fillsFields() {
  if (getDataLocalStorage('feedback-form-state') === undefined) return;

  const objUserInfo = getDataLocalStorage('feedback-form-state');

  const keys = Object.keys(objUserInfo);

  for (const key of keys) {
    formEl.elements[key].value = objUserInfo[key];
  }
  console.log(objUserInfo);
}
fillsFields();

function recordsData(event) {
  const formData = {};

  formEl.querySelectorAll('input, textarea').forEach(input => {
    formData[input.name] = input.value.trim();
  });

  addDataToLocalStorage('feedback-form-state', formData);
}

function clearsFormData(event) {
  event.preventDefault();
  removeDataLocalStorage('feedback-form-state');
  formEl.reset();
}
