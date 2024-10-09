// 1. if

// IF (conditie) THEN
//   do something
// ELSE IF (alta conditie) THEN
//   do some other thing
// ELSE (nici una din cele 2 conditii) THEN
//   do something else

const a = 10;

if (a > 0) {
    console.log("a> 0 ?");
    console.log("da, a este pozitiv");
} else if (a === 0) {
    console.log("a este zero");
} else {
    console.log("a nu este pozitiv");
    console.log("a este negativ");
}


// 2. functii:
// 2.a functie clasica:

function get_sum(a, b) {
    return a + b;
}

const n1 = 3;
const n2 = 7;
const n3 = get_sum(n1, n2);

console.log(n3);
console.log(n1 + " + " + n2 + " = " + n3);
console.log(`${n1} + ${n2} = ${n3}`);

function get_div(a, b) {
    if (b === 0) {
        throw "Nu se poate imparti la zero";
    }

    return a / b;
}

// console.log(get_div(4, 0));
function get_pozitiv(n) {
    if (n < 0) {
        return -n;
    }

    return n;
}

console.log(get_pozitiv(-5));

// functii de tip arrow!
get_sum = (a, b) => a + b;

// forma clasica
function get_sum(a, b) {
    return a + b;
}


// 3. Switch (todo)
switch (expression) {
    case x:
        // code block
        break;
    case y:
        // code block
        break;
    default:
    // code block
}




