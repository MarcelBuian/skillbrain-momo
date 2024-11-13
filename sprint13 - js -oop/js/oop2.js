// let brand = 'bmw';

// // console.log(brand.toUpperCase());

// let brandNou = brand.replace('b', 'B');

// console.log(brandNou);


let brand = 'bmw';
brand = brand.toUpperCase(); // BMW
brand = brand.concat(' & Kia'); // BMW & Kia
brand = brand.replace('BMW', 'Opel') // Opel & Kia
console.log(brand); // => Opel & Kia 


const brand1 = 'bmw';
const newBrand = brand1
    .toUpperCase()
    .concat(' & Kia')
    .replace('BMW', 'Opel');
console.log(newBrand); // => Opel & Kia

