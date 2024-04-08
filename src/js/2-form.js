import {
  addDataToLocalStorage,
  getDataLocalStorage,
  removeDataLocalStorage,
} from './localStorage-API.js';

const formEl = document.querySelector('form');
formEl.addEventListener('input', recordsData);
formEl.addEventListener('submit', clearsFormData);

function fillsFields() {
  const formData = getDataLocalStorage('feedback-form-state');
  if (formData === undefined) return;

  const keys = Object.keys(formData);

  for (const key of keys) {
    formEl.elements[key].value = formData[key];
  }
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

  let formValid = true;

  formEl.querySelectorAll('input, textarea').forEach(input => {
    if (input.value.trim() === '') {
      formValid = false;
      alert(`Будь ласка, заповніть поле: ${input.name}`);
    }
  });

  if (!formValid) return;

  removeDataLocalStorage('feedback-form-state');
  formEl.reset();
}
