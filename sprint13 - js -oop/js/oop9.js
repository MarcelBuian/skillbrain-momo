const company = {
    name: 'SkillBrain',
    country: {
        name: 'Finland',
        // getName este functia lui country, prin urmare this.name va fi Finland
        getName() {
            return this.name;
        },
    },
};

console.log(company.country.getName());

// const { country } = company;
const country = company.country;

// "Finland"
console.log(country.getName());