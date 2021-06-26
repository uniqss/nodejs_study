const log4js = require('log4js');

log4js.configure({
    appenders: {
        appender_console: {
            type: 'console',
            layout: {
                type: 'pattern',
                //pattern: '%[%r (%x{pid}) %p %c %f %l -%] %m',
                pattern: '%[%r (%x{pid}) %p %f %l -%] %m',
                tokens: {
                    pid: function () {
                        return process.pid;
                    }
                }
            }
        },
        appender_file: {
            type: 'file',
            filename: "ulog.log",
            layout: {
                type: 'pattern',
                //pattern: '%[%r (%x{pid}) %p %c %f %l -%] %m',
                pattern: '[%r (%x{pid}) %p %f %l] %m',
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

const ulog = log4js.getLogger('app');
ulog.info('Test log message');
ulog.debug('Test log message');

module.exports = ulog;

