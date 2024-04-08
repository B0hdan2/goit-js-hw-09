export function addDataToLocalStorage(key, value) {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.log(error);
  }
}

export function getDataLocalStorage(localKey) {
  try {
    const serializedData = JSON.parse(localStorage.getItem(localKey));
    return serializedData === null ? undefined : serializedData;
  } catch (error) {
    console.log(error);
  }
}

export function removeDataLocalStorage(localKey) {
  try {
    localStorage.removeItem(localKey);
  } catch (error) {
    console.log(error);
  }
}

export function removeAllData() {
  localStorage.clear();
}
