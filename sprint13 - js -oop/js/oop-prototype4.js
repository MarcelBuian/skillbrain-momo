const one = 1121312312423423;

console.log(typeof one);

// în timpul apelării se face boxing-ul
console.log(one);
console.log(one.toString());


const b1 = true;
// În timpul apelului se realizează boxing-ul
console.log(b1.toString()); // "true"


