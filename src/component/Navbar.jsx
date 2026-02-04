import React, { useContext } from "react";
import { Sun, Moon, LogOut, User, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  
    const notifications = [
    {
      id: 1,
      title: "New comment on your post",
      type: "comment",
      time: "2h ago",
      rating: 4,
    },
    {
      id: 2,
      title: "New follower: John Doe",
      type: "user",
      time: "5h ago",
      rating: 5,
    },
    {
      id: 3,
      title: "Subscription expiring soon",
      type: "alert",
      time: "1d ago",
      rating: 3,
    },
    {
      id: 4,
      title: "Server maintenance tonight",
      type: "alert",
      time: "2d ago",
      rating: 2,
    },
  ];
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // future auth use ke liye
    navigate("/login");
  };

  return (
    <header className="h-14 px-4 flex justify-end items-center shadow bg-base-100 text-base-content border-b border-base-content/10">
      
      {/* Page Title */}
      {/* <h1 className="text-lg font-semibold">Admin Dashboard</h1> */}

      <div className="flex items-right gap-2">
        
        {/* Notification */}
        {/* <button className="btn btn-ghost btn-circle">
          <Bell size={20} />
        </button> */}
<div className="drawer drawer-end">
  <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* This is the button that opens the drawer */}
    <label htmlFor="my-drawer-5" className="btn btn-ghost btn-circle">
      <Bell size={20} />
    </label>
  </div>
  
  <div className="drawer-side">
    {/* Overlay for closing */}
    <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
    
    {/* Sidebar container */}
    <div className="w-80 bg-base-100 h-full shadow-lg overflow-y-auto">
      <h2 className="p-4 font-bold text-lg border-b">Notifications</h2>
      {notifications.map((note) => (
        <div
          key={note.id}
          className="flex flex-col p-4 transition cursor-pointer border-base-300 border-b last:border-b-0"
        >
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <h3 className="font-medium text-primary">{note.title}</h3>
              <p className="text-xs text-gray-500 mt-1">{note.time}</p>
            </div>
          </div>

          {/* DaisyUI Rating */}
          <div className="rating mt-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                type="radio"
                name={`rating-${note.id}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${i} star`}
                defaultChecked={i === note.rating}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

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
