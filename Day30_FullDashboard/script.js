// Popup Login Form
const loginPopup = document.getElementById('loginPopup');
const loginBtn = document.getElementById('loginBtn');
const closeBtn = document.querySelector('.close');

// Show login popup
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginPopup.style.display = 'flex';
});

// Close popup
closeBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

// Close popup on outside click
window.addEventListener('click', (e) => {
    if (e.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});

// Profile Update Logic
const profileForm = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const displayName = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');

profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Update displayed user information
    const updatedName = nameInput.value;
    const updatedEmail = emailInput.value;

    if (updatedName) displayName.textContent = updatedName;
    if (updatedEmail) displayEmail.textContent = updatedEmail;

    // Clear input fields
    nameInput.value = '';
    emailInput.value = '';

    // Confirmation alert
    alert('Profile updated successfully!');
});


//add a form with field like post details (texts, images)
//write a script to handle form submission, creating new post object and adding it to an array of posts. display new post in the field including the user name of the logged in user

const container = document.querySelector('.posts-cont');
const form = document.getElementById('form');
let posts = []; // Array to store posts

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const postText = document.getElementById('post').value;
    const imageFile = document.getElementById('image').files[0];
    const loggedInUser = displayName.textContent; // Get the logged-in username
    
    // Create a new post object
    const newPost = {
        title,
        postText,
        imageURL: imageFile ? URL.createObjectURL(imageFile) : null,
        username: loggedInUser,
        timestamp: new Date().toLocaleString(),
    };

    // Add the new post to the posts array
    posts.push(newPost);

    // Render posts
    renderPosts();

    // Clear form inputs
    form.reset();
});

// Function to render posts
function renderPosts() {
    container.innerHTML = ''; // Clear the container
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');

        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.postText}</p>
            ${post.imageURL ? `<img src="${post.imageURL}" alt="Post Image" style="max-width: 100%; height: auto;">` : ''}
            <small>Posted by ${post.username} on ${post.timestamp}</small>
        `;
        
        container.appendChild(postElement);
    });
}
