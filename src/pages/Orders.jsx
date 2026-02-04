import React from "react";

const Orders = () => {
  return (
    <div className="w-full p-6">

      {/* Page Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Orders</h2>
          <p className="text-sm text-gray-500">Manage customer orders</p>
        </div>

        <button className="btn btn-primary btn-sm">
          Export Orders
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Total Orders</h4>
          <h2 className="text-2xl font-bold">1560</h2>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Pending</h4>
          <h2 className="text-2xl font-bold">120</h2>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Completed</h4>
          <h2 className="text-2xl font-bold">1340</h2>
        </div>
        <div className="bg-base-100 p-4 rounded-xl shadow">
          <h4 className="text-sm text-gray-500">Cancelled</h4>
          <h2 className="text-2xl font-bold">100</h2>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-base-100 p-6 rounded-xl shadow">

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">

          <input 
            type="text"
            placeholder="Search order ID or customer..."
            className="input input-bordered w-full md:max-w-xs"
          />

          <div className="flex gap-2">
            <select className="select select-bordered select-sm">
              <option>Status</option>
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>

            <select className="select select-bordered select-sm">
              <option>Payment</option>
              <option>Paid</option>
              <option>COD</option>
              <option>Refunded</option>
            </select>
          </div>

        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payment</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            <tbody>

              {[1,2,3,4,5].map((item) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td>#ORD{1000 + item}</td>
                  <td>User {item}</td>
                  <td>₹ {item * 499}</td>

                  <td>
                    <span className="badge badge-warning">Pending</span>
                  </td>

                  <td>
                    <span className="badge badge-success">Paid</span>
                  </td>

                  <td className="text-right space-x-2">
                    <button className="btn btn-xs btn-outline">View</button>
                    <button className="btn btn-xs btn-warning">Edit</button>
                    <button className="btn btn-xs btn-error">Cancel</button>
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

export default Orders;
