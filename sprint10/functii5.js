
const users = [
    { name: 'Victor', age: 19 },
    { name: 'Gheo', age: 1 },
    { name: 'Mircea', age: 4 },
    { name: 'Matei', age: 16 },
];


console.log("users original: ", users);


const filterFnClassic = function (user) {
    return user.age >= 16;
}
const filterFnArrow = (user) => user.age >= 16;
const newUsers1a = users.filter(filterFnArrow);

// Acelasi lucru ca si newUsers1 scris intr-o linie
const newUsers1b = users.filter((user) => user.age >= 16);

console.log("users after filter: ", newUsers1b);

const mapFnArrow = (user) => `${user.name} is ${user.age} years old`;
const newUsers2 = newUsers1b.map(mapFnArrow);

console.log("users after filter and map: ", newUsers2);


const usersInOneLine1 = newUsers2.join(". ");
console.log("users after filter and map and join (1): ", usersInOneLine1);




const usersInOneLine2 = users
    .filter((user) => user.age >= 16)
    .map((user) => `${user.name} is ${user.age} years old`)
    .join('. ')
    .toUpperCase();


console.log("users after filter and map and join (2): ", usersInOneLine2);


