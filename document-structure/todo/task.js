(() => {
    const btn = document.getElementById('tasks__add');
    btn.addEventListener('click', onClick);
    document.addEventListener('keydown', onEnter);
})()

function onClick(e) {
    const input = document.getElementById('task__input');
    if (input.value !== '') {
        e.preventDefault();
        const tasks__list = document.getElementById('tasks__list');
        const task = createTask(input.value);
        btnRemove = task.querySelector('.task__remove');
        btnRemove.addEventListener('click', removeTask);
    
        input.value = '';
        tasks__list.appendChild(task);
    }
}


function createTask(textTask) {
    const htmlTask = `
        <div class="task__title">${textTask}</div>
        <a href="#" class="task__remove">&times;</a>`;
    const div = document.createElement('div');

    div.className = 'task';
    div.innerHTML = htmlTask;

    return div;
}


function onEnter(e) {
    if (e.code === 'Enter' && e.target.value !== '') {
        const tasks__list = document.getElementById('tasks__list');
        const task = createTask(e.target.value);
        btnRemove = task.querySelector('.task__remove');
        btnRemove.addEventListener('click', removeTask);

        e.target.value = '';
        tasks__list.appendChild(task);
    }
}


function removeTask() {
    this.closest('.task').remove();
}