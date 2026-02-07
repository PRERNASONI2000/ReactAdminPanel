import React from "react";

const productsData = [
  {
    id: 1,
    name: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    desc: "High performance running shoes...",
    category: "Shoes",
    createdAt: "01 Jul 2020",
    status: "In stock",
    price: "$23.42",
    img: "https://via.placeholder.com/40/FFD700/000000?text=N1",
  },
  {
    id: 2,
    name: "Nike Air Max 270 React ENG",
    desc: "Stylish and comfortable...",
    category: "Shoes",
    createdAt: "16 Jan 2021",
    status: "Out of stock",
    price: "$23.42",
    img: "https://via.placeholder.com/40/FF0000/FFFFFF?text=N2",
  },
  {
    id: 3,
    name: "Nike ZoomX SuperRep Surge",
    desc: "Perfect for gym & cardio...",
    category: "Shoes",
    createdAt: "17 May 2021",
    status: "Low stock",
    price: "$23.42",
    img: "https://via.placeholder.com/40/FFC0CB/000000?text=N3",
  },
];

const statusColor = {
  "In stock": "bg-green-100 text-green-700",
  "Out of stock": "bg-red-100 text-red-700",
  "Low stock": "bg-yellow-100 text-yellow-700",
};

const Products = () => {
  return (
    <div className="w-full p-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-2xl font-semibold bg-base-100">Products List</h2>
          <p className="text-sm">Manage all products here</p>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search products..."
            className="input input-bordered w-full sm:w-64"
          />
          <button className="px-4 py-2 bg-primary text-white rounded-lg">
            + New Product
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-base-100 rounded-xl shadow overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-gray-500">
              <th>#</th>
              <th>Product</th>
              <th>Category</th>
              <th>Created At</th>
              <th>Status</th>
              <th>Amount</th>
              <th className="text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((product, idx) => (
              <tr key={product.id}>
                <td>{idx + 1}</td>
                <td className="flex items-center gap-3">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-10 h-10 rounded-lg"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{product.name}</span>
                    <span className="text-xs text-gray-400 truncate w-48">
                      {product.desc}
                    </span>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{product.createdAt}</td>
                <td>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${statusColor[product.status]}`}
                  >
                    {product.status}
                  </span>
                </td>
                <td>{product.price}</td>
                <td className="text-right">
  <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-xs">
      ⋮
    </label>
    <ul
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32"
    >
      <li>
        <button className="text-blue-600" onClick={() => alert("Edit clicked")}>
          Edit
        </button>
      </li>
      <li>
        <button className="text-red-600" onClick={() => alert("Delete clicked")}>
          Delete
        </button>
      </li>
      <li>
        <button className="text-green-600" onClick={() => alert("View clicked")}>
          View
        </button>
      </li>
    </ul>
  </div>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
