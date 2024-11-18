const obj = {
    date: '18 Nov',
};
// Aceasta este funcția constructor cu ajutorul căreia am creeat obiectul
obj.constructor; // [Function: Object]
// obj in sine nu are un constructor, acesta vine din prototip
console.log('obiectul are constructor?', obj.hasOwnProperty('constructor'));


console.log('obiectul are name? ', obj.hasOwnProperty('name'));

obj.name = 'SkillBrain';

console.log('obiectul are name acum? ', obj.hasOwnProperty('name'));

console.log('obiectul are date? ', obj.hasOwnProperty('date'));



function Company(name) {
    this.name = name;
}

Company.prototype.getName = function getName() {
    // this depide de contextul in care este apelat
    return this.name;
}

Company.prototype.color = 'red';

const company1 = new Company('Hexlet');
const company2 = new Company('SkillBrain');

// Proprietate accesibila!
console.log(company1.getName()); // => Hexlet
console.log(company1.color); // => red

Company.getName()