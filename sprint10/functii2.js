const nowMiliseconds = Date.now();
const nowToString = (new Date()).toString();

console.log("nowMiliseconds:", nowMiliseconds);
console.log("nowToString:", nowToString);



const sum2 = (num1, num2) => num1 + num2;
function sum1(num1, num2) {
    return num1 + num2;
}

const sum = sum1(1, 2);
console.log("1+2=", sum);

console.log("1+2=", sum2(1, 2));

