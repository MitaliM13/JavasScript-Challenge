const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.isAlive = true;
    ws.username = null;

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'setUsername') {
            ws.username = data.username;
            broadcast({ type: 'notification', message: `${ws.username} has joined the chat` });
        } else if (data.type === 'message') {
            broadcast({ type: 'message', username: ws.username, message: data.message });
        }
    });

    ws.on('close', () => {
        if (ws.username) {
            broadcast({ type: 'notification', message: `${ws.username} has left the chat` });
        }
    });

    ws.on('pong', () => ws.isAlive = true);

    ws.send(JSON.stringify({ type: 'notification', message: 'Welcome to the chat! Please set your username.' }));
});

function broadcast(data) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(data));
        }
    });
}

setInterval(() => {
    wss.clients.forEach((ws) => {
        if (!ws.isAlive) return ws.terminate();

        ws.isAlive = false;
        ws.ping();
    });
}, 30000);

console.log('WebSocket server is running on ws://localhost:8080');
