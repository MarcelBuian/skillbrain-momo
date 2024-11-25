
const i1 = setInterval(() => {
    console.log("Hello World 1");
}, 300);


const i2 = setInterval(() => {
    console.log("Hello World 2");
}, 400);


const i3 = setInterval(() => {
    console.log("Hello World 3");
}, 250);


const i4 = setInterval(() => {
    console.log("Hello World 4");
}, 700);


setTimeout(() => {
    clearInterval(i1);
    clearInterval(i2);
    clearInterval(i3);
    clearInterval(i4);
}, 5000)