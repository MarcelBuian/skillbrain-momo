// La tipurile de date primitive: valoarea este copiata mereu, iar cea anterioara este in continuare neatinsa.
// La fel se aplica si la numere sau bool-eni


let s1 = "student Mihnea";

const s2 = s1.toUpperCase();
let s3 = s1;

s3 = `${s3} cu temele finisate`;

s1 = s1 + '.';

console.log("s1= " + s1);
console.log("s2= " + s2);
console.log("s3= " + s3);

console.log("s1= " + s1);

// Insa la liste (la fel ca la obiecte) valoarea listei o data modificata - poate modifica si originalul.



