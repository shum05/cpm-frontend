import React from 'react';

const TaskTable = ({ tasks, setTasks }) => {
    const handleEdit = (index, field, value) => {
        const updatedTasks = [...tasks];
        updatedTasks[index][field] = value;
        setTasks(updatedTasks);
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
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>
                                <input
                                    type="number"
                                    value={task.duration}
                                    onChange={(e) => handleEdit(index, "duration", parseInt(e.target.value))}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    value={task.dependencies.join(", ")}
                                    onChange={(e) => handleEdit(index, "dependencies", e.target.value.split(", "))}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
