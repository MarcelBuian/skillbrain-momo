// avem nevoie de fisierul package.json pentru a putea folosi functia de import:
import { make } from './company2.js';

const company = make('SkillBrain', 'https://skillbrain.com');
console.log(company.getName());

