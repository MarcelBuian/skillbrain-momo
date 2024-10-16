const company1 = { name: 'SkilBrain' };
const company2 = company1;
const company3 = { name: 'SkilBrain' };

console.log("company1 === company2", company1 === company2);
console.log("company1 === company3", company1 === company3);
console.log("company1.name === company3.name", company1.name === company3.name);
