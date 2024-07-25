document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasksList = document.getElementById('tasks');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-task-btn"><i class="fas fa-check"></i></button>
                <button class="edit-task-btn"><i class="fas fa-edit"></i></button>
                <button class="delete-task-btn"><i class="fas fa-trash"></i></button>
            </div>
        `;

        tasksList.appendChild(taskItem);

        const completeTaskBtn = taskItem.querySelector('.complete-task-btn');
        const editTaskBtn = taskItem.querySelector('.edit-task-btn');
        const deleteTaskBtn = taskItem.querySelector('.delete-task-btn');

        completeTaskBtn.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        editTaskBtn.addEventListener('click', () => {
            const newTaskText = prompt('Editar tarea:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskItem.querySelector('span').textContent = newTaskText;
            }
        });

        deleteTaskBtn.addEventListener('click', () => {
            tasksList.removeChild(taskItem);
        });
    }
});
