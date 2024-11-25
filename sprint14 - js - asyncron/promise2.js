// Un exemplu de a scrie intr-un fisier continutul din celelalte 3 fisere (asincron) folosind Promise-uri

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

const readContentFromFile = (fileName) => {
    return new Promise((resolve, reject) => {
        filesystem.readFile(`${__dirname}/files/${fileName}`, 'utf-8', function (error, data) {
            if (error) {
                console.log(`A aparut o eroare citind fisierul ${fileName}`);
                reject(error);
            }
            if (data) {
                displayTimeNow(`S-a citit cu success contentul din fisierul ${fileName}. Are ${data.length} caractere.`);
                resolve(data);
            }
        });
    });
}

const writeContentInFile = (fileName, content) => {
    return new Promise((resolve, reject) => {
        filesystem.writeFile(`${__dirname}/files/${fileName}`, content, function (error) {
            if (error) {
                console.log(`A aparut o eroare scriind in fisierul ${fileName}.`);
                reject(error);
                return;
            }

            displayTimeNow(`S-a scris contentul in fisierul ${fileName}. Are ${content.length} caractere.`);
            resolve();
        });
    })
}

// Incepem codul:
displayTimeNow("Start program");

readContentFromFile('file1.txt')
    .then((content1) => {
        readContentFromFile('file2.txt')
            .then((content2) => {
                readContentFromFile('file3.txt')
                    .then((content3) => {
                        const output = content1 + content2 + content3;
                        writeContentInFile('output.txt', output)
                            .then(() => {
                                console.log("Outputul este scris cu success.");
                            })
                            .catch((error) => {
                                throw error;
                            });
                        ;
                    })
                    .catch((error) => {
                        throw error;
                    });
                ;
            })
            .catch((error) => {
                throw error;
            });
        ;
    })
    .catch((error) => {
        throw error;
    });

displayTimeNow("End program");

// Output:
// 20:41:50.055 Start program
// 20:41:50.060 End program
// 20:41:50.061 S-a citit cu success contentul din fisierul file1.txt. Are 4271 caractere.
// 20:41:50.061 S-a citit cu success contentul din fisierul file2.txt. Are 25256 caractere.
// 20:41:50.061 S-a citit cu success contentul din fisierul file3.txt. Are 38 caractere.
// 20:41:50.062 S-a scris contentul in fisierul output.txt. Are 29565 caractere.
// Outputul este scris cu success.