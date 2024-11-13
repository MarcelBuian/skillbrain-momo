const getName = function getName() {
    return this.name;
};

// Rezultatul este undefined, pentru ca this.name in functia getName nu are context
console.log(getName());

const company1 = { name: 'SkillBrain' };
const name1 = getName.call(company1); // "SkillBrain"
console.log(name1);

const company2 = { name: 'SkillBrain Plus' };
const name2 = getName.call(company2); // "SkillBrain Plus"
console.log(name2);