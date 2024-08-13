document.addEventListener('DOMContentLoaded', () => {
    const updateForm = document.getElementById('update-form');
    const profileName = document.getElementById('profile-name');
    const profileEmail = document.getElementById('profile-email');
    const profilePic = document.getElementById('profile-pic');

    updateForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newName = document.getElementById('new-name').value;
        const newEmail = document.getElementById('new-email').value;
        const newPic = document.getElementById('new-pic').files[0];

        if (newName) {
            profileName.textContent = `Name: ${newName}`;
        }

        if (newEmail) {
            profileEmail.textContent = `Email: ${newEmail}`;
        }

        if (newPic) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target.result;
            }
            reader.readAsDataURL(newPic);
        }

        updateForm.reset();
    });
});
