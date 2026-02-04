import React from "react";

const Users = () => {
  return (
    <div className="w-full p-6">

      {/* Page Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Users</h2>
          <p className="text-sm text-gray-500">Manage all registered users</p>
        </div>

        <button className="btn btn-primary btn-sm">
          + Add User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Total Users</h4>
          <h2 className="text-2xl font-bold">1200</h2>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Active Users</h4>
          <h2 className="text-2xl font-bold">980</h2>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Blocked Users</h4>
          <h2 className="text-2xl font-bold">45</h2>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">New This Month</h4>
          <h2 className="text-2xl font-bold">120</h2>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-base-100 p-6 rounded-xl shadow">

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">

          <input 
            type="text"
            placeholder="Search users..."
            className="input input-bordered w-full md:max-w-xs"
          />

          <div className="flex gap-2">
            <select className="select select-bordered select-sm">
              <option>Status</option>
              <option>Active</option>
              <option>Blocked</option>
            </select>

            <select className="select select-bordered select-sm">
              <option>Role</option>
              <option>Admin</option>
              <option>User</option>
              <option>Manager</option>
            </select>
          </div>

        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
           <thead>
  <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <th>User</th>
    <th>Email</th>
    <th>Role</th>
    <th>Status</th>
    <th className="text-right">Action</th>
  </tr>
</thead>

<tbody>
  {[1,2,3,4,5].map((item) => (
    <tr key={item}>
      {/* Checkbox column */}
      <td>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </td>

      <td className="flex items-center gap-3">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content rounded-full w-9">
            <span>U</span>
          </div>
        </div>
        <span className="font-medium">User {item}</span>
      </td>

      <td>user{item}@gmail.com</td>

      <td>
        <span className="badge badge-info">User</span>
      </td>

      <td>
        <span className="badge badge-success">Active</span>
      </td>

      <td className="text-right space-x-2">
        <button className="btn btn-xs btn-outline">View</button>
        <button className="btn btn-xs btn-warning">Edit</button>
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  ))}
</tbody>

          </table>
        </div>

      </div>

    </div>
  );
};

export default Users;
