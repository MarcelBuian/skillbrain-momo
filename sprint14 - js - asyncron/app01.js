// Un exemplu de a citi un fisier mare de 10 ori intr-o functie sincrona:

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';

// Get the current directory of this file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Cream o functie care sa afiseze ora curenta sub formatul HH:MM:SS
const displayTimeNow = (message) => {
    const time = new Date().toISOString().slice(11, 23);
    console.log(`${time} ${message}`);
};

const readFiles = (times) => {
    for (let i = 1; i <= times; i++) {
        const content = readFileSync(`${__dirname}/files/file1.txt`, 'utf-8');
        const length = content.length;
        displayTimeNow(`${i}: Contentul a fost citit din fisier, si are ${length} caracetere`);
    }
}

// Incepem codul:
displayTimeNow("Start program");

readFiles(10);

displayTimeNow("End program");



