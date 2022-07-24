 
const { createLogger, format, transports, config } = require('winston');
 
const logger = createLogger({
   transports: [
       new transports.Console()
     ]
 });
 module.exports = logger;
