import React, { useState } from 'react';

const TaskTable = ({ tasks, setTasks }) => {
    const [newTask, setNewTask] = useState({ name: "", duration: "", dependencies: "" });

    const handleInputChange = (e) => {
        setNewTask({ ...newTask, [e.target.name]: e.target.value });
    };

    const handleAddTask = () => {
        if (!newTask.name || !newTask.duration) {
            alert("Task name and duration are required.");
            return;
        }

        setTasks([
            ...tasks,
            {
                name: newTask.name,
                duration: parseInt(newTask.duration),
                dependencies: newTask.dependencies ? newTask.dependencies.split(",").map(dep => dep.trim()) : []
            }
        ]);

        setNewTask({ name: "", duration: "", dependencies: "" }); // Clear input fields after adding task
    };

    return (
        <div>
            <h2>Task List</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Duration (days)</th>
                        <th>Dependencies</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.name}</td>
                                <td>{task.duration}</td>
                                <td>{task.dependencies.length > 0 ? task.dependencies.join(", ") : "-"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No tasks added yet</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {/* Manual Task Input Form */}
            <h3>Add New Task</h3>
            <input
                type="text"
                name="name"
                placeholder="Task Name"
                value={newTask.name}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="duration"
                placeholder="Duration (days)"
                value={newTask.duration}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="dependencies"
                placeholder="Dependencies (comma-separated)"
                value={newTask.dependencies}
                onChange={handleInputChange}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskTable;
