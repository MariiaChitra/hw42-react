function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-info">
                <span className="task-title">{task.title}</span>
                <span className="task-status">
                    {task.completed ? "✅ Completed" : "⏳ In Progress"}
                </span>
            </div>

            <div className="task-actions">
                <button
                    className="btn btn-toggle"
                    onClick={() => onToggle(task.id)}
                >
                    {task.completed ? "Undo" : "Complete"}
                </button>
                <button
                    className="btn btn-delete"
                    onClick={() => onDelete(task.id)}
                    disabled={!task.completed}
                >
                    Delete
                </button>
            </div>
        </li>
    );
}

export default TaskItem;