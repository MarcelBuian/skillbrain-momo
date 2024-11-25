// Un exemplu de a scrie intr-un fisier continutul din celelalte 3 fisere (asincron)

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

const readContentFromFile = (fileName, callback) => {
    filesystem.readFile(`${__dirname}/files/${fileName}`, 'utf-8', function (error, data) {
        if (error) {
            console.log(`A aparut o eroare citind fisierul ${fileName}`);
            throw error;
        }
        if (data) {
            displayTimeNow(`S-a citit cu success contentul din fisierul ${fileName}. Are ${data.length} caractere.`);
        }
        callback(data);
    });
}

const writeContentInFile = (fileName, content, callback) => {
    filesystem.writeFile(`${__dirname}/files/${fileName}`, content, function (error) {
        if (error) {
            console.log(`A aparut o eroare scriind in fisierul ${fileName}.`);
            throw error;
        }

        displayTimeNow(`S-a scris contentul in fisierul ${fileName}. Are ${content.length} caractere.`);
        callback();
    });

    // Echivalent cu intructiunea de mai sus.
    // filesystem.writeFile(`${__dirname}/files/${fileName}`, content, callback);
}

// Incepem codul:
displayTimeNow("Start program");

readContentFromFile('file1.txt', (content1) => {
    readContentFromFile('file2.txt', (content2) => {
        readContentFromFile('file3.txt', (content3) => {
            const output = content1 + content2 + content3;
            writeContentInFile('output.txt', output, () => {
                console.log("Outputul este scris cu success.");
            });
        });
    });
});

displayTimeNow("End program");



