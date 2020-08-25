const os = require('os');
var freeMem = os.freemem();
var totalMem = os.totalmem();
console.log('Free Memory is: ' + freeMem);
console.log('Total Memory is: ' + totalMem);

//template ES6

console.log(`Total Memory wrong: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);
