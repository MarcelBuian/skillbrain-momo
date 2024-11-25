// Crearea unei promisiuni simple
const myPromise = new Promise((resolve, reject) => {
    // Poți schimba această valoare pentru a testa diferite scenarii
    const success = false;

    if (success) {
        // Rezolvă promisiunea
        resolve("Operațiunea a fost realizată cu succes!");
    } else {
        // Respinge promisiunea
        reject("A apărut o eroare!");
    }
});

// Folosirea promisiunii
// console.log("Inceperea programului");

const loading = true;
myPromise
    .then(result => {
        // Afișează rezultatul când promisiunea este rezolvată
        console.log("Aici suntem in then");
        console.log(result);
    })
    .catch(error => {
        // Afișează eroarea când promisiunea este respinsă
        console.log("Aici suntem in catch");
        console.log(error);
    })
    // .finally(() => {
    //     console.log("aici suntem in finally");
    //     loading = false;
    // })
    ;

console.log("Sfarsit de program");