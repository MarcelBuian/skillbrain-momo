function returneazaNumarVocale(text) {
    let nr = 0;
    let vocals = 'aeiou';
    for (let char of text) {
        char = char.toLowerCase();
        if (vocals.includes(char)) {
            nr++;
        }
    }
    return nr;
}

const t = "string dE test";
console.log(returneazaNumarVocale(t));
console.log(returneazaNumarVocale(t));
console.log(returneazaNumarVocale(t));