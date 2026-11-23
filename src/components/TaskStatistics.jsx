function TaskStatistics({ totalCount, completedCount }) {
    return (
        <section className="statistics">
            <div className="stat-card">
                <span className="stat-label">Total tasks:</span>
                <span className="stat-value">{totalCount}</span>
            </div>
            <div className="stat-card">
                <span className="stat-label">Completed:</span>
                <span className="stat-value">{completedCount}</span>
            </div>
        </section>
    );
}

export default TaskStatistics;