import React, { useContext } from "react";
import { Sun, Moon, LogOut, User, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // future auth use ke liye
    navigate("/login");
  };

  return (
    <header className="h-14 px-4 flex justify-end items-center shadow bg-base-300 text-base-content border-b border-base-content/10">
      
      {/* Page Title */}
      {/* <h1 className="text-lg font-semibold">Admin Dashboard</h1> */}

      <div className="flex items-right gap-2">
        
        {/* Notification */}
        <button className="btn btn-ghost btn-circle">
          <Bell size={20} />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
        >
          {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <User size={22} />
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-40"
          >
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="text-red-500">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
