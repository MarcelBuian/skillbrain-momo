const printer = {
    name: 'SkillBrain',
    print(greeting = 'hello', times = 1) {
        for (let i = 1; i <= times; i++) {
            console.log(`${i}: ${greeting}, ${this.name}`);
        }
    }
};

// Apelarea directă
printer.print();


// func.apply(thisArg, [ argsArray])
const print1 = printer.print;
// nu va functiona pentru ca e zmuls din context
console.log('print1:');
print1();

// cu bindul ii dam context in momentul crearii functiei:
const print2 = printer.print.bind(printer);
// const print2 = printer.print.bind(printer, ['good bye']);
console.log('print2:');
print2();


// folosim apply pentru a da contextul in momentul apelarii functiei:
const print3 = printer.print;
console.log('print3:');
print3.apply(printer);
print3.apply(printer, ['good bye', 3]);


// folosim call pentru a da contextul in momentul apelarii functiei:
const print4 = printer.print;
console.log('print4:');
// print4.call(printer);
print4.call(printer, 'good bye', 3);


