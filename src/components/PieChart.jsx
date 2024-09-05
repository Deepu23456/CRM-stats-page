import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#fbbf24', '#f472b6', '#60a5fa', '#a78bfa', '#34d399'];

const MyPieChart = ({ data }) => {
  const pieData = data.map((item, index) => ({
    name: item.title.split(' ').slice(0, 2).join(' '),
    value: Math.floor(Math.random() * 400) + 100,
  }));

  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg transform transition-transform hover:scale-105">
      <h3 className="text-center text-2xl font-bold mb-4 text-white">Pie Chart</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyPieChart;
