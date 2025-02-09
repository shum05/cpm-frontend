import React, { useState } from 'react';
import UploadFile from './components/UploadFile';
import TaskTable from './components/TaskTable';
import GanttChart from './components/GanttChart';
import axios from 'axios';

function App() {
    const [tasks, setTasks] = useState([]);
    const [criticalPath, setCriticalPath] = useState([]);
    const [duration, setDuration] = useState(0);

    const handleUploadSuccess = (data) => {
        alert(`Critical Path: ${data.critical_path.join(" → ")}, Duration: ${data.duration} days`);

        const formattedTasks = data.critical_path.map(task => ({
            name: task,
            duration: 5, // Default duration (modify if needed)
            dependencies: []
        }));

        setTasks(formattedTasks);
        setCriticalPath(data.critical_path);
        setDuration(data.duration);
    };

    const calculateCriticalPath = async () => {
        if (tasks.length === 0) {
            alert("No tasks available. Please add tasks manually or upload a CSV file.");
            return;
        }

        try {
            const response = await axios.post("https://cpm-backend-kw0o.onrender.com/calculate", { tasks });
            setCriticalPath(response.data.critical_path);
            setDuration(response.data.duration);

            alert(`Critical Path: ${response.data.critical_path.join(" → ")}, Duration: ${response.data.duration} days`);
        } catch (error) {
            console.error("Error calculating critical path", error);
            alert("Failed to calculate critical path. Check the backend.");
        }
    };

    return (
        <div className="App">
            <h1>CPM Replacement Tool</h1>
            <UploadFile onUploadSuccess={handleUploadSuccess} />
            <TaskTable tasks={tasks} setTasks={setTasks} />

            {/* New Calculate Critical Path Button */}
            <button onClick={calculateCriticalPath}>Calculate Critical Path</button>

            {criticalPath.length > 0 && (
                <div>
                    <h2>Critical Path</h2>
                    <p>{criticalPath.join(" → ")}</p>
                    <p>Total Duration: {duration} days</p>
                </div>
            )}

            <GanttChart tasks={tasks} />
        </div>
    );
}

export default App;
