const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Usar URL relativa para o backend no mesmo domínio ou configurar proxy no Nginx
const API_URL = 'http://localhost:3000/api/tasks';

async function fetchTasks() {
    try {
        const res = await fetch(API_URL);
        const tasks = await res.json();
        taskList.innerHTML = '';
        tasks.forEach(addTaskToDOM);
    } catch (err) {
        console.error('Erro ao buscar tarefas:', err);
    }
}

function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.className = task.completed ? 'completed' : '';
    li.dataset.id = task.id;

    const span = document.createElement('span');
    span.textContent = task.title;

    const actions = document.createElement('div');
    actions.className = 'actions';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔️';
    completeBtn.className = 'complete';
    completeBtn.onclick = () => toggleComplete(task);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => deleteTask(task);

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    taskList.appendChild(li);
}

taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = taskInput.value.trim();
    if (!title) return;

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title })
        });
        const newTask = await res.json();
        addTaskToDOM(newTask);
        taskInput.value = '';
    } catch (err) {
        console.error('Erro ao adicionar tarefa:', err);
    }
});

async function toggleComplete(task) {
    try {
        await fetch(`${API_URL}/${task.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed: !task.completed })
        });
        fetchTasks();
    } catch (err) {
        console.error('Erro ao atualizar tarefa:', err);
    }
}

async function deleteTask(task) {
    try {
        await fetch(`${API_URL}/${task.id}`, { method: 'DELETE' });
        fetchTasks();
    } catch (err) {
        console.error('Erro ao deletar tarefa:', err);
    }
}

fetchTasks();