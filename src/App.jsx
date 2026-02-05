import React, {useEffect, useState} from "react";
// import axios from "axios";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Setting";
import Orders from "./pages/Orders";
import Supprt from "./pages/Support";
import Products from "./pages/Products";
import Notification from "./pages/Notification";
import Users from "./pages/Users";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/Signup";
import ForgotPassword from "./pages/authentication/ForgetPassword";
import Analytics from "./pages/Analytics";



const App = () => {
  // const [data, setData] = useState("");
  //  useEffect(() => {
  //   axios.get("http://localhost:5000/api/hello")
  //     .then(res => setData(res.data.message))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <Router basename="/ReactAdminPanel">
  <Routes>

    {/* Public Pages */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />

    {/* Layout Route */}
    <Route path="/" element={<Dashboard />}>

      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="orders" element={<Orders />} />
      <Route path="support" element={<Supprt />} />
      <Route path="products" element={<Products />} />
      <Route path="users" element={<Users />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="notifications" element={<Notification />} />

    </Route>

  </Routes>
</Router>
  );
}

export default App;