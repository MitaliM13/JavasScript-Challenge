const ws = new WebSocket('ws://localhost:8080');

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');
const usernameInput = document.getElementById('usernameInput');

let username = '';

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'notification') {
        displayNotification(data.message);
    } else if (data.type === 'message') {
        displayMessage(data.username, data.message);
    }
};

sendButton.onclick = () => {
    const message = messageInput.value;
    ws.send(JSON.stringify({ type: 'message', message }));
    messageInput.value = '';
};

usernameInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        setUsername();
    }
});

function setUsername() {
    username = usernameInput.value.trim();
    if (username) {
        ws.send(JSON.stringify({ type: 'setUsername', username }));
        usernameInput.disabled = true;
        messageInput.disabled = false;
        sendButton.disabled = false;
        messageInput.focus();
    }
}

function displayMessage(user, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="username">${user}:</span> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function displayNotification(notification) {
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification');
    notificationElement.textContent = notification;
    chatBox.appendChild(notificationElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}