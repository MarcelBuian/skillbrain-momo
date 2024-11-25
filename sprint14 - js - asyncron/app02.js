// Un exemplu de a citi un fisier mare de 10 ori intr-o functie asincrona:

import { dirname } from 'path';
import { fileURLToPath } from 'url';
import filesystem from 'fs';

// Get the current directory of this file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Cream o functie care sa afiseze ora curenta sub formatul HH:MM:SS.mmm
const displayTimeNow = (message) => {
    const time = new Date().toISOString().slice(11, 23);
    console.log(`${time} ${message}`);
};

const readFileCallback = function (param, err, data) {
    if (err) {
        console.error("Eroare la citirea fisierului:", err);
        return;
    }
    displayTimeNow(param + " Fisierul a fost citit cu success, data are: " + data.length + " caractere.");
}

const readFiles = (times) => {
    for (let i = 1; i <= times; i++) {
        const content = filesystem.readFile(`${__dirname}/files/file1.txt`, 'utf-8', function (err, data) {
            readFileCallback(i, err, data)
        });
    }
}

// Incepem codul:
displayTimeNow("Start program");

readFiles(10);

displayTimeNow("End program");



