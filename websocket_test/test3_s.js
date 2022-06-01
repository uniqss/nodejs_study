const WebSocket = require('ws');

function heartbeat(ws) {
    this.isAlive = true;
    console.log(`heartbeat ip:${this.ip}, port:${this.port} ws.clientName:${this.clientName}`);
}

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {
    ws.isAlive = true;
    ws.on('pong', heartbeat);

    const ip = req.socket.remoteAddress;
    const port = req.socket.remotePort;
    const clientName = `${ip}_${port}`;
    ws.clientName = clientName;

    ws.on('message', function incoming(message) {
        console.log('received: %s from %s', message, clientName);

        // 广播消息给所有客户端
        const csize = wss.clients.size;
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(clientName + " " + csize + " -> " + message);
            }
        });
    });

    ws.on('close', function onclose(ws, code, reason) {
        console.log(`onclose: code:${code} reason:${reason} ip:${ip} port:${port}`);
    });

    ws.on('error', function onerror(ws, err) {
        console.log(`onerror: ${err}`);
    })

});

const interval = setInterval(function ping() {
    wss.clients.forEach(function each(ws) {
        if (ws.isAlive === false) return ws.terminate();

        ws.isAlive = false;
        ws.ping();
    });
}, 30000);

wss.on('close', function close() {
    console.log('on close');
    clearInterval(interval);
});
