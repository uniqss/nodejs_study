const log4js = require("log4js");
log4js.configure({
    /*
    appenders: { file_log: { type: "file", filename: "cheese.log", pattern: ".yyyy-MM-dd" } },
    categories: { default: { appenders: ["file_log"], level: "trace", enableCallStack:true } },
     */


    appenders: {
        everything: { type: 'dateFile', filename: 'all-the-logs.log' }
    },
    categories: {
        default: { appenders: [ 'everything' ], level: 'debug', enableCallStack:true }
    },

    layout: {
        type: 'pattern',
        pattern: '%[%r (%x{pid}) %p %c %f %l -%] %m',
        tokens: {
            pid: function () { return process.pid; }
        }
    }
});

const logger = log4js.getLogger("everything");
logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");