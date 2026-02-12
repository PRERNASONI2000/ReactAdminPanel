import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getDashboardStats, getChartData, getRecentActivity } from "../api/dashboardApi";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import CountUp from "react-countup";

const Home = () => {
 const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token){
   navigate("/login")
    }
  },[])

  const [stats, setStats] = useState(null);
const [chartData, setChartData] = useState([]);
const [activity, setActivity] = useState([]);

useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) navigate("/login");

  getDashboardStats().then(setStats);
  getChartData().then(setChartData);
  getRecentActivity().then(setActivity);
}, []);


//   const chartData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
//   { name: "Apr", sales: 4500 },
//   { name: "May", sales: 6000 },
//   { name: "Jun", sales: 5500 },
// ];

  return (
    <div className="w-full">
  {/* Top Stats Cards */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

  {/* Total Users */}
  <div className="stat shadow">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title text-black font-medium text-sm">Total Users</div>
    <div className="stat-value text-primary">
      <CountUp end={stats?.users || 0} />
    </div>
  </div>

  {/* Total Products */}
  <div className="stat shadow">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0l-8 8-8-8"
        />
      </svg>
    </div>
    <div className="stat-title text-black font-medium text-sm">Total Products</div>
    <div className="stat-value text-primary">
      <CountUp end={stats?.products || 0} />
    </div>
  </div>

  {/* Orders */}
  <div className="stat shadow">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7h18M3 12h18M3 17h18"
        />
      </svg>
    </div>
    <div className="stat-title text-black font-medium text-sm">Orders</div>
    <div className="stat-value text-primary">
      <CountUp end={stats?.orders || 0} duration={2} separator="," />
    </div>
  </div>

  {/* Revenue */}
  <div className="stat shadow">
    <div className="stat-figure text-primary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-3.866 0-7 1.343-7 3s3.134 3 7 3 7-1.343 7-3-3.134-3-7-3zm0 6v6"
        />
      </svg>
    </div>
    <div className="stat-title text-black font-medium text-sm">Revenue</div>
    <div className="stat-value text-primary">
      ₹<CountUp end={stats?.revenue || 0} duration={2} separator="," />
    </div>
  </div>

</div>


  {/* Charts + Activity Section */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    {/* Chart Section */}
    <div className="lg:col-span-2 bg-base-100 p-6 rounded-xl shadow">
      <h3 className="font-semibold mb-4">Sales Overview</h3>
      <div className="h-64 flex justify-center items-center text-gray-400">
         <ResponsiveContainer width="100%" height="100%">
    <LineChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="sales" stroke="#6366f1" strokeWidth={3} />
    </LineChart>
  </ResponsiveContainer>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="card bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Recent Activity</h2>
      {/* <span className="text-xl">$29/mo</span> */}
    </div>
    {activity.map((item, index) => (
  <li key={index}>{item}</li>
))}
  </div>
</div>

  </div>
</div>

  );
}

export default Home;