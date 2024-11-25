// Funcție care returnează o promisiune
function myAsyncFunction() {
    // Returnăm o promisiune care va fi rezolvată sau respinsă după 2 secunde
    return new Promise((resolve, reject) => {
        // Poți schimba această valoare pentru a testa diferite scenarii
        const success = true;

        // Simulăm o întârziere de 2 secunde
        setTimeout(() => {
            // Dacă succesul este adevărat, rezolvăm promisiunea
            if (success) {
                resolve("Operațiunea a fost realizată cu succes!");
            } else {
                // Dacă succesul este fals, respingem promisiunea
                reject("A apărut o eroare!");
            }
        }, 5000);
    });
}

// Funcție asincronă care folosește await pentru a aștepta promisiunea
async function executeAsync() {
    try {
        console.log("Începem operațiunea...");

        // Așteptăm ca promisiunea să fie rezolvată
        const result = await myAsyncFunction();

        // Afișăm rezultatul obținut din promisiune dacă este rezolvată
        // Afișează "Operațiunea a fost realizată cu succes!"
        console.log(result);
    } catch (error) {
        // Dacă promisiunea este respinsă, afișăm eroarea
        // Afișează eroarea dacă promisiunea a fost respinsă
        console.log(error);
    }
}

// Apelăm funcția asincronă
executeAsync();
