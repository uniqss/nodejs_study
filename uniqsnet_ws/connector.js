const rconnection = require('./connection.js');
// const utils = require('../utils.js');

class connector {
    constructor(session) {
        this.connected = false;

        this.m_session = session;
        this.m_bConnecting = false;
        this.m_strIp = '';
        this.m_wPort = 0;
        this.wsclient = null;
        this.connecturl = null;
    }
    setwssconnecturl(url){this.connecturl = url;}

    connect(strIp, wPort) {
        console.log(`uniqs connector::connect strIp:${strIp} wPort:${wPort}`);
        if (this.m_session == undefined) {
            console.log(`uniqs connector::connect this.m_session == undefined strIp:${strIp} wPort:${wPort}`);
            return false;
        }

        this.m_strIp = strIp;
        this.m_wPort = wPort;

        const conn = new rconnection.connection();
        this.m_session.setConnection(conn);
        conn.init(this.m_session);

        return this.reconnect();
    }

    reconnect() {
        console.log(`uniqs connector::reconnect strIp:${this.m_strIp} wPort:${this.m_wPort}`);
        if (this.m_strIp === undefined || this.m_strIp === '') {
            console.log(`uniqs connector::reconnect m_strIp error. ${this.m_strIp}`);
            return false;
        }

        if (this.m_bConnecting) {
            return false;
        }

        this.m_bConnecting = true;

        //this.wsclient = new WebSocket("wss://echo.websocket.org", [], this.wssCacert.url);
        let wsclient = null;
        // wss
        if (1 == 0){
            wsclient = new WebSocket("wss://" + this.m_strIp + ":" + this.m_wPort , [], this.connecturl);
        } else {
            websocketurl = "ws://" + this.m_strIp + ":" + this.m_wPort;
            wsclient = new WebSocket(websocketurl);
            console.log("websocketurl:", websocketurl);
            // wsclient = new WebSocket("ws://echo.websocket.org:80");
        }
        //var wsclient = new WebSocket("wss://" + this.m_strIp + ":" + this.m_wPort);
        wsclient.binaryType = "arraybuffer";
        wsclient.connector = this;
        this.m_session.getConnection().wsclient = wsclient;

        wsclient.onopen = function(evt) {
            console.log("uniqs connector.js wsclient.onopen evt:", evt);
            wsclient.connector.m_bConnecting = false;
            wsclient.connector.m_session.onEstablish();
            wsclient.connector.m_session.getConnection().setConnected(true);
        };

        wsclient.onmessage = function(evt) {
            console.log("uniqs connector.js wsclient.onmessage evt.data:", evt.data);
            const binary = new Uint8Array(evt.data);
            // var binary = utils.stringToUint8Array(evt.data);
            wsclient.connector.m_session.onRecv(binary);
            const binaryStr = 'response bin msg: ';

            // var str = '';
            // for (var i = 0; i < binary.length; i++) {
            //     if (binary[i] === 0)
            //     {
            //         str += "\'\\0\'";
            //     }
            //     else
            //     {
            //         var hexChar = '0x' + binary[i].toString('16').toUpperCase();
            //         str += String.fromCharCode(hexChar);
            //     }
            // }

            // binaryStr += str;
            // console.log("uniqs connector.js wsclient.onmessage ", binaryStr);
        };

        wsclient.onerror = function(evt) {
            console.log("uniqs connector.js wsclient.onerror ", evt.data);
            wsclient.connector.m_session.onError(evt.data);
        };

        wsclient.onclose = function(evt) {
            console.log("uniqs connector.js wsclient.onclose ", evt.data);
            wsclient.connector.m_session.onTerminate(evt.data);
            wsclient = null;
        };
    }
}

module.exports = {
    connector
}
