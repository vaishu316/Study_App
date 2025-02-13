import React from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from "recharts";

const groupData = [
  { subject: "Aptitude", score: 85 },
  { subject: "Reasoning", score: 80 },
  { subject: "Math", score: 90 },
  { subject: "English", score: 75 },
];

const individualData = [
  { week: "Week 1", score: 65 },
  { week: "Week 2", score: 75 },
  { week: "Week 3", score: 85 },
  { week: "Week 4", score: 90 },
];

const pastelColors = ["#FFB6C1", "#ADD8E6", "#FFDAB9", "#C3E6CB"];

const leaderboard = () => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Leaderboard</h2>
      
      {/* Group Progress Bar Chart */}
      <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-gray-600">Group Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={groupData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#EAEAEA" />
            <XAxis dataKey="subject" tick={{ fill: "#6B7280" }} />
            <YAxis tick={{ fill: "#6B7280" }} />
            <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderRadius: "8px" }} />
            <Legend />
            <Bar dataKey="score" fill={pastelColors[0]} barSize={50} radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Individual Progress Line Chart */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2 text-gray-600">Individual Progress</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={individualData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#EAEAEA" />
            <XAxis dataKey="week" tick={{ fill: "#6B7280" }} />
            <YAxis tick={{ fill: "#6B7280" }} />
            <Tooltip contentStyle={{ backgroundColor: "#F8F9FA", borderRadius: "8px" }} />
            <Legend />
            <Line type="monotone" dataKey="score" stroke={pastelColors[1]} strokeWidth={3} dot={{ fill: pastelColors[2], r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default leaderboard;
