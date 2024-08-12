document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const taskContainer = document.querySelector('.tasks');

    const tasks = [];
    let editIndex = -1;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const detail = document.getElementById('details').value;
        const date = document.getElementById('date').value;

        const task = {
            title: title,
            detail: detail,
            date: date
        };

        if (editIndex === -1) {
            tasks.push(task);
        } else {
            tasks[editIndex] = task;
            editIndex = -1;
        }

        displayTasks(tasks);
        form.reset();
    });

    function displayTasks(taskArray) {
        taskContainer.innerHTML = '';

        taskArray.forEach((task, index) => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');

            taskElement.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.detail}</p>
                <p><small>Due: ${task.date}</small></p>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            taskContainer.appendChild(taskElement);
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', handleEditTask);
        });
        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', handleDeletedTask);
        });
    }


    function handleEditTask(e) {
        // Get the index of the task to edit
        editIndex = e.target.getAttribute('data-index');

        // Populate the form with task details
        const task = tasks[editIndex];
        document.getElementById('title').value = task.title;
        document.getElementById('details').value = task.detail;
        document.getElementById('date').value = task.date;

        // Scroll to the top to focus on the form
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleDeletedTask(e){
        const index = e.target.getAttribute('data-index')

        const confirmDelete = confirm("Are you sure you want to delete the task")

        if(confirmDelete){
            tasks.splice(index, 1)
            displayTasks(tasks)
        }
    }
});


//Add a "Delete" button to each task item in the task list. Write a function to remove the task frm the array and refresh the task list display when the"Delete" button is