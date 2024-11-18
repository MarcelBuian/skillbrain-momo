const numbers1 = [1, 3];
// este acelasi lucru ca mai sus.
const numbers2 = new Array(1, 3);

console.log(numbers1);

console.log(numbers1.length);

console.log(numbers1.concat([6, 7]));

console.log(numbers1.find(function (el) {
    return el > 2;
}));


console.log(numbers1.find((el) => el > 2));

console.log(numbers1.at(0));
console.log(numbers1[0]);

numbers1.push(8);

console.log(numbers1);

// Din momentul ăn care acest cod este executat, toate listele
// inclusiv cele existente, vor avea si metoda last
Array.prototype.last = function last() {
    return this.at(this.length - 1);
}

console.log(numbers1.last());


// 