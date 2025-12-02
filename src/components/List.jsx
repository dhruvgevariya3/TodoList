import { useState } from "react";

export default function List() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center ">Todo List</h2>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <ul className="mt-4">
        {tasks.map((t) => (
          <li
            key={t.id}
            className="flex items-center justify-between py-2 border-b"
          >
            <span
              className={`cursor-pointer ${
                t.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {t.text}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => toggleComplete(t.id)}
                className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Done
              </button>

              <button
                onClick={() => removeTask(t.id)}
                className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
