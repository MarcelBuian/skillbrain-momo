// const showInput = () => {
//     console.log("Hello World");
// }
// setInterval(showInput, 1000);



setInterval(() => {
    console.log("Hello World");
}, 1000);


// console.log("Hello Andreea");

// let text = "Hello Andreea";
// text = text.replace('Andreea', 'Dana');
// console.log(text);


// Apelarea functiei se face cu adaugare parantezei la functie
// showInput();



const inmultesteCuZece1 = (nr) => nr * 10;

const inmultesteCuZece2 = function (nr) {
    console.log("suntem in interiorul function inmultesteCuZece2 la numarul " + nr);
    return nr * 10;
}

const a = [1, 2, 3].map(inmultesteCuZece2);

console.log(a);

console.log("Program finisat");

// console.log(Math.sqrt(9));