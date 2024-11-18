const company = {
    name: 'SkillBrain',
    year: 2021,
    toString() {
        return this.name + ' founded in ' + this.year;
    }
};

console.log(company.toString());

console.log(`I love ${company}!`);



const d = new Date();

console.log(d.valueOf());
console.log(d.toString());
console.log(d);




function Company(name) {
    this.name = name;
    this.year = null;
};
Company.prototype.setYear = function setYear(year) {
    return this.year = year;
}
Company.prototype.toString = function toString() {
    if (!this.year) {
        return this.name;
    }

    return `${this.name} founded in ${this.year}`;
}
const company2 = new Company('SkillBrain');
console.log(`I love ${company2}!`); // "I love SkillBrain!"

const company3 = new Company('Google');
company3.setYear(2000);
console.log(`I like ${company3}!`); // "I like Google!"
