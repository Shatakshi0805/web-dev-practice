import {franc, francAll} from 'franc';
import langs from 'langs';

const input = process.argv[2];
const code = franc(input);
// const language = langs.where("3", code);
// console.log(code);
const language = langs.where("3", code);
// console.log(`Language is : ${language.name}`);
console.log(language.name);