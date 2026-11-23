import { useState } from "react";
import { initialTasks, presetTasks } from "./data/initialTasks";
import Header from "./components/Header";
import TaskStatistics from "./components/TaskStatistics";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all"); // "all" | "completed" | "active"
  const [presetIndex, setPresetIndex] = useState(0);

  // 1. Add task with preset text
  const handleAddTask = () => {
    const title = presetTasks[presetIndex % presetTasks.length];
    const newTask = {
      id: Date.now(),
      title: `${title} #${tasks.length + 1}`,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setPresetIndex(presetIndex + 1);
  };

  // 2. Delete a single task
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // 3. Toggle task completion status
  const handleToggleTask = (id) => {
    setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );
  };

  // 4. Clear all tasks
  const handleClearAll = () => {
    setTasks([]);
  };

  // 5. Bonus: Delete only completed tasks
  const handleDeleteCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  // Statistics (calculated across ALL tasks, not just filtered ones)
  const totalCount = tasks.length;
  const completedCount = tasks.filter((task) => task.completed).length;

  // ADV: Derived filtered list
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return true;
  });

  return (
      <div className="app-container">
        <Header />

        <main className="main-content">
          <TaskStatistics
              totalCount={totalCount}
              completedCount={completedCount}
          />

          {/* Action controls */}
          <div className="controls">
            <button className="btn btn-primary" onClick={handleAddTask}>
              + Add Task
            </button>
            <button
                className="btn btn-warning"
                onClick={handleDeleteCompleted}
                disabled={completedCount === 0}
            >
              Delete Completed
            </button>
            <button
                className="btn btn-danger"
                onClick={handleClearAll}
                disabled={totalCount === 0}
            >
              Clear All
            </button>
          </div>

          {/* ADV: Filter controls */}
          <div className="filters">
            <button
                className={`btn-filter ${filter === "all" ? "active" : ""}`}
                onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
                className={`btn-filter ${filter === "active" ? "active" : ""}`}
                onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
                className={`btn-filter ${filter === "completed" ? "active" : ""}`}
                onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>

          <TaskList
              tasks={filteredTasks}
              totalTasksCount={totalCount}
              onToggle={handleToggleTask}
              onDelete={handleDeleteTask}
          />
        </main>

        <Footer />
      </div>
  );
}

export default App;