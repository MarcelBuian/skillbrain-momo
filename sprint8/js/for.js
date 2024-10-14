console.log("vorbim despre for");

const cars = ["BMW", "Volvo", "Saab", "Ford"];
// indecsi:    0       1       2      3
// lungimea (length) = 4
let i = 0;
let text = "";

// while (cars[i] !== undefined) {
while (i < cars.length) {
    text += cars[i];
    if (i + 1 < cars.length) {
        text += ', ';
    }
    i++;
}

console.log("textul obtinut din while: " + text);


// for (1):
// for (instructiune-asignare-i ; conditie booleana de oprire ; instructiune de incrementare)
text = '';
for (let i = 0; i < cars.length; i++) {
    text += cars[i];
    if (i + 1 < cars.length) {
        text += ', ';
    }
}

console.log("textul obtinut din for(1): " + text);

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// indecsi:    0       1       2      3

// Parcurgere de la final la inceput:
text = '';
for (let i = cars.length - 1; i >= 0; i--) {
    text += cars[i];
    if (i > 0) {
        text += ', ';
    }
}

console.log("textul obtinut din for invers: " + text);

// for in (2) (pentru obiecte):
const obj = {
    "an": 2024,
    "luna": "Octombrie",
}
for (key in obj) {
    console.log("key=", key);
}


// for of (3) (pentru liste):
text = '';
for (let car of cars) {
    text += car;
    text += ', ';
}
console.log("textul obtinut din for of1: " + text);

text = '';
for (let [i, car] of cars.entries()) {
    text += car;
    if (i + 1 < cars.length) {
        text += ', ';
    }
}
console.log("textul obtinut din for of2: " + text);

// for (let c of "Hello World!") {
//     // console.log(c);
// }

const s1 = "Romania";
console.log(s1.length);


// forEach (functia dintr-o lista liste):


// const callbackFunction = function (value) {
//     console.log("value este " + value);
// }
// cars.forEach(callbackFunction);

// cars.forEach(function (value) {
//     console.log("value este " + value);
// });

text = '';
cars.forEach((car, index) => {
    text += car;
    if (index + 1 < cars.length) {
        text += ', ';
    }
});
console.log("textul obtinut din forEach: " + text);

