import React, { useState } from 'react';
import UploadFile from './components/UploadFile';
import TaskTable from './components/TaskTable';
import GanttChart from './components/GanttChart';

function App() {
    const [tasks, setTasks] = useState([]);  // ✅ Define tasks state

    const handleUploadSuccess = (data) => {
        alert(`Critical Path: ${data.critical_path.join(" → ")}, Duration: ${data.duration} days`);
        setTasks(data.critical_path.map(task => ({ name: task, duration: 5, dependencies: [] })));
    };

    return (
        <div className="App">
            <h1>CPM Replacement Tool</h1>
            <UploadFile onUploadSuccess={handleUploadSuccess} />  {/* ✅ Upload CSV */}
            <TaskTable tasks={tasks} setTasks={setTasks} />  {/* ✅ Editable Task Table */}
            <GanttChart tasks={tasks} />  {/* ✅ Gantt Chart */}
        </div>
    );
}

export default App;
