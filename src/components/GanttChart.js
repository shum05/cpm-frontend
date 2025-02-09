import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const GanttChart = ({ tasks }) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={tasks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="duration" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default GanttChart;
