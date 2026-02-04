import React from "react";

const Setting = () => {
  return (
    <div className="w-full p-6">
      
      {/* Page Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
        <p className="text-sm text-gray-500">Manage your account preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Profile Card */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gray-200 mb-3"></div>
            <h3 className="font-semibold text-lg">Admin User</h3>
            <p className="text-sm text-gray-500">admin@gmail.com</p>
            <button className="mt-4 px-4 py-2 text-sm bg-primary text-white rounded-lg">
              Change Photo
            </button>
          </div>
        </div>

        {/* Settings Form */}
        <div className="lg:col-span-2 bg-base-100 p-6 rounded-xl shadow">

          <h3 className="font-semibold mb-4">Account Settings</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <input 
                type="text"
                placeholder="Enter name"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Email</label>
              <input 
                type="email"
                placeholder="Enter email"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Password</label>
              <input 
                type="password"
                placeholder="********"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Phone</label>
              <input 
                type="text"
                placeholder="+91 98765 43210"
                className="input input-bordered w-full mt-1"
              />
            </div>

          </div>

          {/* Preferences */}
          <div className="mt-6">
            <h4 className="font-medium mb-3">Preferences</h4>

            <div className="flex items-center justify-between mb-3">
              <span className="text-sm">Email Notifications</span>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm">Dark Mode</span>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-6 text-right">
            <button className="px-6 py-2 bg-primary text-white rounded-lg">
              Save Changes
            </button>
          </div>

          {/* Danger Zone */}
<div className="mt-8 border-t pt-6">
  <h4 className="font-semibold text-red-600 mb-3">Danger Zone</h4>

  <div className="flex items-center justify-between">
    <p className="text-sm text-gray-500">
      Once you delete your account, there is no going back. Please be certain.
    </p>

    <button 
      className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition"
      onClick={() => confirm("Are you sure you want to delete your account?")}
    >
      Delete Account
    </button>
  </div>
</div>


        </div>

      </div>
    </div>
  );
};

export default Setting;
