console.log("Salut sprint 8");

// Initializari
let i = 10;
let text = "";

while (i < 10) {
    text += "The number is " + i + "\n";
    i++;
}

console.log(text);


// Conditie mereu adevarata:
i = 0;
while (true) {
    console.log(i);
    i++;
    if (i > 10) {
        break;
    }
}

// Break-ul functioneaza la while, for, switch

// Pentru a opri programul, apasam CTRL+C (comanda de linux, care inseamna anuleaza comanda curenta)


text = '';
i = 20;
// Do while
do {
    text += "The number is " + i + "\n";
    i++;
} while (i < 10);

console.log(text);