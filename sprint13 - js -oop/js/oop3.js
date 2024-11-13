
// const brand1 = 'bmw';
// const list = brand1.toUpperCase().split('');

// const callbackFn = function (litera) {
//     return litera + ".";
// };
// const listNou = list.map(callbackFn);

// // const listNou = list.map((litera) => litera + '.');

// console.log(list, listNou.reverse().join('_'));




const brand = 'bmw';
const newBrand = brand.toUpperCase()
    .split('') // ['B', 'M', 'W']
    .reverse() // ['W', 'M', 'B']
    .join(''); // WMB
console.log(newBrand); // => WMB


