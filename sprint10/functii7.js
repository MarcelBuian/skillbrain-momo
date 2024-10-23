const myMap = (collection, callback) => {
    const result = [];
    for (const item of collection) {
        // Apelarea funcție callback
        const newItem = callback(item);
        // Inserarea valorii în array-ul result
        result.push(newItem);
    }

    return result;
};

const numbers = [5, 2, 3];

const ridicareLaPatratFn = (number) => number ** 2;
const scadeCuZeceFn = (number) => number - 10;

const numbersLaPatrat = myMap(numbers, ridicareLaPatratFn);
const numbersWithoutTen = myMap(numbers, scadeCuZeceFn);

console.log("lista originala: ", numbers);
console.log("lista ridicata la patrat: ", numbersLaPatrat);
console.log("lista cu numere minus zece: ", numbersWithoutTen);