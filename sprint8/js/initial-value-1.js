
function getListWithoutCats(list) {
    let index = 0;
    // Asa se copiaza un array rezultand pointer separat
    const newList = [...list];
    for (let item of newList) {
        if (item === 'cats') {
            delete newList[index];
        }
        index++;
    }

    return newList;
}


const animals1 = ['cats', 'dogs', 'birds'];

// Nu se recomanda, pentru ca copierea este superficiala (e acelasi pointer in zona de memorie)
// Se foloseste metoda: spread operator (cele 3 puncte)
const animals2 = [...animals1];

animals2.push('horses');


const animals3 = getListWithoutCats(animals2);

console.log("animals1 = ", animals1);
console.log("animals2 = ", animals2);
console.log("animals3 = ", animals3);
