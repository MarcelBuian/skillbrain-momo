const company1 = {
    name: 'SkillBrain',
    getName: function getName() {
        return this.name
    }
};
const company2 = {
    name: 'SkillBrain Plus',
};

console.log(company1.getName()); // "SkillBrain"

// Este copiata doar referinta la functie
// Functia exista independent de obiect
company2.getName = company1.getName;

console.log(company2.getName()); // "SkillBrain Plus"