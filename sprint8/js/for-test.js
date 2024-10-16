
// Aceste 2 for-uri vor avea un 15(5 * 3) linii de output
// for (let i = 0; i < 5; i++) { // aceasta este iterația înconjurătoare
//     for (let j = 0; j < 3; j++) { // aceasta este iterația interioară
//         console.log(`i=${i}, j=${j}`);
//     }
// }


// Aceste 2 for-uri vor avea un 5(5 * 1) linii de output
// for (let i = 0; i < 5; i++) {
//     // aceasta este iterația interioară
//     for (let j = 0; j < 3; j++) {
//         if (j === 1) {
//             // Break iese din bucle de: while, do, for, switch
//             break;
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }


// Aceste 2 for-uri vor avea un 10(5 * 2) linii de output

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j === 1) {
//             // Continue continua bucla de: while, do, for
//             continue;
//         }
//         console.log(`i=${i}, j=${j}`);
//     }
// }

// const f1 = function (number) {
//     // Aici nu se poate folosi nici break nici continue
//     console.log(number);
// };
// [1, 2, 3, 4].forEach(f1);


// Printre altele, return iese direct din functia apropiata, iar daca nu suntem intr-o functie - se iese din aplicatie.



const showOutput = (n) => {
    let repetitions = 0;
    for (i = 0; i < n; i++) {
        console.log("i = " + (i + 1));
        repetitions++;

        if (repetitions > 10) {
            console.log("Maximum of 10 repetitions has reached");
            return;
        }
    }
}


showOutput(50);

console.log("Programul s-a finisat");
