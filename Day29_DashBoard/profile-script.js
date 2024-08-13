// Load user information from localStorage or sessionStorage
window.addEventListener('load', () => {
    const storedName = localStorage.getItem('username') || 'Default Name';
    const storedEmail = localStorage.getItem('email') || 'email@example.com';
    const storedPic = localStorage.getItem('profilePic') || 'default-pic.jpg';

    document.getElementById('profile-name').textContent = `Name: ${storedName}`;
    document.getElementById('profile-email').textContent = `Email: ${storedEmail}`;
    document.getElementById('profile-pic').src = storedPic;
});

// Handle profile update form submission
document.getElementById('update-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const newName = document.getElementById('new-name').value;
    const newEmail = document.getElementById('new-email').value;
    const newPicFile = document.getElementById('new-pic').files[0];

    if (newName) {
        localStorage.setItem('username', newName);
        document.getElementById('profile-name').textContent = `Name: ${newName}`;
    }

    if (newEmail) {
        localStorage.setItem('email', newEmail);
        document.getElementById('profile-email').textContent = `Email: ${newEmail}`;
    }

    if (newPicFile) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const newPic = event.target.result;
            localStorage.setItem('profilePic', newPic);
            document.getElementById('profile-pic').src = newPic;
        };
        reader.readAsDataURL(newPicFile);
    }

    // Clear the form fields
    document.getElementById('new-name').value = '';
    document.getElementById('new-email').value = '';
    document.getElementById('new-pic').value = '';
});
