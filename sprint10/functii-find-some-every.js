const array1 = [5, 12, 8, 130, 44];

// Returneaza primul element al carui callback rezultat este adevarat (true)
const found = array1.find((element) => element > 10);

console.log("array1 = ", array1);
console.log("primul element > 10 = ", found);
// Expected output: 12


// Daca le vrem pe toate:
const foundList = array1.filter((element) => element > 10);
console.log("toate elementele > 10 = ", foundList);

// some: returneaza un boolean (true sau false) daca cel putin un element respecta conditia (din callback):
const someGreaterThanTen = array1.some((element) => element > 10);
console.log("exista element > 10 ? ", someGreaterThanTen);

const someGreaterThanThousand = array1.some((e) => e > 1000);
console.log("exista element > 1000 ? ", someGreaterThanThousand);

// every: returneaza un boolean (true sau false) daca toate elementele respecta conditia (din callback):
const everyGreaterThanTen = array1.every((element) => element > 10);
console.log("toate elementele > 10 ? ", everyGreaterThanTen);

const everyGreaterThanTwo = array1.every((e) => e > 2);
console.log("toate elementele > 2 ? ", everyGreaterThanTwo);

