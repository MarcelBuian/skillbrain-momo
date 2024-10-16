
// Exemplu de recursivitate, folosind functia factorial.

// Factorial:
// n! = 1 * 2 * 3 * ... * n

// 1: 0! = 1
// 2: n! = (n-1)! * n;

// 1! = 0! * 1 = 1
// 2! = 1! * 2 = 2
// 3! = 2! * 3 = 6
// 4! = 3! * 4 = 6 * 4 = 24
// 5! = 4! * 5 = 24 * 5 = 120
// 6! = 5! * 6 = 120 * 6 = 720


function getFactorial(n) {

    if (n < 0) {
        // throw "n (" + n + ") trebuie sa fie pozitiv";
        throw `n (${n}) trebuie sa fie pozitiv`;
    }

    if (n <= 1) {
        return 1;
    }

    // Daca ajungem cu codul aici e clar ca n nu este 0, din cauza "return" de mai sus
    return n * getFactorial(n - 1);
}


const nr = 5;
console.log("Factorial de " + nr + " (prima metoda, recursivitate) este egal cu " + getFactorial(nr));




const factorial = (n) => {
    let counter = 1;
    let result = 1;

    while (counter <= n) {
        result *= counter;
        counter++;
    }

    return result;
}

console.log("Factorial de " + nr + " (a doua metoda, fara recursie) este egal cu " + factorial(nr));



