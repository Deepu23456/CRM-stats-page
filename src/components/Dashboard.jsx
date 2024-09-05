import React, { useState, useEffect } from 'react';
import MyPieChart from './PieChart';
import MyLineChart from './LineChart';

const Dashboard = ({ selectedFilter }) => {
  const [data, setData] = useState([]); // State for storing data
  
  useEffect(() => {
    // Fetching data from dummy API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        if (selectedFilter === '1 Day') {
          setData(data.slice(0, 5));
        } else if (selectedFilter === '1 Week') {
          setData(data.slice(0, 10));
        } else {
          setData(data.slice(0, 20));
        }
      });
  }, [selectedFilter]);

  return (
    <div className="p-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-purple-400 drop-shadow-lg transition-colors duration-300">
          Showing Data for: <span className="text-blue-500">{selectedFilter}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <MyLineChart data={data} />
        <MyPieChart data={data} />
      </div>
    </div>
  );
};

export default Dashboard;
