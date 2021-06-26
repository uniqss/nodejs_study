const log4js = require('log4js');

log4js.configure({
    appenders: {
        appender_console: {
            type: 'console',
            layout: {
                type: 'pattern',
                //pattern: '%[%r (%x{pid}) %p %c %f %l -%] %m',
                pattern: '%[%r (%x{pid}) %p%] %m',
                tokens: {
                    pid: function () {
                        return process.pid;
                    }
                }
            }
        },
        appender_file: {
            type: 'dateFile',
            filename: "ulog.log",
            pattern: '.yyyy-MM-dd-hh',
            layout: {
                type: 'pattern',
                //pattern: '%[%r (%x{pid}) %p %c %f %l -%] %m',
                pattern: '[%r (%x{pid}) %p] %m',
                tokens: {
                    pid: function () {
                        return process.pid;
                    }
                }
            }
        }
    },
    categories: {
        default: {appenders: ['appender_console', 'appender_file'], level: 'debug', enableCallStack: true}
    },
});


const log4js_extend = require("log4js-extend");

log4js_extend(log4js, {
    path: __dirname,
    format: "[bt @name @file:@line:@column]"
});

const ulog = log4js.getLogger('app');
ulog.info('Test log message');
ulog.debug('Test log message');

module.exports = ulog;

