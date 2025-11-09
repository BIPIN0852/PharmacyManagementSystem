// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Users,
//   Package,
//   ShoppingCart,
//   DollarSign,
//   AlertTriangle,
//   LogOut,
//   LayoutDashboard,
//   Settings,
//   FileText,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({
//     users: 0,
//     medicines: 0,
//     orders: 0,
//     revenue: 0,
//     salesData: [],
//   });
//   const [lowStock, setLowStock] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     fetch("http://localhost:5000/api/admin/dashboard", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch dashboard data");
//         return res.json();
//       })
//       .then((data) => {
//         setStats(data.stats || {});
//         setLowStock(data.lowStock || []);
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const menuItems = [
//     { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
//     { name: "Users", icon: <Users size={18} /> },
//     { name: "Medicines", icon: <Package size={18} /> },
//     { name: "Orders", icon: <ShoppingCart size={18} /> },
//     { name: "Reports", icon: <FileText size={18} /> },
//     { name: "Settings", icon: <Settings size={18} /> },
//   ];

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-screen text-xl">
//         Loading Dashboard...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center h-screen text-red-500">
//         Error: {error}
//       </div>
//     );

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-blue-900 text-white flex flex-col">
//         <div className="p-5 text-2xl font-bold border-b border-blue-700">
//           💊 Pharmacy Admin
//         </div>
//         <nav className="flex-1 p-4">
//           {menuItems.map((item, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg hover:bg-blue-800 cursor-pointer"
//             >
//               {item.icon}
//               <span>{item.name}</span>
//             </div>
//           ))}
//         </nav>
//         <div className="p-4 border-t border-blue-700">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 text-red-300 hover:text-red-500"
//           >
//             <LogOut size={18} /> Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">
//           Welcome, Admin 👋
//         </h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//           <div className="bg-white p-5 rounded-xl shadow flex flex-col items-start">
//             <Users className="text-blue-600 mb-2" size={24} />
//             <h2 className="text-lg font-semibold">Users</h2>
//             <p className="text-2xl font-bold">{stats.users}</p>
//           </div>
//           <div className="bg-white p-5 rounded-xl shadow flex flex-col items-start">
//             <Package className="text-green-600 mb-2" size={24} />
//             <h2 className="text-lg font-semibold">Medicines</h2>
//             <p className="text-2xl font-bold">{stats.medicines}</p>
//           </div>
//           <div className="bg-white p-5 rounded-xl shadow flex flex-col items-start">
//             <ShoppingCart className="text-yellow-600 mb-2" size={24} />
//             <h2 className="text-lg font-semibold">Orders</h2>
//             <p className="text-2xl font-bold">{stats.orders}</p>
//           </div>
//           <div className="bg-white p-5 rounded-xl shadow flex flex-col items-start">
//             <DollarSign className="text-purple-600 mb-2" size={24} />
//             <h2 className="text-lg font-semibold">Revenue</h2>
//             <p className="text-2xl font-bold">${stats.revenue}</p>
//           </div>
//         </div>

//         {/* Chart Section */}
//         <div className="bg-white p-6 rounded-xl shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4">Monthly Sales Overview</h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={stats.salesData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="sales" fill="#2563eb" radius={5} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Low Stock Medicines */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
//             <AlertTriangle className="text-red-500" /> Low Stock Medicines
//           </h2>
//           {lowStock.length === 0 ? (
//             <p className="text-gray-600">
//               ✅ All medicines are sufficiently stocked.
//             </p>
//           ) : (
//             <ul className="list-disc pl-6 text-gray-800">
//               {lowStock.map((m) => (
//                 <li key={m._id}>
//                   {m.name} — Only{" "}
//                   <span className="font-semibold text-red-500">
//                     {m.quantity}
//                   </span>{" "}
//                   left!
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   Users,
//   Package,
//   ShoppingCart,
//   DollarSign,
//   AlertTriangle,
//   LogOut,
//   LayoutDashboard,
//   Settings,
//   FileText,
//   Menu,
//   Bell,
//   Search,
//   ChevronDown,
//   Sun,
//   Moon,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/pharmacy-logo.jpg";
// import avatar from "../assets/avatar.jpg";

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({
//     users: 0,
//     medicines: 0,
//     orders: 0,
//     revenue: 0,
//     salesData: [],
//   });
//   const [lowStock, setLowStock] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [notifications, setNotifications] = useState([]);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     fetch("http://localhost:5000/api/admin/dashboard", {
//       headers: { Authorization: `Bearer ${token}` },
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch dashboard data");
//         return res.json();
//       })
//       .then((data) => {
//         setStats(data.stats || {});
//         setLowStock(data.lowStock || []);
//         setNotifications(data.notifications || []);
//       })
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const menuItems = [
//     { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
//     { name: "Users", icon: <Users size={18} /> },
//     { name: "Medicines", icon: <Package size={18} /> },
//     { name: "Orders", icon: <ShoppingCart size={18} /> },
//     { name: "Reports", icon: <FileText size={18} /> },
//     { name: "Settings", icon: <Settings size={18} /> },
//   ];

//   if (loading)
//     return (
//       <div className="flex items-center justify-center h-screen text-xl text-blue-700 font-semibold">
//         Loading Admin Dashboard...
//       </div>
//     );

//   if (error)
//     return (
//       <div className="flex items-center justify-center h-screen text-red-600 font-semibold">
//         Error: {error}
//       </div>
//     );

//   return (
//     <div
//       className={`flex min-h-screen transition-all duration-500 ${
//         darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
//       }`}
//     >
//       {/* Sidebar */}
//       <aside
//         className={`bg-gradient-to-b ${
//           darkMode ? "from-gray-800 to-gray-700" : "from-blue-900 to-blue-700"
//         } text-white flex flex-col shadow-lg transition-all duration-300 ${
//           sidebarOpen ? "w-64" : "w-20"
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-blue-600">
//           {sidebarOpen && (
//             <div className="flex flex-col items-center gap-2">
//               <img src={logo} alt="Logo" className="w-16 rounded-full" />
//               <span className="font-bold text-lg text-center">
//                 Pharmacy Admin
//               </span>
//             </div>
//           )}
//           <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//             <Menu size={24} />
//           </button>
//         </div>
//         <nav className="flex-1 p-4">
//           {menuItems.map((item, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.05, x: sidebarOpen ? 6 : 0 }}
//               className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg hover:bg-blue-800 cursor-pointer transition-all"
//             >
//               {item.icon}
//               {sidebarOpen && <span>{item.name}</span>}
//             </motion.div>
//           ))}
//         </nav>
//         <div className="p-4 border-t border-blue-600 flex justify-between items-center">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 text-red-300 hover:text-red-500 transition-colors"
//           >
//             <LogOut size={18} /> {sidebarOpen && "Logout"}
//           </button>
//           <button onClick={() => setDarkMode(!darkMode)}>
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Top Navbar */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Welcome, Admin 👋</h1>
//           <div className="flex items-center gap-6">
//             {/* Search bar */}
//             <div
//               className={`flex items-center gap-2 ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } rounded-full shadow px-3 py-1`}
//             >
//               <Search size={18} />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className={`outline-none w-48 bg-transparent ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               />
//             </div>

//             {/* Notifications */}
//             <div className="relative">
//               <Bell size={24} className="cursor-pointer" />
//               {notifications.length > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
//                   {notifications.length}
//                 </span>
//               )}
//             </div>

//             {/* Profile dropdown */}
//             <div className="flex items-center gap-2 relative cursor-pointer group">
//               <img
//                 src={avatar}
//                 alt="Admin"
//                 className="w-10 h-10 rounded-full"
//               />
//               <span className="hidden md:block font-medium">Admin</span>
//               <ChevronDown size={16} />
//               <div
//                 className={`absolute right-0 mt-12 w-48 ${
//                   darkMode ? "bg-gray-800 text-gray-200" : "bg-white"
//                 } shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10`}
//               >
//                 <button
//                   className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Profile
//                 </button>
//                 <button className="block w-full px-4 py-2 text-left hover:bg-gray-100">
//                   Settings
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Marquee notifications */}
//         <div
//           className={`overflow-hidden w-full rounded-full mb-6 ${
//             darkMode ? "bg-yellow-900" : "bg-yellow-100"
//           }`}
//         >
//           <marquee
//             className={`text-sm font-medium ${
//               darkMode ? "text-yellow-300" : "text-yellow-800"
//             }`}
//           >
//             {lowStock.length === 0
//               ? "✅ All medicines sufficiently stocked"
//               : lowStock.map((m) => `${m.name} low! Only ${m.quantity} left. `)}
//           </marquee>
//         </div>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
//           {[
//             {
//               title: "Users",
//               icon: <Users className="text-blue-600" size={28} />,
//               value: stats.users,
//             },
//             {
//               title: "Medicines",
//               icon: <Package className="text-green-600" size={28} />,
//               value: stats.medicines,
//             },
//             {
//               title: "Orders",
//               icon: <ShoppingCart className="text-yellow-600" size={28} />,
//               value: stats.orders,
//             },
//             {
//               title: "Revenue",
//               icon: <DollarSign className="text-purple-600" size={28} />,
//               value: `$${stats.revenue}`,
//             },
//           ].map((card, i) => (
//             <motion.div
//               key={i}
//               whileHover={{ scale: 1.03 }}
//               className={`p-6 rounded-xl shadow hover:shadow-lg transition-all flex flex-col gap-2 ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               }`}
//             >
//               {card.icon}
//               <h2 className="text-sm opacity-70">{card.title}</h2>
//               <p className="text-2xl font-bold">{card.value}</p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Sales Chart */}
//         <div
//           className={`p-6 rounded-xl shadow mb-10 ${
//             darkMode ? "bg-gray-800" : "bg-white"
//           }`}
//         >
//           <h2 className="text-xl font-semibold mb-4">Monthly Sales Overview</h2>
//           <ResponsiveContainer width="100%" height={320}>
//             <BarChart data={stats.salesData}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="month" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="sales" fill="#10b981" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Placeholder Tables */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Customer Orders Table */}
//           <div
//             className={`p-6 rounded-xl shadow ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h2 className="text-lg font-semibold mb-4">Customer Orders</h2>
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="border-b border-gray-200 text-left">
//                   <th>Order ID</th>
//                   <th>Customer</th>
//                   <th>Status</th>
//                   <th>Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b hover:bg-gray-50">
//                   <td>#1001</td>
//                   <td>John Doe</td>
//                   <td>Completed</td>
//                   <td>2025-11-07</td>
//                 </tr>
//                 <tr className="border-b hover:bg-gray-50">
//                   <td>#1002</td>
//                   <td>Jane Smith</td>
//                   <td>Pending</td>
//                   <td>2025-11-08</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Medicines Table */}
//           <div
//             className={`p-6 rounded-xl shadow ${
//               darkMode ? "bg-gray-800" : "bg-white"
//             }`}
//           >
//             <h2 className="text-lg font-semibold mb-4">Medicines Overview</h2>
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="border-b border-gray-200 text-left">
//                   <th>Medicine</th>
//                   <th>Stock</th>
//                   <th>Expiry</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {lowStock.slice(0, 3).map((m) => (
//                   <tr key={m._id} className="border-b hover:bg-gray-50">
//                     <td>{m.name}</td>
//                     <td>{m.quantity}</td>
//                     <td>{m.expiryDate || "N/A"}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

// src/pages/AdminDashboard.jsx
import React, { useEffect, useMemo, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  AlertTriangle,
  LogOut,
  LayoutDashboard,
  Settings,
  FileText,
  Menu,
  Bell,
  Search,
  ChevronDown,
  Sun,
  Moon,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/pharmacy-logo.jpg";
import avatar from "../assets/avatar.jpg";
import "./AdminDashboard.css";

const MOCK_SALES = [
  { month: "Jan", sales: 4200 },
  { month: "Feb", sales: 3800 },
  { month: "Mar", sales: 4600 },
  { month: "Apr", sales: 5200 },
  { month: "May", sales: 6100 },
  { month: "Jun", sales: 5400 },
  { month: "Jul", sales: 5900 },
  { month: "Aug", sales: 6300 },
  { month: "Sep", sales: 5800 },
  { month: "Oct", sales: 6400 },
  { month: "Nov", sales: 7000 },
  { month: "Dec", sales: 7600 },
];

const MOCK_ORDERS = Array.from({ length: 34 }).map((_, i) => ({
  id: 1000 + i,
  customer: ["John Doe", "Jane Smith", "Akash", "Mina", "Rohit"][i % 5],
  medicine: ["Paracetamol", "Amoxicillin", "Aspirin", "Cetirizine"][i % 4],
  qty: (i % 5) + 1,
  total: ((i % 5) + 1) * (10 + (i % 7)),
  status: ["Completed", "Pending", "Processing", "Cancelled"][i % 4],
  date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
}));

const MOCK_MEDICINES = Array.from({ length: 28 }).map((_, i) => ({
  id: `M-${3000 + i}`,
  name:
    ["Paracetamol", "Amoxicillin", "Ibuprofen", "Loratadine"][i % 4] +
    (i % 7 ? ` ${i}` : ""),
  category: ["Painkiller", "Antibiotic", "Antihistamine", "OTC"][i % 4],
  stock: Math.max(0, 120 - i * 3),
  expiryDate: new Date(Date.now() + (i % 12) * 30 * 86400000)
    .toISOString()
    .slice(0, 10),
  price: (5 + (i % 10)).toFixed(2),
}));

function useSortableData(items, config = null) {
  const [sortConfig, setSortConfig] = useState(config);
  const sortedItems = useMemo(() => {
    let sortable = [...items];
    if (sortConfig !== null) {
      const { key, direction } = sortConfig;
      sortable.sort((a, b) => {
        const av = a[key];
        const bv = b[key];
        if (typeof av === "number" && typeof bv === "number") {
          return direction === "ascending" ? av - bv : bv - av;
        }
        const sa = String(av).toLowerCase();
        const sb = String(bv).toLowerCase();
        if (sa < sb) return direction === "ascending" ? -1 : 1;
        if (sa > sb) return direction === "ascending" ? 1 : -1;
        return 0;
      });
    }
    return sortable;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
}

const TablePagination = ({
  total,
  page,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <div className="flex items-center gap-2 text-sm">
        <span>Page</span>
        <div className="inline-flex items-center gap-1 border rounded overflow-hidden">
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
            onClick={() => onPageChange(1)}
            disabled={page === 1}
            title="First"
          >
            <ChevronsLeft size={16} />
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
            onClick={() => onPageChange(Math.max(1, page - 1))}
            disabled={page === 1}
            title="Previous"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="px-3 py-1 bg-white">{page}</div>
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
            onClick={() => onPageChange(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            title="Next"
          >
            <ChevronRight size={16} />
          </button>
          <button
            className="px-2 py-1 hover:bg-gray-100 disabled:opacity-40"
            onClick={() => onPageChange(totalPages)}
            disabled={page === totalPages}
            title="Last"
          >
            <ChevronsRight size={16} />
          </button>
        </div>
        <span className="opacity-70">of {totalPages}</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span>Rows</span>
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {[5, 10, 15, 25].map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <span className="opacity-70">Total: {total}</span>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    users: 0,
    medicines: 0,
    orders: 0,
    revenue: 0,
    salesData: MOCK_SALES,
  });
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [medicines, setMedicines] = useState(MOCK_MEDICINES);
  const [lowStock, setLowStock] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [globalError, setGlobalError] = useState("");

  // Orders table state
  const [ordersQuery, setOrdersQuery] = useState("");
  const [ordersPage, setOrdersPage] = useState(1);
  const [ordersPageSize, setOrdersPageSize] = useState(10);

  // Medicines table state
  const [medQuery, setMedQuery] = useState("");
  const [medPage, setMedPage] = useState(1);
  const [medPageSize, setMedPageSize] = useState(10);

  useEffect(() => {
    // load theme preference
    const saved = localStorage.getItem("dashboard_dark");
    if (saved) setDarkMode(saved === "true");
  }, []);

  useEffect(() => {
    // fetch data from API; if fails, we use mocks above
    const token = localStorage.getItem("token");
    if (!token) {
      // if unauthenticated fall back to mocks but still permit viewing (or navigate)
      // navigate("/login"); // uncomment if you want to force login
      setGlobalError(
        "No token found — showing demo data. Login required for real data."
      );
      setLoading(false);
      computeLowStock(MOCK_MEDICINES);
      setStats((s) => ({
        ...s,
        users: 125,
        medicines: MOCK_MEDICINES.length,
        orders: MOCK_ORDERS.length,
        revenue: 12543,
      }));
      return;
    }

    fetch("/api/admin/dashboard", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          const txt = await res.text();
          throw new Error(txt || "Failed to fetch dashboard");
        }
        return res.json();
      })
      .then((data) => {
        // expect { stats, orders, medicines, lowStock, notifications }
        if (data.stats) setStats((s) => ({ ...s, ...data.stats }));
        if (data.orders) setOrders(data.orders);
        if (data.medicines) setMedicines(data.medicines);
        if (data.lowStock) setLowStock(data.lowStock);
        if (data.notifications) setNotifications(data.notifications);
      })
      .catch((err) => {
        // fallback to mock data — but keep user informed
        setGlobalError(
          `Could not load live data: ${err.message}. Showing demo data instead.`
        );
        setStats((s) => ({
          ...s,
          users: 125,
          medicines: MOCK_MEDICINES.length,
          orders: MOCK_ORDERS.length,
          revenue: 12543,
        }));
        setOrders(MOCK_ORDERS);
        setMedicines(MOCK_MEDICINES);
        setNotifications([
          { id: 1, text: "Demo: New order #1001", time: "2h" },
          { id: 2, text: "Demo: Low stock: Paracetamol", time: "1d" },
        ]);
        computeLowStock(MOCK_MEDICINES);
      })
      .finally(() => setLoading(false));
  }, [navigate]);

  useEffect(() => {
    computeLowStock(medicines);
  }, [medicines]);

  const computeLowStock = (meds) => {
    const low = meds.filter((m) => m.stock <= 20).slice(0, 8);
    setLowStock(low);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { name: "Users", icon: <Users size={18} /> },
    { name: "Medicines", icon: <Package size={18} /> },
    { name: "Orders", icon: <ShoppingCart size={18} /> },
    { name: "Reports", icon: <FileText size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  // ---- Orders table sorting/searching/pagination ----
  const {
    items: sortedOrders,
    requestSort: requestSortOrder,
    sortConfig: sortOrderConfig,
  } = useSortableData(orders);
  const filteredOrders = useMemo(() => {
    const q = ordersQuery.trim().toLowerCase();
    if (!q) return sortedOrders;
    return sortedOrders.filter(
      (o) =>
        String(o.id).includes(q) ||
        o.customer.toLowerCase().includes(q) ||
        o.medicine.toLowerCase().includes(q) ||
        String(o.status).toLowerCase().includes(q)
    );
  }, [ordersQuery, sortedOrders]);
  const ordersTotal = filteredOrders.length;
  const ordersPageItems = useMemo(() => {
    const start = (ordersPage - 1) * ordersPageSize;
    return filteredOrders.slice(start, start + ordersPageSize);
  }, [filteredOrders, ordersPage, ordersPageSize]);

  // ---- Medicines table
  const {
    items: sortedMeds,
    requestSort: requestSortMed,
    sortConfig: sortMedConfig,
  } = useSortableData(medicines);
  const filteredMeds = useMemo(() => {
    const q = medQuery.trim().toLowerCase();
    if (!q) return sortedMeds;
    return sortedMeds.filter(
      (m) =>
        m.id.toLowerCase().includes(q) ||
        m.name.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
    );
  }, [medQuery, sortedMeds]);
  const medsTotal = filteredMeds.length;
  const medsPageItems = useMemo(() => {
    const start = (medPage - 1) * medPageSize;
    return filteredMeds.slice(start, start + medPageSize);
  }, [filteredMeds, medPage, medPageSize]);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading Admin Dashboard...
      </div>
    );

  return (
    <div
      className={`flex min-h-screen transition-colors ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`flex flex-col text-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        } ${
          darkMode
            ? "bg-gray-800"
            : "bg-gradient-to-b from-blue-900 to-blue-700"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {sidebarOpen ? (
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="logo"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-bold text-lg">Pharmacy Admin</div>
                <div className="text-xs opacity-80">Manager Panel</div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <img src={logo} alt="logo" className="w-8 h-8 rounded-full" />
            </div>
          )}
          <button
            aria-label="Toggle sidebar"
            onClick={() => setSidebarOpen((s) => !s)}
            className="p-1 rounded hover:bg-white/10"
          >
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {menuItems.map((it) => (
            <motion.div
              key={it.name}
              whileHover={{ scale: 1.02 }}
              className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-white/10 ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <div className="opacity-90">{it.icon}</div>
              {sidebarOpen && <div className="font-medium">{it.name}</div>}
            </motion.div>
          ))}
        </nav>

        <div className="p-3 border-t border-white/10 flex items-center justify-between gap-2">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10"
          >
            <LogOut size={16} />{" "}
            {sidebarOpen && <span className="text-sm">Logout</span>}
          </button>
          <button
            onClick={() => {
              setDarkMode((d) => {
                localStorage.setItem("dashboard_dark", String(!d));
                return !d;
              });
            }}
            className="p-2 rounded hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        {/* Top row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Admin 👋</h1>
            <p className="text-sm opacity-70">
              Here's your store performance at a glance.
            </p>
            {globalError && (
              <div className="mt-2 text-xs text-yellow-400">{globalError}</div>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* global search (optional, could be hooked up later) */}
            <div
              className={`flex items-center gap-2 rounded-full px-3 py-1 ${
                darkMode ? "bg-gray-800" : "bg-white"
              } shadow`}
            >
              <Search size={16} />
              <input
                placeholder="Search app..."
                className="bg-transparent outline-none text-sm w-44"
              />
            </div>

            {/* notifications */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen((s) => !s)}
                className="p-2 rounded-full hover:bg-gray-200/20"
                aria-label="Notifications"
              >
                <Bell size={18} />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`absolute right-0 mt-2 w-80 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow-lg rounded border`}
                >
                  <div className="p-3 border-b">
                    {notifications.length} Notifications
                  </div>
                  <div className="max-h-56 overflow-auto">
                    {notifications.length === 0 ? (
                      <div className="p-3 text-sm opacity-70">
                        No notifications
                      </div>
                    ) : (
                      notifications.map((n) => (
                        <div
                          key={n.id}
                          className="p-3 border-b last:border-b-0 text-sm"
                        >
                          <div className="font-medium">{n.text}</div>
                          <div className="text-xs opacity-60">{n.time}</div>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              )}
            </div>

            {/* profile */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen((s) => !s)}
                className="flex items-center gap-2 p-1 rounded hover:bg-gray-200/10"
              >
                <img
                  src={avatar}
                  alt="admin"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="hidden md:block text-sm">Admin</div>
                <ChevronDown size={14} />
              </button>

              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`absolute right-0 mt-2 w-44 ${
                    darkMode ? "bg-gray-800" : "bg-white"
                  } shadow rounded border`}
                >
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => alert("Open profile")}
                  >
                    Profile
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => alert("Settings")}
                  >
                    Settings
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Alerts marquee (CSS animation) */}
        <div
          className={`relative overflow-hidden rounded-full px-4 py-2 mb-6 ${
            darkMode ? "bg-yellow-900" : "bg-yellow-100"
          }`}
        >
          <div
            style={{
              whiteSpace: "nowrap",
              display: "inline-block",
              animation: "marquee 18s linear infinite",
            }}
            className={`${
              darkMode ? "text-yellow-300" : "text-yellow-800"
            } font-medium`}
          >
            {lowStock.length === 0
              ? "✅ All medicines sufficiently stocked — no low stock alerts."
              : lowStock.map((m) => `${m.name} low — ${m.stock} left!   `)}
          </div>
          <style>{`@keyframes marquee { 0% { transform: translateX(100%);} 100% { transform: translateX(-100%);} }`}</style>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Users", value: stats.users, icon: <Users size={28} /> },
            {
              title: "Medicines",
              value: stats.medicines,
              icon: <Package size={28} />,
            },
            {
              title: "Orders",
              value: stats.orders,
              icon: <ShoppingCart size={28} />,
            },
            {
              title: "Revenue",
              value: `$${stats.revenue}`,
              icon: <DollarSign size={28} />,
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-xl shadow ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-sm opacity-70">{c.title}</div>
                <div className="p-2 rounded bg-white/5">{c.icon}</div>
              </div>
              <div className="mt-3 text-2xl font-bold">{c.value}</div>
              <div className="mt-2 text-xs opacity-60">Updated just now</div>
            </motion.div>
          ))}
        </div>

        {/* Charts and tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales chart */}
          <div
            className={`lg:col-span-2 p-6 rounded-xl shadow ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Monthly Sales Overview</h3>
              <div className="text-sm opacity-70">
                Revenue trend (last 12 months)
              </div>
            </div>
            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={stats.salesData || MOCK_SALES}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sales" fill="#10b981" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Low stock list */}
          <div
            className={`p-6 rounded-xl shadow ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">Low Stock</h3>
              <div className="text-sm opacity-60">{lowStock.length} items</div>
            </div>
            <div className="space-y-2">
              {lowStock.length === 0 ? (
                <div className="text-sm opacity-70">All medicines healthy</div>
              ) : (
                lowStock.map((m) => (
                  <div
                    key={m.id || m._id || m.name}
                    className="flex items-center justify-between p-2 rounded hover:bg-gray-50/20"
                  >
                    <div>
                      <div className="font-medium">{m.name}</div>
                      <div className="text-xs opacity-60">
                        {m.category || "Category"}
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-red-400">
                      {m.stock ?? m.quantity}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Tables area */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Orders table */}
          <div
            className={`p-6 rounded-xl shadow ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Customer Orders</h3>
                <div className="text-xs opacity-60">
                  Search, sort & paginate
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={ordersQuery}
                  onChange={(e) => {
                    setOrdersQuery(e.target.value);
                    setOrdersPage(1);
                  }}
                  placeholder="Search orders..."
                  className="border px-3 py-1 rounded"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortOrder("id")}
                    >
                      Order ID{" "}
                      {sortOrderConfig?.key === "id"
                        ? sortOrderConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortOrder("customer")}
                    >
                      Customer{" "}
                      {sortOrderConfig?.key === "customer"
                        ? sortOrderConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                    <th className="p-2">Medicine</th>
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortOrder("qty")}
                    >
                      Qty{" "}
                      {sortOrderConfig?.key === "qty"
                        ? sortOrderConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortOrder("total")}
                    >
                      Total{" "}
                      {sortOrderConfig?.key === "total"
                        ? sortOrderConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                    <th className="p-2">Status</th>
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortOrder("date")}
                    >
                      Date{" "}
                      {sortOrderConfig?.key === "date"
                        ? sortOrderConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ordersPageItems.map((o) => (
                    <tr key={o.id} className="hover:bg-gray-50/30">
                      <td className="p-2">#{o.id}</td>
                      <td className="p-2">{o.customer}</td>
                      <td className="p-2">{o.medicine}</td>
                      <td className="p-2">{o.qty}</td>
                      <td className="p-2">${o.total}</td>
                      <td className="p-2">
                        <span
                          className={`px-2 py-0.5 rounded text-xs ${
                            o.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : o.status === "Pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td className="p-2">{o.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <TablePagination
              total={ordersTotal}
              page={ordersPage}
              pageSize={ordersPageSize}
              onPageChange={(p) => setOrdersPage(p)}
              onPageSizeChange={(s) => {
                setOrdersPageSize(s);
                setOrdersPage(1);
              }}
            />
          </div>

          {/* Medicines table */}
          <div
            className={`p-6 rounded-xl shadow ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Medicines Overview</h3>
                <div className="text-xs opacity-60">
                  Search, sort & paginate
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  value={medQuery}
                  onChange={(e) => {
                    setMedQuery(e.target.value);
                    setMedPage(1);
                  }}
                  placeholder="Search medicines..."
                  className="border px-3 py-1 rounded"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b">
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortMed("id")}
                    >
                      ID{" "}
                      {sortMedConfig?.key === "id"
                        ? sortMedConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortMed("name")}
                    >
                      Name{" "}
                      {sortMedConfig?.key === "name"
                        ? sortMedConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                    <th className="p-2">Category</th>
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortMed("stock")}
                    >
                      Stock{" "}
                      {sortMedConfig?.key === "stock"
                        ? sortMedConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                    <th className="p-2">Expiry</th>
                    <th
                      className="p-2 cursor-pointer"
                      onClick={() => requestSortMed("price")}
                    >
                      Price{" "}
                      {sortMedConfig?.key === "price"
                        ? sortMedConfig.direction === "ascending"
                          ? "▲"
                          : "▼"
                        : ""}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {medsPageItems.map((m) => (
                    <tr key={m.id} className="hover:bg-gray-50/30">
                      <td className="p-2">{m.id}</td>
                      <td className="p-2">{m.name}</td>
                      <td className="p-2">{m.category}</td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              m.stock <= 10
                                ? "bg-red-400"
                                : m.stock <= 30
                                ? "bg-yellow-400"
                                : "bg-green-400"
                            }`}
                          />
                          <div>{m.stock}</div>
                        </div>
                      </td>
                      <td className="p-2">{m.expiryDate}</td>
                      <td className="p-2">${m.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <TablePagination
              total={medsTotal}
              page={medPage}
              pageSize={medPageSize}
              onPageChange={(p) => setMedPage(p)}
              onPageSizeChange={(s) => {
                setMedPageSize(s);
                setMedPage(1);
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
