const obj = {
    a: {
        b: {
            c: {
                key: 'valueOfC'
            },
            // d: {
            //     key: 'valueOfD'
            // },
            e: [1, 2],
        }
    }
};

console.log(obj.a.b.c.key);
console.log(obj);

// Pentru a transforma obiectul in string folosim JSON.stringify
// console.log(JSON.stringify(obj));
// Sau se foloseste metoda console.dir cu al doilea parametru un obiect ce contine cheia depth cu o valoare mae
console.dir(obj, { depth: 10 });


// Operator chaining (?.)
// Evalueaza ca undefined daca cheia nu a fost gasita, in loc sa arunce o eroare:

console.log("obj.a.b.c.key: ", obj.a.b.c.key);
console.log("obj.a.b.d.key: ", obj.a.b.d?.key);

// Operatorul nullish coalescing (??)
console.log("obj.a.b.c.key: ", obj.a.b.c.key ?? 'nu exista');
console.log("obj.a.b.d.key: ", obj.a.b.d?.key ?? 'nu exista');



// const varKey = 'key';
// console.log("obj.a.b.c.key: ", obj.a.b.c[varKey]);
// console.log("obj.a.b.d.key: ", obj.a.b.d[varKey] ?? "nu exista");
