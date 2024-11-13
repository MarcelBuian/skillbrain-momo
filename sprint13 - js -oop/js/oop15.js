// avem nevoie de fisierul package.json pentru a putea folosi functia de import:
import { Company } from './company3.js';

const company1 = new Company('SkillBrain', 'https://skillbrain.com');
console.log(company1.getName());
console.log(company1.getWebsite());


const company2 = new Company('Google', 'google.com');
console.log(company2.getName());
console.log(company2.getWebsite());

