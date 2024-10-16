


const getSumOfList = (list) => {
    // Daca lista are cel putin un element care nu e numar - atunci suma trebuie sa fie -1.
    let sum = 0;
    let isListInvalid = false;
    const f1 = (element) => {
        if (typeof element !== 'number') {
            isListInvalid = true;
            return;
        }
        sum = sum + element;
    };
    list.forEach(f1);

    return isListInvalid ? -1 : sum;
}

let listaCuNumere = [1, 2, 3, 4];
let suma = getSumOfList(listaCuNumere);
console.log("Suma la " + listaCuNumere + " este: " + suma);


listaCuNumere = [1, 2, 3, "f", 4];
suma = getSumOfList(listaCuNumere);
console.log("Suma la " + listaCuNumere + " este: " + suma);
