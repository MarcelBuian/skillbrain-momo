const printer = {
    name: 'SkillBrain',
    print(greeting = 'hello') {
        console.log(`${greeting}, ${this.name}`);
    }
};

// Apelarea directă
printer.print();




// Dorim să apelăm metoda print peste 1s = 1000ms
// Obligatoriu rulați codul pe calculatorul dvs.
// pentru a întelege cum lucrează setTimeout
// nu functioneaza
setTimeout(printer.print, 1000);


// Functia e pastrata in continuare in context:
setTimeout(function () {
    printer.print();
}, 1000);

// Functia e pastrata in continuare in context:
// Acelasi lucru ca mai sus, dar printr-o functie arrow (mai simplu)
setTimeout(() => {
    printer.print();
}, 1000);


// Functia e pastrata in continuare in context:
// Acelasi lucru ca mai sus, dar printr-o functie arrow (mai simplu)
setTimeout(() => printer.print(), 1000);



// cum se foloseste bind?
const bindedPrint = printer.print.bind(printer);
// Acum se poate așa
bindedPrint(); // hello, SkillBrain
setTimeout(bindedPrint, 1000);