import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Notification from "../pages/Notification";
import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  BarChart2,
  MessageCircle,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import Login from "../pages/Login";

const sidebarItems = [
  { title: "Dashboard", icon: <LayoutDashboard size={20} />, path: "/" },
  { title: "Products", icon: <Package size={20} />, path: "/products" },
  { title: "Users", icon: <Users size={20} />, path: "/users" },
  { title: "Orders", icon: <ShoppingCart size={20} />, path: "/orders" },
  { title: "Analytics", icon: <BarChart2 size={20} />, path: "/analytics" },
  { title: "Support", icon: <MessageCircle size={20} />, path: "/support" },
  { title: "Settings", icon: <Settings size={20} />, path: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={22} />
      </button>

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-64 bg-slate-900 text-white transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        {/* Logo */}
        <div className="px-5 py-4 border-b border-slate-700">
          <h2 className="text-xl font-bold tracking-wide">Admin Panel</h2>
        </div>

        {/* Menu */}
        <ul className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.title}>
              <NavLink
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-lg transition 
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-300 hover:bg-slate-800"
                  }`
                }
              >
                {item.icon}
                <span className="text-sm font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="absolute bottom-4 w-full px-4">
         <NavLink to="/login">
           <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-red-600 hover:text-white transition">
            <LogOut size={20} />
            Logout
          </button>
         </NavLink>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
