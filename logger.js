//function(exports, require, module, __filename, __dirname){
//console.log(__filename);
//console.log(__dirname);
//class name always Big First Letter
const EventEmitter = require ('events');
var url = 'http://mylogger.io/log';

class Logger extends EventEmitter{
     log(message){
    //send a http request
    console.log(message);

    //raise event
 this.emit('messageLogged', { id:1, url:'http://'});
}}
module.exports= Logger;
