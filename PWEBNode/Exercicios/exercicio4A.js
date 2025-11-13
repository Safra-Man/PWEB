const fs = require('fs');
const data = fs.readFile('cidades.txt');
console.log(data.toString());