export const getDashboardStats = () => {
  return Promise.resolve({
    users: 1245,
    products: 320,
    orders: 1580,
    revenue: 245000,
  });
};

export const getChartData = () => {
  return Promise.resolve([
    { name: "Jan", sales: 4000 },
    { name: "Feb", sales: 3000 },
    { name: "Mar", sales: 5000 },
    { name: "Apr", sales: 4500 },
    { name: "May", sales: 6000 },
    { name: "Jun", sales: 5500 },
  ]);
};

export const getRecentActivity = () => {
  return Promise.resolve([
    "New user registered",
    "New order placed",
    "Product added",
    "Settings updated",
  ]);
};
