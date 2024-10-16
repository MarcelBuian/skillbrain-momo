const obj1 = {
    key1: true,
    "key2": 1,
    4: "patru",
    key4: {
        a: "value1",
        b: [1, 2, 4],
    }
};

console.log(obj1);
console.log(obj1.key4);
// Asa ajungem sa tiparim valoarea lui a din key4 din obj1:
console.log(obj1.key4.a);

// Un alt mod de a citi datele intr-un obiect poate fi si cu paranteze patrate []:
console.log(obj1['key4']['a']);

const s = 'key4';

console.log(obj1[s]);