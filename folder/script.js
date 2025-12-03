const API_URL = "https://jsonplaceholder.typicode.com/todos";
const TODO_KEY = "savedTodos";
const container = document.getElementById("todoContainer");

// Fetch API and store first 20 todos
document.getElementById("fetchBtn").addEventListener("click", async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    const first20 = data.slice(0, 20);

    localStorage.setItem(TODO_KEY, JSON.stringify(first20));

    renderTodos();
});

// Load and render todos from LocalStorage
function renderTodos() {
    container.innerHTML = ""; // clear old UI

    const todos = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

    todos.forEach((todo) => {
        const div = document.createElement("div");
        div.className = "todo";

        div.innerHTML = `
            <div>
                <p><strong>${todo.title}</strong></p>
                <p>Status: <span class="completed">${todo.completed}</span></p>
            </div>
            <button onclick="deleteTodo(${todo.id})">Delete</button>
        `;

        container.appendChild(div);
    });
}

// Delete a todo (remove from localStorage)
function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

    // remove clicked todo
    const updated = todos.filter(todo => todo.id !== id);

    localStorage.setItem(TODO_KEY, JSON.stringify(updated));

    renderTodos(); // update UI instantly (no reload)
}

// Auto render on page load
renderTodos();
