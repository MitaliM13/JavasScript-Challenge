document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('form')
   const taskContainer = document.querySelector('.tasks')

   form.addEventListener('submit', (e) => {
        e.preventDefault()

        const title = document.getElementById('title').value;
        const detail = document.getElementById('details').value;
        const date = document.getElementById('date').value;

        const task = {
            title: title,
            detail: detail,
            date: date
        }

        addTask(task)

        form.reset()
   })
   function addTask(task){
    const taskELement = document.createElement('div')
    taskELement.classList.add('task')

    taskELement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.detail}</p>
        <p><small>Due: ${task.date}</small></p>
    `

    taskContainer.appendChild(taskELement)
}
})