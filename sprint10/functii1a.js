function getRandomIntegerNumber(from, to) {
    to++;
    const random = Math.random() * (to - from) + from;
    const randomInt = parseInt(random);

    return randomInt;
}

function getRandomNumbers(from, to, count) {
    const list = [];
    for (let i = 1; i <= count; i++) {
        const randomInt = getRandomIntegerNumber(from, to);
        list.push(randomInt);
    }

    return list;
}

function displayRandomNumbers(from, to, count) {
    const list = getRandomNumbers(from, to, count);

    console.log(`Lista de ${count} de numere aleatorii de la ${from} la ${to} este: `, list);
}


displayRandomNumbers(0, 10, 30);

displayRandomNumbers(100, 200, 50);

displayRandomNumbers(0, 2, 10);