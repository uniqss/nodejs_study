const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080,  });

server.on('open', function open() {
  console.log('connected');
});

server.on('close', function close() {
  console.log('disconnected');
});

server.on('error', function error(err) {
  console.log(`error ${err}`);
});

server.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;
  const port = req.socket.remotePort;
  const clientName = `${ip}_${port}`;

  console.log('%s is connected', clientName);

  // 发送欢迎信息给客户端
  ws.send("Welcome " + clientName);

  ws.on('message', function incoming(message) {
    console.log('received: %s from %s', message, clientName);

    // 广播消息给所有客户端
    const csize = server.clients.size;
    server.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(clientName + " " + csize + " -> " + message);
      }
    });

  });

});
