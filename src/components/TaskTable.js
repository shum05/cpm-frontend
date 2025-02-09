import React from 'react';

const TaskTable = ({ tasks }) => {
    console.log("Rendering TaskTable with tasks:", tasks); // ✅ Debugging log

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
                    {tasks && tasks.length > 0 ? (
                        tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.name}</td>
                                <td>{task.duration}</td>
                                <td>{task.dependencies.length > 0 ? task.dependencies.join(", ") : "-"}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No tasks uploaded yet</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
