import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const GanttChart = ({ tasks }) => {
    // Convert tasks into chart-friendly format
    const chartData = tasks.map((task, index) => ({
        name: task.name,
        duration: task.duration,
        index: index + 1
    }));

    return (
        <div>
            <h2>Gantt Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="duration" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default GanttChart;
