
console.log("vorbim despre liste");

// In engleza lista = array

// Index-ul din liste in Javascript incepe cu 0
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;

console.log(cars);
console.log("Primul element (var1) din lista este: " + cars[0]);
console.log("Primul element (var2) din lista este: " + cars.at(0));
console.log("Al doilea element din lista este: " + cars[1]);
console.log("Al patrulea element din lista este: " + cars[3]);
console.log("Al cincilea element din lista este: " + cars[4]);

console.log("Lungimea listei este " + cars.length);

// Adaugarea unui element in lista:
cars.push("Opel");
console.log(cars);

// Stergerea unui element din lista:
cars.splice(1, 2);
console.log(cars);

// Creeaza un array nou din array existent:
const carsNew = cars.slice(0, 2);
console.log("cars = " + cars);
console.log("carsNew = " + carsNew);


// Definim cars2
const cars2 = ["BMW", "Volvo", "Saab", "Ford"];
console.log("cars2 = " + cars2);
console.log("Indexul din lista unde se afla Volvo este: " + cars2.indexOf("Volvo"));
console.log("Indexul din lista unde se afla Ford este: " + cars2.indexOf("Ford"));
console.log("Indexul din lista unde se afla Renault este: " + cars2.indexOf("Renault"));

const years = [2000, 2001, 2002, 2003];
console.log(years["2"] !== years["02"], years[2], years["2"], years["02"]);


console.log(cars);
console.log('cars cu toString(): ' + cars.toString());
console.log('cars cu join: ' + cars.join(" _*_ "));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits before: ", fruits);
const fruit = fruits.pop();
console.log("fruits after pop: ", fruits);
console.log("fruit = ", fruit);

fruits.push("Kiwi");
console.log("fruits after push: ", fruits);


const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits2 before: ", fruits2);
delete fruits2[0];
console.log("fruits2 after delete: ", fruits2);
console.log("primul element din fruits2 este:", fruits2[0]);


const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits3 before: ", fruits3);
fruits3.shift();
console.log("fruits3 after shift: ", fruits3);


const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits4 before: ", fruits4);
fruits4.splice(2, 1);
console.log("fruits4 after splice (2,1): ", fruits4);



const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits5 before: ", fruits5);
fruits5.unshift("Lemon");
console.log("fruits5 after unshift: ", fruits5);


const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits6 before: ", fruits6);
const fruitsCopy = [];
fruitsCopy.push("Lemon");
// fruits6.forEach(function (fruit) {
//     fruitsCopy.push(fruit);
// });
fruits6.forEach((fruit) => fruitsCopy.push(fruit));
console.log("fruitsCopy after manual adding Lemon in front: ", fruitsCopy);

const fruits7 = fruits6.concat(["Watermelon", "Melon"]);
console.log("fruits7 is fruits6 after concat 2 fruits: ", fruits7);

// Alte functii utile intr-o lista:
// indexOf()
// includes()
// find:
const numbers = [-34, 4, 9, 16, -3, 25, 29];
function myFunction(value, index) {
    const rez = value < 0 && index > 0;

    return rez;
}
let first = numbers.find(myFunction);
console.log("first = " + first);

const cars10 = ["BMW", "Volvo", "Saab", "Ford"];
console.log("cars10 before map: ", cars10);
// map:
const cars11 = cars10.map(function (value, index) {
    return value.toUpperCase();
});
console.log("cars11 after map (cars10 with uppercase): ", cars11);
