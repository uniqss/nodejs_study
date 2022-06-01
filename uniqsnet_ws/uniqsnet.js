//这里面是偏底层一点的WEBSOCKET长连接的封装
const rconnector = require('./connector.js');
const rlistener = require('./listener.js');

class uniqsnet {
    constructor() {
        console.log("uniqs uniqsnet:constructor");
    }
    createConnector(session) {
        console.log("uniqs uniqsnet:createConnector");
        const c = new rconnector.connector(session);
        return c;
    }

    createListener() {
        console.log("uniqs uniqsnet:createListener");

    }

    test(str) {
        console.log("uniqs uniqsnet:test called ", str);
    }
}

uniqsnet.instance = new uniqsnet();
module.exports = uniqsnet.instance;
