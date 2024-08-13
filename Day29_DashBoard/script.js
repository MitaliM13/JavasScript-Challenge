document.querySelector('.post-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('post-title').value;
    const details = document.getElementById('post-details').value;
    const username = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;

    // Store user information in localStorage
    if (username && email) {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
    }

    // Handle adding a new post
    if (title && details) {
        const postContainer = document.querySelector('.post-container');
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `<h4>${title}</h4><p>${details}</p>`;
        postContainer.appendChild(newPost);

        document.getElementById('post-title').value = '';
        document.getElementById('post-details').value = '';
    }

    // Handle updating the user information sidebar
    if (username && email) {
        const userContainer = document.querySelector('.sidebar');
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.innerHTML = `<h4>Name: ${username}</h4><p>Email: ${email}</p>`;
        userContainer.appendChild(userInfo);

        document.getElementById('user-name').value = '';
        document.getElementById('user-email').value = '';
    }
});

// Go to profile page
document.getElementById('profile-page-button').addEventListener('click', () => {
    window.location.href = 'profile.html';
});

// Load user information from localStorage when the page loads
window.addEventListener('load', () => {
    const storedName = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');

    if (storedName && storedEmail) {
        const userContainer = document.querySelector('.sidebar');
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.innerHTML = `<h4>Name: ${storedName}</h4><p>Email: ${storedEmail}</p>`;
        userContainer.appendChild(userInfo);
    }
});
