//const package = require('../package.json');
//const resultingCnameText = package.homepage.match(/:\/\//);
const fs = require('fs');
fs.writeFileSync(`${__dirname}/../build/CNAME`, 'telefix.xyz');
