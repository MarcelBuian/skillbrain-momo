const company = {
    name: 'SkillBrain',
    employees: [],
};

company.getName = function getName() {
    return this.name;
};

company.addEmployee = function addEmployee(user) {
    this.employees.push(user);
};

company.name = "SkillBrain Plus";

const user = { name: 'Petru' };
company.addEmployee(user);
company.addEmployee({ name: "Alex" });

console.log(company);
