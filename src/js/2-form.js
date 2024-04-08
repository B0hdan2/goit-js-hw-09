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
  const { email, message } = event.currentTarget.elements;

  const objUserInfo = {
    email: email.value.trim(),
    message: message.value.trim(),
  };
  addDataToLocalStorage('feedback-form-state', objUserInfo);
}

function clearsFormData(event) {
  event.preventDefault();
  removeDataLocalStorage('feedback-form-state');
  formEl.reset();
}
