const EventEmitter = require ('events');
//class human, object Aaron

const Logger = require('./logger.js');
const logger = new Logger();

//register a listener
logger.on('messageLogged', (arg) => { //arrow instead of function
    console.log('listener called', arg);
});

logger.log('message');
