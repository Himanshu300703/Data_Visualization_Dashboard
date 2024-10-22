import React, { useEffect, useState } from 'react';
import { Pie, Line, Scatter } from 'react-chartjs-2';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/data');
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const pieData = {
    labels: ['Energy', 'Environment', 'Market', 'Government'],
    datasets: [
      {
        label: 'Sector Distribution',
        data: [
          data.filter(item => item.sector === 'Energy').length,
          data.filter(item => item.sector === 'Environment').length,
          data.filter(item => item.sector === 'Market').length,
          data.filter(item => item.sector === 'Government').length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const lineData = {
    labels: data.map(item => item.published.split(' ')[0]),
    datasets: [
      {
        label: 'Published Insights Over Time',
        data: data.map(item => item.intensity),
        fill: false,
        borderColor: '#742774',
        tension: 0.1,
      },
    ],
  };

  const scatterData = {
    datasets: [
      {
        label: 'Insights',
        data: data.map(item => ({
          x: item.relevance,
          y: item.intensity,
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Interactive Dashboard</h2>

      <div style={{ margin: '20px 0' }}>
        <h3>Sector Distribution (Pie Chart)</h3>
        <Pie data={pieData} options={{ maintainAspectRatio: false }} />
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Published Insights Over Time (Line Graph)</h3>
        <Line data={lineData} options={{ maintainAspectRatio: false }} />
      </div>

      <div style={{ margin: '20px 0' }}>
        <h3>Insights Scatter Plot</h3>
        <Scatter data={scatterData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default Dashboard;
