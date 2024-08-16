document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.querySelector('.post-form');
    const postContainer = document.querySelector('.post-container');
    const notificationList = document.querySelector('.notification-list');

    postForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.querySelector('#post-title').value;
        const details = document.querySelector('#post-details').value;
        const userName = document.querySelector('#user-name').value;

        if (title && details && userName) {
            const newPost = createPostElement(title, details, userName);
            postContainer.prepend(newPost);
            postForm.reset();

            // Add a notification
            addNotification(`${userName} added a new post: ${title}`);
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
            <div class="comments-section" style="display: none;">
                <input class="comment-input" type="text" placeholder="Add a comment">
                <ul class="comment-list"></ul>
            </div>
        `;

        // Like button functionality
        const likeButton = postElement.querySelector('.like-button');
        const likeCountSpan = postElement.querySelector('.like-count');
        let likeCount = 0;

        likeButton.addEventListener('click', () => {
            likeCount++;
            likeCountSpan.textContent = `${likeCount} Likes`;
        });

        // Comment functionality
        const commentButton = postElement.querySelector('.comment-button');
        const commentsSection = postElement.querySelector('.comments-section');
        const commentInput = postElement.querySelector('.comment-input');
        const commentList = postElement.querySelector('.comment-list');
        let commentCount = 0;

        commentButton.addEventListener('click', () => {
            commentsSection.style.display = commentsSection.style.display === 'none' ? 'block' : 'none';
        });

        commentInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && commentInput.value.trim() !== '') {
                const comment = document.createElement('li');
                comment.textContent = commentInput.value;
                commentList.appendChild(comment);

                commentInput.value = '';
                commentCount++;
                postElement.querySelector('.comment-count').textContent = `${commentCount} Comments`;
            }
        });

        return postElement;
    }

    function addNotification(message) {
        const notification = document.createElement('li');
        notification.textContent = message;
        notification.classList.add('notification');
        notificationList.appendChild(notification);
    
        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
});
