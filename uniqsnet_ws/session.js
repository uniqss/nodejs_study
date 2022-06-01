const connection = require('./connection.js');

class session {
    constructor() {
        this.m_connection = undefined;
        this.m_nSessionId = -1;
    }

    setConnection(conn) {
        this.m_connection = conn;
    }

    onEstablish() {
        console.log(`uniqs session::onEstablish `);
    }
    onTerminate(info) {
        console.log(`uniqs session::onTerminate info:${info}`);
    }
    onError(info) {
        console.log(`uniqs session::onTerminate info:${info}`);
    }
    onRecv(data) {
        console.log(`uniqs session::onRecv data:${data}`);
    }

    release() {
        
    }

    getSessionId() {return this.m_nSessionId;}
    setSessionId(sessionId) {this.m_nSessionId = sessionId;}
    getConnection() {return this.m_connection;}
}

module.exports = {
    session
}