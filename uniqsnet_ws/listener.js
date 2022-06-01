
class listener {
    constructor(session) {
        this.connected = false;

        this.m_session = session;
        this.m_bConnecting = false;
        this.m_strIp = '';
        this.m_wPort = 0;
    }

    listen(strIp, wPort) {
        console.log(`uniqs listener::listen strIp:${strIp} wPort:${wPort}`);

    }
}

module.exports = {
    listener
}
