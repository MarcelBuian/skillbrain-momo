const company = {
    name: 'SkillBrain',
    // getName: function () {
    //     return this.name
    // }
    getName() {
        return this.name;
    }
    // this nu se poate folosi in functii arrow
    // getName: () => this.name,
};

// cuvantul "this" nu poate fi apelat in functii arrow, doar in cele clasice
company.getName = function getName() {
    return this.name;
};

company.name = "Google";


console.log(company.getName());
