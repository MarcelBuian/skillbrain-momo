
// Spread Operator (Shallow copy)

const animals1 = [
    'cats',
    'dogs',
    'birds',
    ['Tom', 'Jerry'],
];

// Note: This doesn’t safely copy multi-dimensional arrays.
// Array/object values are copied by reference instead of by value.
// Copierea s-a facut doar la primul nivel de adancime.
const animals2 = [...animals1];


animals1[3] = [...animals1[3]];
animals1[3].push("Spike");


animals2.push('horses');


console.log("animals1 = ", animals1);
console.log("animals2 = ", animals2);


