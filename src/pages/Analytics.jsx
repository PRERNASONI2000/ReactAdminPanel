import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
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

const COLORS = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"];

const Analytics = () => {
  return (
    <div className="p-4 sm:p-6 space-y-6 w-full">

      <h1 className="text-xl sm:text-2xl font-bold">Analytics Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* User Activity */}
        <div className="bg-white p-4 rounded-xl shadow w-full">
          <h2 className="font-semibold mb-3">User Activity Trends</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="activeUsers" stroke="#6366f1" strokeWidth={2} />
                <Line type="monotone" dataKey="orders" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-white p-4 rounded-xl shadow w-full">
          <h2 className="font-semibold mb-3">Revenue Growth</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#6366f1" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Product Performance */}
        <div className="bg-white p-4 rounded-xl shadow w-full">
          <h2 className="font-semibold mb-3">Product Performance</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#f97316" radius={[6,6,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion */}
        <div className="bg-white p-4 rounded-xl shadow w-full">
          <h2 className="font-semibold mb-3">Conversion Rates</h2>
          <div className="h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={conversionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={5}
                  dataKey="value"
                  label
                >
                  {conversionData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Analytics;
