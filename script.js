function removeChars(inputString, charsToRemove) {
  if (!inputString.trim()) {
      return "Error!";
  } 
  let result = '';
  for (const char of inputString) {
      if (!charsToRemove.includes(char)) {
          result += char;
      }
  }
  return result;
}

const inputString = prompt("Введіть рядок:");
const charsToRemoveString = prompt("Введіть символи для видалення:");

if (inputString !== null && charsToRemoveString !== null) {
  const charsToRemove = charsToRemoveString.split('');
  const result = removeChars(inputString, charsToRemove);
  console.log(result);
}