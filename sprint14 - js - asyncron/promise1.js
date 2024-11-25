// Crearea unei promisiuni simple
const myPromise = new Promise((resolve, reject) => {
    // Poți schimba această valoare pentru a testa diferite scenarii
    const success = true;

    if (success) {
        // Rezolvă promisiunea
        resolve("Operațiunea a fost realizată cu succes!");
    } else {
        // Respinge promisiunea
        reject("A apărut o eroare!");
    }
});

// Folosirea promisiunii
console.log("Inceperea programului");
myPromise
    .then(result => {
        // Afișează rezultatul când promisiunea este rezolvată
        console.log(result);
    })
    .catch(error => {
        // Afișează eroarea când promisiunea este respinsă
        console.log(error);
    });

console.log("Sfarsit de program");