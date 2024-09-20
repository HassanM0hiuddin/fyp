"use client";

import React, { useState } from 'react';
import { BarChart, Bar, PieChart, Pie, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const Page = () => {
  const [stats, setStats] = useState({
    totalPatients: 800000,
    totalDoctors: 160,
    totalAppointments: 600000,
    totalEarnings: 70000,
  });

  const [topDoctors, setTopDoctors] = useState([
    { name: 'Dr. Thomas White', department: 'Cardiology', reviews: 216 },
    { name: 'Dr. Emilia Williamson', department: 'Surgery', reviews: 200 },
    { name: 'Dr. Justine Hextall', department: 'Neurology', reviews: 180 },
    { name: 'Dr. Dianne Russell', department: 'Pharmacy', reviews: 50 },
    { name: 'Dr. Kristin Watson', department: 'Psychiatry', reviews: 25 },
  ]);

  const patientOverviewData = [
    { month: 'Jan', Hospitalized: 2000, Recovered: 1000 },
    { month: 'Feb', Hospitalized: 3000, Recovered: 1500 },
    { month: 'Mar', Hospitalized: 2500, Recovered: 2000 },
    { month: 'Apr', Hospitalized: 3200, Recovered: 2200 },
    { month: 'May', Hospitalized: 3400, Recovered: 1800 },
    { month: 'Jun', Hospitalized: 3900, Recovered: 2600 },
  ];

  const earningsData = [
    { day: 'Sat', Income: 5000, Expense: 3000 },
    { day: 'Sun', Income: 4000, Expense: 2500 },
    { day: 'Mon', Income: 4500, Expense: 2000 },
    { day: 'Tue', Income: 4700, Expense: 2100 },
    { day: 'Wed', Income: 4800, Expense: 2200 },
    { day: 'Thu', Income: 5000, Expense: 3000 },
    { day: 'Fri', Income: 5100, Expense: 3500 },
  ];

  const topDepartmentsData = [
    { name: 'Surgery', value: 400 },
    { name: 'Cardiology', value: 300 },
    { name: 'Neurology', value: 200 },
    { name: 'Medicine', value: 100 },
  ];

  return (
    <div className="container mt-5">
      {/* Stats Row */}
      <div className="row text-center mb-4">
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Total Patients</h4>
            <p className="h2">{stats.totalPatients.toLocaleString()}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Total Doctors</h4>
            <p className="h2">{stats.totalDoctors}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Total Appointments</h4>
            <p className="h2">{stats.totalAppointments.toLocaleString()}</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-3 shadow">
            <h4>Total Earnings</h4>
            <p className="h2">${stats.totalEarnings.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="row mb-4">
        {/* Patient Overview */}
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow">
            <h4>Patient Overview</h4>
            <BarChart width={500} height={300} data={patientOverviewData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Hospitalized" fill="#8884d8" />
              <Bar dataKey="Recovered" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>

        {/* Top Departments */}
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow">
            <h4>Top Departments</h4>
            <PieChart width={400} height={300}>
              <Pie dataKey="value" isAnimationActive={false} data={topDepartmentsData} cx={200} cy={150} outerRadius={80} fill="#8884d8" label />
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </div>

      {/* Earnings Row */}
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow">
            <h4>Earnings</h4>
            <BarChart width={500} height={300} data={earningsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Income" fill="#8884d8" />
              <Bar dataKey="Expense" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>

        {/* Top Doctors */}
        <div className="col-md-6 mb-3">
          <div className="card p-3 shadow">
            <h4>Top Doctors</h4>
            <ul className="list-group">
              {topDoctors.map((doctor, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>#{index + 1}</strong> {doctor.name} - {doctor.department}
                  </div>
                  <span className="badge bg-primary">{doctor.reviews} Reviews</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
