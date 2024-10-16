const array1 = [1, -5, 20, -34, 16, 29, 36, -4];

function reverseArray(array1) {
    const arrayCopied = [...array1];
    const arrayReversed = arrayCopied.reverse();

    return arrayReversed;
}

const array2 = reverseArray(array1);

console.log("array1 = ", array1);
console.log("array2 = ", array2);





// varianta 2:

const array3 = [1, -5, 20, -34, 16, 29, 36, -4];

const reverseArray2 = (array) => [...array].reverse();
const array4 = reverseArray2(array3);

console.log("array3 = ", array3);
console.log("array4 = ", array4);

