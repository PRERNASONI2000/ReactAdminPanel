import React, {useEffect, useState} from "react";
// import axios from "axios";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Dashboard from "./layout/Dashboard";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Settings from "./pages/Setting";
import Resources from "./pages/Resources";
import Supprt from "./pages/Support";
import Courses from "./pages/Courses";
import Notification from "./pages/Notification";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import ContactForm from "./pages/Contactform";



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

    {/* Layout Route */}
    <Route path="/" element={<Dashboard />}>

      <Route index element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="settings" element={<Settings />} />
      <Route path="resources" element={<Resources />} />
      <Route path="support" element={<Supprt />} />
      <Route path="courses" element={<Courses />} />
      <Route path="notification" element={<Notification />} />
      <Route path="contact" element={<ContactForm />} />

    </Route>

  </Routes>
</Router>
  );
}

export default App;