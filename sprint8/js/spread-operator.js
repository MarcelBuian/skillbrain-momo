// Destructurarea folosind Spread operator

const [, secondElement, , fourthElement, fifthElement] = [1, 2, 3, 4, 5, 6];

console.log(secondElement);
console.log(fourthElement);
console.log(fifthElement);


const points = [
    [4, 3],
    [0, -3],
];

for (const [x, y] of points) {
    console.log([x, y]);
}

const fruits = ['apple', 'orange', 'banana', 'pineapple'];
const [first, second, ...rest] = fruits;

// Astea 2 fac acelasi lucru:
// const fruitsSliced = fruits.slice(2);
[, , ...fruitsSliced] = fruits;

fruitsSliced.push("lemon");

console.log("fruits = ", fruits);
console.log("rest = ", rest);
console.log("fruitsSliced = ", fruitsSliced);

