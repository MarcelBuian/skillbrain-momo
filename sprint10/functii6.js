

const prop = "Ana are mere. Javascriptul e simplu........ Romania e frumoasa.";
let list = prop
    .split('.')
    .filter((s) => s.length > 0);

console.log("prop = ", prop);
console.log("list pe propozitii = ", list);

getStringWithoutChar = (s, char) => {
    while (s.includes(char)) {
        s = s.replace(char, '');
    }

    return s;
}


let list2 = prop
    .split(" ")
    .map((s) => getStringWithoutChar(s, '.'));

console.log("list pe cuvinte = ", list2);

console.log("lista fara puncte intr-un string: ", list2.join(' '));