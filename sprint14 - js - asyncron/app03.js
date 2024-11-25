// Un exemplu de a scrie intr-un fisier continutul din celelalte 2 fisere (sincron)

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

const getContentFromFile = (fileName) => {
    const content = filesystem.readFileSync(`${__dirname}/files/${fileName}`, 'utf-8');
    displayTimeNow(`S-a citit contentul din fisierul ${fileName}. Are ${content.length} caractere`);

    return content;
}

const writeContentInFile = (fileName, content) => {
    filesystem.writeFileSync(`${__dirname}/files/${fileName}`, content);

    displayTimeNow(`S-a scris contentul in fisierul ${fileName}. Are ${content.length} caractere`);
}

// Incepem codul:
displayTimeNow("Start program");

const input1 = getContentFromFile('file1.txt');
const input2 = getContentFromFile('file2.txt');
const output = input1 + input2;

writeContentInFile('output.txt', output);

displayTimeNow("End program");



