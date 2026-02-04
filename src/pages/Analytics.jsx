import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  BarChart, Bar, PieChart, Pie, Cell
} from "recharts";

const lineData = [
  { date: "01 Feb", activeUsers: 120, orders: 30 },
  { date: "02 Feb", activeUsers: 200, orders: 45 },
  { date: "03 Feb", activeUsers: 150, orders: 60 },
  { date: "04 Feb", activeUsers: 250, orders: 90 },
  { date: "05 Feb", activeUsers: 300, orders: 80 },
];

const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 8000 },
  { month: "Mar", revenue: 6000 },
  { month: "Apr", revenue: 10000 },
];

const productData = [
  { name: "Product A", sales: 400 },
  { name: "Product B", sales: 300 },
  { name: "Product C", sales: 500 },
];

const conversionData = [
  { name: "Visited", value: 1000 },
  { name: "Purchased", value: 250 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Analytics Dashboard</h1>

      {/* Total user activity trends */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-2">User Activity Trends</h2>
        <LineChart
          width={600}
          height={300}
          data={lineData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activeUsers" stroke="#8884d8" />
          <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* Revenue growth */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-2">Revenue Growth</h2>
        <BarChart width={600} height={300} data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Product performance */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-2">Product Performance</h2>
        <BarChart width={600} height={300} data={productData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#FF8042" />
        </BarChart>
      </div>

      {/* Conversion rates */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="font-semibold mb-2">Conversion Rates</h2>
        <PieChart width={400} height={300}>
          <Pie
            data={conversionData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label
          >
            {conversionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default Analytics;
