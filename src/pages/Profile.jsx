import React from "react";

const Profile = () => {
  return (
    <div className="w-full p-6">

      {/* Page Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">My Profile</h2>
        <p className="text-sm text-gray-500">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Profile Card */}
        <div className="bg-base-100 p-6 rounded-xl shadow">
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 rounded-full bg-gray-200 mb-3 flex items-center justify-center">
              <span className="text-gray-500">Avatar</span>
            </div>
            <h3 className="font-semibold text-lg">Admin User</h3>
            <p className="text-sm text-gray-500">admin@gmail.com</p>

            <button className="mt-4 px-4 py-2 text-sm bg-primary text-white rounded-lg">
              Upload Photo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-6 text-center">
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-semibold">120</h4>
              <p className="text-xs text-gray-500">Orders</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-semibold">45</h4>
              <p className="text-xs text-gray-500">Wishlist</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <h4 className="font-semibold">10</h4>
              <p className="text-xs text-gray-500">Reviews</p>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="lg:col-span-2 bg-base-100 p-6 rounded-xl shadow">

          <h3 className="font-semibold mb-4">Personal Details</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-sm text-gray-500">Full Name</label>
              <input 
                type="text"
                placeholder="Enter full name"
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
              <label className="text-sm text-gray-500">Phone</label>
              <input 
                type="text"
                placeholder="+91 98765 43210"
                className="input input-bordered w-full mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500">Location</label>
              <input 
                type="text"
                placeholder="Jaipur, India"
                className="input input-bordered w-full mt-1"
              />
            </div>

          </div>

          {/* Bio */}
          <div className="mt-4">
            <label className="text-sm text-gray-500">Bio</label>
            <textarea 
              rows="3"
              placeholder="Write something about yourself..."
              className="textarea textarea-bordered w-full mt-1"
            ></textarea>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 text-right space-x-3">
            <button className="px-6 py-2 border rounded-lg">
              Cancel
            </button>
            <button className="px-6 py-2 bg-primary text-white rounded-lg">
              Save Changes
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Profile;
