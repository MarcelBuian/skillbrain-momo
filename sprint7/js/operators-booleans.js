// Operatori:


// JavaScript Comparison Operators (logice, boolean)

// equal to
// == (comparatie doar intre valori, nu si tipul de date)
// === (se recomanda, si intre valori, si intre tip de date)
// ! (not) true => false, false => true
// !== (functioneaza si cu != )
// >, <, >=, <= (operatori aritmetici, cu rezultat boolean)
// ? - operator ternar



console.log(typeof 2);
console.log(typeof "2");
console.log(typeof Number.parseInt('3'));

// console.log(2 == 2);
// console.log(2 == '2');

const nr1 = 3;

// 3 === 3
console.log(nr1 === 3);
// console.log(3 === '3');
// console.log(3 === Number.parseInt('3'));


const nr2 = false;
// false (bool) === 0 (number)
console.log(nr2 === 0);
// console.log(nr2 == 0);
const rez = "nr2 este egal cu " + nr2 + " si gata.";
console.log(rez);


console.log("Operator ternal");
// const numeleVar = (instructiune) ? valoare_cand_instr_este_adev : valoare_cand_instr_este_false;

const n = -13;

const nPos1 = n > 0 ? n : -n;
const nPos2 = Math.abs(n);

console.log("nPos1 = ", nPos1);
console.log("nPos2 = ", nPos2);



console.log("30" < "4");
console.log(Number.parseInt("30") < Number.parseInt("4"));


let a = 5;

a = a + 2;
a += 2;
a++; // acelasi lucru cu a += 1; sau cu a = a + 1

console.log(a);


// Si boolean; Raspunsul va fi intotdeauna un rezultat boolean (true/false)
console.log("true && true = ", true && true); // 1 && 1 => 1
console.log("true && false = ", true && false); // 1 && 0 => 0
console.log("false && true = ", false && true); // 0 && 1 => 0
console.log("false && false = ", false && false); // 0 && 0 => 0

// Sau boolean: Raspunsul va fi intotdeauna un rezultat boolean (true/false)
console.log("true || true = ", true || true); // 1 || 1 => 1
console.log("true || false = ", true || false); // 1 || 0 => 1
console.log("false || true = ", false || true); // 0 || 1 => 1
console.log("false || false = ", false || false); // 0 || 0 => 0

// Negarea: Raspunsul va fi intotdeauna un rezultat boolean (true/false)
console.log("not true = ", !true); // !1 => 0
console.log("not false = ", !false); // !0 => 1



