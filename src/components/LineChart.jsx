import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const MyLineChart = ({ data }) => {
  const lineData = data.map((item, index) => ({
    name: `Day ${index + 1}`,
    uv: Math.floor(Math.random() * 400) + 100,
    pv: Math.floor(Math.random() * 300) + 100,
  }));

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
      <h3 className="text-center text-2xl font-bold mb-4 text-white">Line Chart</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={lineData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#fbbf24" strokeWidth={3} activeDot={{ r: 10 }} />
            <Line type="monotone" dataKey="pv" stroke="#60a5fa" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyLineChart;
