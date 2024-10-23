const array1 = [1, 2, 3, 4];

const initialValue = 0;

const sumFn = (accumulator, currentValue) => accumulator + currentValue;

// Reduce primeste mereu 2 parametri: primul este o functie callback, al doilea este valoarea initiala
const sumWithInitial = array1.reduce(sumFn, initialValue);

console.log("array1 = ", array1);
console.log("suma tuturor elementelor = ", sumWithInitial);

// Reduce se poate folosi si la siruri de caractere (string):

const s = "JAVASCRIPT: Reduce se poate folosi si la siruri de caractere (string):";

const extrageVocaleFn = (accumulator, currentValue) => {
    if ("aeoui".includes(currentValue.toLowerCase())) {
        return accumulator + currentValue;
    }

    return accumulator;
}

const sDoarCuVocale = s.split('').reduce(extrageVocaleFn, "");

console.log("s = ", s);
console.log("sDoarCuVocale = ", sDoarCuVocale);