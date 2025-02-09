import React, { useState } from 'react';
import UploadFile from './components/UploadFile';
import TaskTable from './components/TaskTable';
import GanttChart from './components/GanttChart';

function App() {
    const [tasks, setTasks] = useState([]);  // ✅ Define tasks state

    const handleUploadSuccess = (data) => {
      console.log("Received Data:", data); // ✅ Debugging log
  
      if (!data || !data.critical_path) {
          alert("Error: No tasks returned from backend.");
          return;
      }
  
      const formattedTasks = data.critical_path.map(task => ({
          name: task,
          duration: 5, // Default duration (modify if needed)
          dependencies: []
      }));
  
      console.log("Formatted Tasks:", formattedTasks); // ✅ Debugging log
      setTasks(formattedTasks);
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
