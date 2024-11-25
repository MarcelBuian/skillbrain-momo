
const ages = [32, 33, 16, 40];

// Create a Test Function
function checkAge(age, index, arr) {

    if (index + 1 === arr.length) {
        return true;
    }

    return age < 35;
}

// Are all ages over 18?
const result = ages.every(checkAge);
console.log(result);



// Obiect care conține o proprietate pentru comparație
const rangeChecker = {
    max: 10, // Valoarea maximă pentru validare
    isInRange(value) {
        // Verificăm dacă valoarea este mai mică decât maximul
        return value <= this.max;
    }
};

// Array-ul pe care dorim să verificăm valorile
const numbers = [2, 4, 6, 8];

// Verificăm dacă toate numerele sunt în interval folosind every
const areAllNumbersInRange = numbers.every(function (number) {
    // Apelăm funcția isInRange cu this referindu-se la rangeChecker
    return this.isInRange(number);
}, rangeChecker); // rangeChecker este folosit ca `this`

// Afișăm rezultatul
console.log("Rezultatul areAllNumbersInRange: ", areAllNumbersInRange); // true