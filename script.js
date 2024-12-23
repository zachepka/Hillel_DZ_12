function removeChars(inputString, charsToRemove) {
    if (inputString?.trim() || charsToRemove === null) {
      return "Error!";
    } else {
      let result = '';
      for (const char of inputString) {
        if (!charsToRemove.includes(char)) {
          result += char;
        }
      }
      return result;
    }
  }
  
  let inputString = prompt("Введіть рядок:");
  let charsToRemoveString = prompt("Введіть символи для видалення:");
  
  if (inputString !== null && charsToRemoveString !== null) {
    let charsToRemove = charsToRemoveString.split('');
    let result = removeChars(inputString, charsToRemove);
    console.log(result);
  }