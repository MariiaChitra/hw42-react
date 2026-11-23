# Task Manager (HW_42)

A React single-page application built with Vite for managing daily tasks. This project demonstrates core React concepts including component composition, props passing, state management with `useState`, and derived state for filtering and statistics.

## Features

- **Task Display:** Renders a list of tasks with their current completion status.
- **Add Tasks:** Adds new tasks using predefined preset titles.
- **Status Toggle:** Mark tasks as completed (`✅ Completed`) or return them to active status (`⏳ In Progress`).
- **Delete Tasks:** Remove individual tasks, clear only completed tasks, or clear the entire list.
- **Task Filtering:** Filter the visible task list by **All** (`All`), **Active** (`In Progress`), or **Completed** (`Completed`) without mutating the underlying task data.
- **Live Statistics:** Displays total tasks and completed tasks calculated across all stored tasks.
- **Empty State Handling:** Displays contextual messages when the task list is completely empty (`No tasks yet`) or when a filter yields no matches (`No tasks match the selected filter`).

## Project Structure

```text
task-manager/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Application title and subtitle
│   │   ├── TaskStatistics.jsx  # Total and completed task counters
│   │   ├── TaskList.jsx        # Renders filtered tasks and empty state messages
│   │   ├── TaskItem.jsx        # Individual task card with toggle/delete actions
│   │   └── Footer.jsx          # Application footer
│   ├── data/
│   │   └── initialTasks.js     # Initial seed tasks and preset task titles
│   ├── App.jsx                 # Main component holding state and business logic
│   ├── App.css                 # Component and layout styling
│   └── main.jsx                # React DOM entry point
├── index.html
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation & Setup

1. Clone the repository or navigate into the project directory:
   ```bash
   cd task-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the local URL shown in your terminal (typically `http://localhost:5173`).

## Technologies Used

- **React 18+** (Functional Components, `useState` Hook)
- **Vite** (Build tool and dev server)
- **CSS3** (Custom styling with Flexbox)