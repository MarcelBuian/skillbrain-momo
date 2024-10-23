function getReceipe(title, mumberOfPortions, incredients) {
    const reteta = {
        titlu: title,
        portii: mumberOfPortions,
        ingrediente: incredients,
    };

    return reteta;
}


const reteta1 = getReceipe("Pizza", 3, ['sunca', 'cas', 'ketchup', '4', '5', '6']);
const reteta2 = getReceipe("salata", 5, ['rosii', 'castraveti', 'cascaval', 'salata', 'morcovi']);
const reteta3 = getReceipe("piure", 4, ['cartofi', 'sare', 'cascaval', 'lapte']);

const retete = [reteta1, reteta2, reteta3];

const compareFn = function (a, b) {
    if (a.ingrediente.length < b.ingrediente.length) {
        return -1;
    }
    if (a.ingrediente.length === b.ingrediente.length) {
        return 0;
    }
    return 1;
}

const reteteCopy = [...retete];
const reteteSortat = reteteCopy.sort(compareFn);


console.log("retete: ", retete);
console.log("\nretete sortate: ", reteteSortat);

