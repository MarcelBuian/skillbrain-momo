const getRandomIntegerNumber = (from, to) => parseInt(Math.random() * (to + 1 - from) + from);

const getRandomNumbers = (from, to, count) => {
    const list = [];
    for (let i = 1; i <= count; i++) {
        const randomInt = getRandomIntegerNumber(from, to);
        list.push(randomInt);
    }

    return list;
}

const displayRandomNumbers = (from, to, count) => {
    const list = getRandomNumbers(from, to, count);

    console.log(`Lista de ${count} de numere aleatorii de la ${from} la ${to} este: `, list);
}


displayRandomNumbers(0, 10, 30);

displayRandomNumbers(100, 200, 50);

displayRandomNumbers(0, 2, 10);