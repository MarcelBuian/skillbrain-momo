// Create an Object
const person1 = {};
const person2 = person1;

// Add Properties
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 50;
person1["eyeColor"] = "blue";

delete person2.age;

console.log("person1= ", person1);
console.log("person2= ", person2);

let person1Values = [];
for (let key in person1) {
    const value = person1[key];
    person1Values.push(value);
}
console.log("person1Values = ", person1Values);

const keys = Object.keys(person1);
console.log("keys from person1 are: ", keys);

const values = Object.values(person1);
console.log("values from person1 are: ", values);

const entries = Object.entries(person1);
console.log("entries from person1 are: ", entries);


let person2Values = [];
for (const [key, value] of Object.entries(person2)) {
    person2Values.push(value);
}

console.log("person2Values = ", person2Values);