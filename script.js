let inputString = prompt("Введіть рядок:");
let charsToRemoveString = prompt("Введіть символи для видалення (введіть їх одним рядком):");

if (inputString === null || inputString.trim() === '' || charsToRemoveString === null || charsToRemoveString.trim() === '') {
    console.log("Error!");
} else {
    let result = '';
    for (let char of inputString) {
        if (!charsToRemoveString.includes(char)) {
            result += char;
        }
    }

    console.log(result);
}