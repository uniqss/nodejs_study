
class connection {
    constructor() {
        this.m_session = undefined;
        this.m_bIsConnected = false;
    }

    isConnected() { return this.m_bIsConnected; }
    init(session) {
        console.log("uniqs connection:init");
        this.m_session = session;
    }
    close() {
        console.log("uniqs connection:close");
    }
    send(data) {
        if (this.wsclient == null || this.wsclient == undefined) {
            console.log("uniqs connection:send this.wsclient null");
            return;
        }
        if (this.wsclient.readyState == WebSocket.OPEN) {
            console.log("uniqs connection:send " + data);
            this.wsclient.send(data);
        } else {
            console.log("uniqs connection:send this.wsclient.readyState:" + this.wsclient.readyState);
        }
    }
    sendJsonObj(msgId, jsonobj) {
        if (this.wsclient == null || this.wsclient == undefined) {
            console.log("uniqs connection:send this.wsclient null");
            return;
        }
        if (this.wsclient.readyState == WebSocket.OPEN) {
            const jsonStr = JSON.stringify(jsonobj);
            console.log(jsonStr);
            const jsonobjWrapped = {"_": msgId, "data": jsonStr};
            const jsonStrWrapped = JSON.stringify(jsonobjWrapped);
            console.log("uniqs connection:send " + jsonStrWrapped);
            this.wsclient.send(jsonStrWrapped);
        } else {
            console.log("uniqs connection:send this.wsclient.readyState:" + this.wsclient.readyState);
        }
    }
    setConnected(bConnected) { this.m_bIsConnected = bConnected; }
    getSession() { return this.m_session; }
}

module.exports = {
    connection
}
