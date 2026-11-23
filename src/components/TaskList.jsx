import TaskItem from "./TaskItem";

function TaskList({ tasks, totalTasksCount, onToggle, onDelete }) {
    if (totalTasksCount === 0) {
        return <p className="empty-message">No tasks yet</p>;
    }

    if (tasks.length === 0) {
        return <p className="empty-message">No tasks match the selected filter</p>;
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

export default TaskList;