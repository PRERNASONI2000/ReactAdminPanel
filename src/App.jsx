import React, {useEffect, useState} from "react";
import axios from "axios";
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
  const [data, setData] = useState("");
   useEffect(() => {
    axios.get("http://localhost:5000/api/hello")
      .then(res => setData(res.data.message))
      .catch(err => console.error(err));
  }, []);
  return (
     <Router>
      <Routes>
        {/* Public Pages (without sidebar/footer/navbar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Pages (with Dashboard layout) */}
        <Route
          path="/*"
          element={
            <Dashboard>
              
    <h1>{data}</h1>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/support" element={<Supprt />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/contact" element={<ContactForm />} />
              </Routes>
            </Dashboard>
          }
        />
      </Routes>
    </Router>
    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <h1 className="text-4xl font-bold text-blue-600">Hello, World!</h1>
    //   <Sidebar />
    // </div>
  );
}

export default App;