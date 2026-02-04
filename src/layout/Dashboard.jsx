import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Dashboard = ({children}) => {
  return(
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen md:ml-64">
            <Navbar />
            <main className="flex-1 p-6 bg-base-300 text-base-content flex justify-center items-center"> 
              <Outlet />
            </main>
            <Footer />
         </div>   
    </div>
  )
}

export default  Dashboard ;