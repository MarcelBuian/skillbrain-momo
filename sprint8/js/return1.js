


const getSumOfList = (list) => {
    // Daca lista are cel putin un element care nu e numar - atunci suma trebuie sa fie -1.
    let sum = 0;

    for (let element of list) {
        if (typeof element !== 'number') {
            // Acest return va iesi din functie
            return -1;
        }
        sum = sum + element;
    }

    return sum;
}

let listaCuNumere = [1, 2, 3, 4];
let suma = getSumOfList(listaCuNumere);
console.log("Suma la " + listaCuNumere + " este: " + suma);


listaCuNumere = [1, 2, 3, "f", 4];
suma = getSumOfList(listaCuNumere);
console.log("Suma la " + listaCuNumere + " este: " + suma);

