

const displayNumbersClassic = (param1, param2, param3) => {
    console.log(param1, param2, param3);
}

displayNumbersClassic(4);
displayNumbersClassic(1, 2);
displayNumbersClassic("ana", "are", "mere");
displayNumbersClassic(1, 2, 3, 4);

console.log("---------------");

const displayNumbers = (...params) => {
    console.log(params);
}

displayNumbers(4);
displayNumbers(1, 2);
displayNumbers("ana", "are", "mere");
displayNumbers(1, 2, 3, 4);