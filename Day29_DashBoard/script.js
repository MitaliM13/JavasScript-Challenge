document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.querySelector('.post-form');
    const postContainer = document.querySelector('.post-container');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.querySelector('#post-title').value;
        const details = document.querySelector('#post-details').value;
        const userName = document.querySelector('#user-name').value;
        const userEmail = document.querySelector('#user-email').value;

        if (title && details && userName && userEmail) {
            const newPost = createPostElement(title, details, userName);
            postContainer.prepend(newPost);
            postForm.reset();
        }
    });

    function createPostElement(title, details, userName) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <div class="post-header">
                <img class="user-image" src="default-pic.jpg" alt="User Image">
                <div>
                    <h4 class="username">${userName}</h4>
                    <p class="timestamp">${new Date().toLocaleString()}</p>
                </div>
            </div>
            <div class="post-text">
                <h4>${title}</h4>
                <p>${details}</p>
            </div>
            <div class="post-actions">
                <button class="like-button">Like</button><span class="like-count">0 Likes</span>
                <button class="comment-button">Comment</button><span class="comment-count">0 Comments</span>
            </div>
        `;

        return postElement;
    }
    
    document.getElementById('profile-page-button').addEventListener('click', () => {
        window.location.href = 'profile.html';
    });
});
