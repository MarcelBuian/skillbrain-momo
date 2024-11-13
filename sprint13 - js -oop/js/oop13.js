// avem nevoie de fisierul package.json pentru a putea folosi functia de import:
import { make, getName } from './company1.js';

const company = make('SkillBrain', 'https://skillbrain.com');
console.log(getName(company));

