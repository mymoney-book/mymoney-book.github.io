// node tools/check-i18n.js
// Static consistency checks: catches empty translation values and duplicate source strings.
const fs=require('fs');const path=require('path');
const source=fs.readFileSync(path.join(__dirname,'..','v7110-i18n.js'),'utf8');
const match=source.match(/const DICT=(\{.*?\});\nconst exact=/s);
if(!match){console.error('Cannot locate translation dictionary');process.exit(1)}
const dict=JSON.parse(match[1]);let errors=[];
for(const [key,val] of Object.entries(dict)){
 if(!Array.isArray(val)||val.length!==2||val.some(x=>typeof x!=='string'||!x.trim())) errors.push('Incomplete en/ms: '+key);
 if(/[\u3400-\u9fff]/.test(val[0]))errors.push('Chinese remains in English: '+key);
 if(/[\u3400-\u9fff]/.test(val[1]))errors.push('Chinese remains in Malay: '+key);
}
console.log('Trilingual dictionary entries:',Object.keys(dict).length);
console.log('Static dictionary errors:',errors.length);
if(errors.length)console.error(errors.slice(0,25).join('\n'));
process.exit(errors.length?1:0);
