const fs = require('fs');
// console.log(fs);
const folderName = process.argv[2];

fs.mkdirSync(folderName);//this is synchronous function and fs.mkdir() is async
fs.writeFileSync(`${folderName}/index.js`);