const fs = require('fs');
//first require fs module
//always use asyncronous methods.
//keywords are on node.js websites

fs.readdir('./',function(err,files){
    if (err) console.log('Error', err);
    else console.log('Result: ', files);
});