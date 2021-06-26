
const log4js = require("log4js");
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "trace" } },
    "layout": {
        "type": "pattern",
        "pattern": "%[[%p]%] - %18.100f : %7.12l - %[%m%]"
    }
});

const log4js_extend = require("log4js-extend");

log4js_extend(log4js, {
    path: __dirname,
    format: "at @name (@file:@line:@column)"
});

const ulog = log4js.getLogger("category");
ulog.info("test");

// setInterval(function (){
//     ulog.info("world hello.");
// },1000);

module.exports = ulog;
