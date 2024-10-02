
// Tipuri de date:

// I Primitive:

// 1. undefined = Nedefinit: (1 valoare = undefined) [typeof = undefined]
// 2. null (1 valoare = null) [typeof = object]
// 3. boolean, (conditii) (2 valori = true/false) [ typeof = boolean]
// 4. Numere  [ typeof = number ]
//   a. intregi (negative) - integer
//   b. reale (cele cu virgula) - number
//   c. scrisa sub forma stiintifica
//   d. Infinity, -Infinity
//   e. NaN   (not a number)
// 5. String (text)
//  a. se afla intre ghilimele sau apostroafe

//  Complexe: 
// 6. Obiect {  } typeof = object
// 7. Liste (array) [   ] typeof = object
// 8. Obiecte instantiabile [care au clasa]
//   BigInt = typeof = bigint
// 9. Functii [typeof = function]



// I.1
let a = undefined;
console.log(a, typeof a);

// I.2
let b = null;
console.log(b, typeof b);

// I.3
// cu un egal ne referim la atribuire
let c1 = true;
// aceasta este o conditie.
let c2 = (10 == 10);
let c3 = 5 + 3 != 8.2;
console.log(c2, typeof c2);

// I.4
// a. intregi:
let n1 = 12;
console.log(n1, typeof n1);

// b. real (float):
let n2 = 12.5;
let n2b = 10 / 3;
console.log(n2, typeof n2, n2b);

// c. numar, scris sub forma stiintifica
let n3 = 3.2E+3;
let n3b = 3.2E-4;
// 3.2E+3 = 3.2 * 10^3 = 3200
// 3.1E-4 = 3.2 * 10^-4 = 3.2 * 0.0001 = 0.00032
console.log(n3, typeof n3, n3b);
let n3c = Math.pow(13, 100);
let n3d = 13 ** 100;
console.log(n3c, n3d);
let n3e = 1.232 / 9999999999999999999999;
console.log(n3e);

// d. Inifnity
const n4d = 100 / 0;
console.log(n4d, typeof n4d);
const n4di = -100 / 0;
console.log(n4di, typeof n4di);

// e. NaA 
const n4e = 0 / 0;
console.log(n4e, typeof n4e);

// 5:
// Using double quotes:
let carName1 = "Volvo XC60";
// Using single quotes:
let carName2 = 'Volvo XC60';
// Using backtick (apostrof invers). (se foloseste cand avem variabile inauntru)
let carName3 = `Volvo XC60`;

console.log(carName1, typeof carName1);

let text1 = "Ana\nare\nmere";
let text2 = "Ana" + "\n" + "are" + "\n" + "mere";
// let text3 = "Am o masina de tip " + carName1;
let text3 = "Am o masina de tip " + carName1;
let text4 = `Am o masina de tip ${carName1}`;
console.log(text3);
console.log(text4);

// let test1 = 0;
// console.log(test1);
// // let test2 = !test1;
// console.log(test2);


// 6. obiect
const ob1 = { name: "SkillBrain", date: "octombrie 2024" }
console.log(ob1, typeof ob1);

// 7. liste [de dorit doar un tip de date inauntru.]
const list1 = [12, 23, true, {}, -45.454];
console.log(list1, typeof list1);

// 8. obiect instantiabil
const ob2 = new Date;
console.log(ob2, typeof ob2);
const ob3 = BigInt(10);
console.log(ob3, typeof ob3);

// 9. functi
const f1 = (a) => a + 1;
console.log(f1, typeof f1);