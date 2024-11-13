const printer = {
    items: [1, 2],
    print1() { // funcția are un context
        // funcția săgeata se află in interiorul funcției print,
        // este apelată din forEach
        this.items.forEach((item) => console.log(item));
    },
    print2: () => {
        this.items?.forEach((item) => console.log(item));
    },
};


console.log('print1:');
printer.print1();

// Nu functioneaza cu functii arrow (pentru ca avem acel this)
console.log('print2:');
printer.print2();
