// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Package,
//   ShoppingCart,
//   DollarSign,
//   AlertTriangle,
//   LogOut,
//   LayoutDashboard,
//   Settings,
//   FileText,
// } from "lucide-react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const PharmacistDashboard = () => {
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({
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
//     if (!token) return navigate("/login");

//     fetch("http://localhost:5000/api/pharmacist/dashboard", {
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
//       <aside className="w-64 bg-green-900 text-white flex flex-col">
//         <div className="p-5 text-2xl font-bold border-b border-green-700">
//           💊 Pharmacy
//         </div>
//         <nav className="flex-1 p-4">
//           {menuItems.map((item, i) => (
//             <div
//               key={i}
//               className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg hover:bg-green-800 cursor-pointer"
//             >
//               {item.icon}
//               <span>{item.name}</span>
//             </div>
//           ))}
//         </nav>
//         <div className="p-4 border-t border-green-700">
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
//           Welcome, Pharmacist 👋
//         </h1>

//         {/* Summary Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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
//               <Bar dataKey="sales" fill="#16a34a" radius={5} />
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

// export default PharmacistDashboard;

// import React, { useState, useMemo } from "react";
// import { motion } from "framer-motion";
// import {
//   Bell,
//   Search,
//   LogOut,
//   Sun,
//   Moon,
//   Package,
//   ShoppingCart,
//   Users,
//   ChevronDown,
//   Menu,
// } from "lucide-react";
// import { loadStripe } from "@stripe/stripe-js";
// import avatar from "../assets/avatar.jpg";
// import logo from "../assets/pharmacy-logo.jpg";

// // Stripe test key
// const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXXXX");

// const MOCK_ORDERS = Array.from({ length: 12 }).map((_, i) => ({
//   id: 1000 + i,
//   customer: ["John Doe", "Jane Smith", "Akash", "Mina"][i % 4],
//   medicine: ["Paracetamol", "Amoxicillin", "Ibuprofen"][i % 3],
//   qty: (i % 5) + 1,
//   status: "Pending",
//   paymentMethod: i % 2 === 0 ? "Stripe" : "COD",
//   paymentStatus: i % 2 === 0 ? "Pending" : "Pending",
//   prescription: null,
//   date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
// }));

// const MOCK_MEDICINES = Array.from({ length: 15 }).map((_, i) => ({
//   id: `M-${3000 + i}`,
//   name: ["Paracetamol", "Amoxicillin", "Ibuprofen"][i % 3],
//   category: ["Painkiller", "Antibiotic"][i % 2],
//   stock: Math.max(0, 50 - i * 3),
//   expiryDate: new Date(Date.now() + (i % 12) * 30 * 86400000)
//     .toISOString()
//     .slice(0, 10),
// }));

// const PharmacistDashboard = () => {
//   const [orders, setOrders] = useState(MOCK_ORDERS);
//   const [medicines] = useState(MOCK_MEDICINES);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const [notifOpen, setNotifOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredOrders = useMemo(() => {
//     if (!searchQuery) return orders;
//     return orders.filter(
//       (o) =>
//         o.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         o.medicine.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }, [searchQuery, orders]);

//   const handleUploadPrescription = (e, orderId) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setOrders((prev) =>
//       prev.map((o) =>
//         o.id === orderId ? { ...o, prescription: URL.createObjectURL(file) } : o
//       )
//     );
//   };

//   const toggleOrderStatus = (orderId) => {
//     setOrders((prev) =>
//       prev.map((o) =>
//         o.id === orderId
//           ? { ...o, status: o.status === "Pending" ? "Completed" : "Pending" }
//           : o
//       )
//     );
//   };

//   const handleStripePayment = async (order) => {
//     const stripe = await stripePromise;
//     // Normally we call backend to create a CheckoutSession
//     alert(`Stripe payment initiated for Order #${order.id}. (Demo mode)`);
//     // On success:
//     setOrders((prev) =>
//       prev.map((o) => (o.id === order.id ? { ...o, paymentStatus: "Paid" } : o))
//     );
//   };

//   const handleLogout = () => {
//     // Clear auth token and any stored user info
//     localStorage.removeItem("token");
//     localStorage.removeItem("user"); // if you store pharmacist info
//     // Navigate to home page
//     navigate("/", { replace: true }); // replace prevents back navigation to dashboard
//   };

//   return (
//     <div
//       className={`flex min-h-screen ${
//         darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
//       }`}
//     >
//       {/* Sidebar */}
//       <aside
//         className={`flex flex-col shadow-lg transition-all duration-300 ${
//           sidebarOpen ? "w-64" : "w-20"
//         } ${darkMode ? "bg-gray-800" : "bg-blue-800"}`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-white/20">
//           {sidebarOpen ? (
//             <div className="flex items-center gap-3">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <div className="font-bold text-lg">Pharmacy</div>
//                 <div className="text-xs opacity-80">Pharmacist Panel</div>
//               </div>
//             </div>
//           ) : (
//             <img
//               src={logo}
//               alt="logo"
//               className="w-8 h-8 mx-auto rounded-full"
//             />
//           )}
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-1 rounded hover:bg-white/10"
//           >
//             <Menu size={20} />
//           </button>
//         </div>

//         <nav className="flex-1 p-3 space-y-1">
//           {[
//             { name: "Dashboard", icon: <Users size={18} /> },
//             { name: "Orders", icon: <ShoppingCart size={18} /> },
//             { name: "Medicines", icon: <Package size={18} /> },
//           ].map((item) => (
//             <motion.div
//               key={item.name}
//               whileHover={{ scale: 1.02 }}
//               className={`flex items-center gap-3 px-3 py-2 rounded cursor-pointer hover:bg-white/10 ${
//                 sidebarOpen ? "" : "justify-center"
//               }`}
//             >
//               <div className="opacity-90">{item.icon}</div>
//               {sidebarOpen && <div className="font-medium">{item.name}</div>}
//             </motion.div>
//           ))}
//         </nav>

//         <div className="p-3 border-t border-white/20 flex items-center justify-between gap-2">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/10"
//           >
//             <LogOut size={16} />
//             {sidebarOpen && <span className="text-sm">Logout</span>}
//           </button>
//           <button
//             onClick={() => setDarkMode((d) => !d)}
//             className="p-2 rounded hover:bg-white/10"
//             aria-label="Toggle theme"
//           >
//             {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//           </button>
//         </div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-6">
//         <div className="flex items-center justify-between mb-6">
//           <div>
//             <h1 className="text-2xl font-bold">Welcome, Pharmacist 👋</h1>
//             <p className="text-sm opacity-70">
//               Manage orders and medicines efficiently.
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <div
//               className={`flex items-center gap-2 rounded-full px-3 py-1 ${
//                 darkMode ? "bg-gray-800" : "bg-white"
//               } shadow`}
//             >
//               <Search size={16} />
//               <input
//                 placeholder="Search orders..."
//                 className="bg-transparent outline-none text-sm w-44"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             <div className="relative">
//               <button
//                 onClick={() => setNotifOpen(!notifOpen)}
//                 className="p-2 rounded-full hover:bg-gray-200/20"
//               >
//                 <Bell size={18} />
//                 <span className="absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center rounded-full bg-red-500 text-white">
//                   3
//                 </span>
//               </button>
//             </div>

//             <div className="relative">
//               <button
//                 onClick={() => setProfileOpen(!profileOpen)}
//                 className="flex items-center gap-2 p-1 rounded hover:bg-gray-200/10"
//               >
//                 <img
//                   src={avatar}
//                   alt="pharmacist"
//                   className="w-9 h-9 rounded-full object-cover"
//                 />
//                 <div className="hidden md:block text-sm">Pharmacist</div>
//                 <ChevronDown size={14} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Orders Table */}
//         <div
//           className={`p-6 rounded-xl shadow ${
//             darkMode ? "bg-gray-800" : "bg-white"
//           } mb-6`}
//         >
//           <h3 className="font-semibold mb-3">Customer Orders</h3>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="text-left border-b">
//                   <th className="p-2">Order ID</th>
//                   <th className="p-2">Customer</th>
//                   <th className="p-2">Medicine</th>
//                   <th className="p-2">Qty</th>
//                   <th className="p-2">Prescription</th>
//                   <th className="p-2">Payment</th>
//                   <th className="p-2">Status</th>
//                   <th className="p-2">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredOrders.map((o) => (
//                   <tr key={o.id} className="hover:bg-gray-50/20">
//                     <td className="p-2">#{o.id}</td>
//                     <td className="p-2">{o.customer}</td>
//                     <td className="p-2">{o.medicine}</td>
//                     <td className="p-2">{o.qty}</td>
//                     <td className="p-2">
//                       {o.prescription ? (
//                         <img
//                           src={o.prescription}
//                           alt="prescription"
//                           className="w-16 h-16 object-cover rounded shadow"
//                         />
//                       ) : (
//                         <input
//                           type="file"
//                           accept="image/*"
//                           onChange={(e) => handleUploadPrescription(e, o.id)}
//                           className="text-xs"
//                         />
//                       )}
//                     </td>
//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-0.5 rounded text-xs ${
//                           o.paymentMethod === "Stripe"
//                             ? o.paymentStatus === "Paid"
//                               ? "bg-green-100 text-green-700"
//                               : "bg-yellow-100 text-yellow-700"
//                             : "bg-blue-100 text-blue-700"
//                         }`}
//                       >
//                         {o.paymentMethod === "Stripe" ? o.paymentStatus : "COD"}
//                       </span>
//                     </td>
//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-0.5 rounded text-xs ${
//                           o.status === "Completed"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-yellow-100 text-yellow-700"
//                         }`}
//                       >
//                         {o.status}
//                       </span>
//                     </td>
//                     <td className="p-2 flex gap-2">
//                       {o.paymentMethod === "Stripe" &&
//                         o.paymentStatus === "Pending" && (
//                           <button
//                             onClick={() => handleStripePayment(o)}
//                             className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600"
//                           >
//                             Pay Online
//                           </button>
//                         )}
//                       <button
//                         onClick={() => toggleOrderStatus(o.id)}
//                         className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
//                       >
//                         Toggle Status
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Medicines Table */}
//         <div
//           className={`p-6 rounded-xl shadow ${
//             darkMode ? "bg-gray-800" : "bg-white"
//           }`}
//         >
//           <h3 className="font-semibold mb-3">Medicine Stock</h3>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm">
//               <thead>
//                 <tr className="text-left border-b">
//                   <th className="p-2">ID</th>
//                   <th className="p-2">Name</th>
//                   <th className="p-2">Category</th>
//                   <th className="p-2">Stock</th>
//                   <th className="p-2">Expiry Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {medicines.map((m) => (
//                   <tr key={m.id} className="hover:bg-gray-50/20">
//                     <td className="p-2">{m.id}</td>
//                     <td className="p-2">{m.name}</td>
//                     <td className="p-2">{m.category}</td>
//                     <td className="p-2">
//                       <div className="flex items-center gap-2">
//                         <div
//                           className={`w-2 h-2 rounded-full ${
//                             m.stock <= 10
//                               ? "bg-red-400"
//                               : m.stock <= 30
//                               ? "bg-yellow-400"
//                               : "bg-green-400"
//                           }`}
//                         />
//                         {m.stock}
//                       </div>
//                     </td>
//                     <td className="p-2">{m.expiryDate}</td>
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

// export default PharmacistDashboard;

// import React, { useEffect, useState, useMemo } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Users,
//   Package,
//   ShoppingCart,
//   LogOut,
//   Bell,
//   Sun,
//   Moon,
//   Menu,
// } from "lucide-react";
// import { motion } from "framer-motion";
// import { loadStripe } from "@stripe/stripe-js";
// import avatar from "../assets/avatar.jpg";
// import logo from "../assets/pharmacy-logo.jpg";

// // Initialize Stripe (replace with your publishable key)
// const stripePromise = loadStripe("pk_test_XXXXXXXXXXXXXXXXXXXX");

// // Mock Data
// const MOCK_ORDERS = Array.from({ length: 10 }).map((_, i) => ({
//   id: 1000 + i,
//   customer: ["John Doe", "Jane Smith", "Akash", "Mina"][i % 4],
//   medicine: ["Paracetamol", "Amoxicillin", "Aspirin"][i % 3],
//   qty: (i % 5) + 1,
//   status: ["Completed", "Pending", "Processing"][i % 3],
//   date: new Date(Date.now() - i * 86400000).toISOString().slice(0, 10),
//   paymentStatus: "Pending",
// }));

// const MOCK_MEDICINES = Array.from({ length: 20 }).map((_, i) => ({
//   id: `M-${3000 + i}`,
//   name: ["Paracetamol", "Amoxicillin", "Ibuprofen"][i % 3],
//   category: ["Painkiller", "Antibiotic"][i % 2],
//   stock: Math.max(0, 50 - i * 2),
//   expiryDate: new Date(Date.now() + i * 30 * 86400000)
//     .toISOString()
//     .slice(0, 10),
// }));

// // Sorting hook
// function useSortableData(items, config = null) {
//   const [sortConfig, setSortConfig] = useState(config);
//   const sortedItems = useMemo(() => {
//     let sortable = [...items];
//     if (sortConfig !== null) {
//       const { key, direction } = sortConfig;
//       sortable.sort((a, b) => {
//         const av = a[key];
//         const bv = b[key];
//         if (typeof av === "number" && typeof bv === "number") {
//           return direction === "ascending" ? av - bv : bv - av;
//         }
//         const sa = String(av).toLowerCase();
//         const sb = String(bv).toLowerCase();
//         if (sa < sb) return direction === "ascending" ? -1 : 1;
//         if (sa > sb) return direction === "ascending" ? 1 : -1;
//         return 0;
//       });
//     }
//     return sortable;
//   }, [items, sortConfig]);

//   const requestSort = (key) => {
//     let direction = "ascending";
//     if (
//       sortConfig &&
//       sortConfig.key === key &&
//       sortConfig.direction === "ascending"
//     ) {
//       direction = "descending";
//     }
//     setSortConfig({ key, direction });
//   };

//   return { items: sortedItems, requestSort, sortConfig };
// }

// // Pagination component
// const TablePagination = ({
//   total,
//   page,
//   pageSize,
//   onPageChange,
//   onPageSizeChange,
// }) => {
//   const totalPages = Math.max(1, Math.ceil(total / pageSize));
//   return (
//     <div className="flex justify-between items-center mt-3 text-sm text-gray-500 dark:text-gray-300">
//       <div className="flex items-center gap-2">
//         <button
//           className="px-3 py-1 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-500 disabled:opacity-40"
//           onClick={() => onPageChange(Math.max(1, page - 1))}
//           disabled={page === 1}
//         >
//           Prev
//         </button>
//         <span>
//           Page {page} of {totalPages}
//         </span>
//         <button
//           className="px-3 py-1 rounded bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 transition-all duration-500 disabled:opacity-40"
//           onClick={() => onPageChange(Math.min(totalPages, page + 1))}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//       <div className="flex items-center gap-2">
//         <span>Rows</span>
//         <select
//           value={pageSize}
//           onChange={(e) => onPageSizeChange(Number(e.target.value))}
//           className="border px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-200"
//         >
//           {[5, 10, 15].map((s) => (
//             <option key={s} value={s}>
//               {s}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// const PharmacistDashboard = () => {
//   const navigate = useNavigate();
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);
//   const [ordersQuery, setOrdersQuery] = useState("");
//   const [ordersPage, setOrdersPage] = useState(1);
//   const [ordersPageSize, setOrdersPageSize] = useState(5);
//   const [orders, setOrders] = useState(MOCK_ORDERS);
//   const [medicines, setMedicines] = useState(MOCK_MEDICINES);
//   const [medQuery, setMedQuery] = useState("");
//   const [medPage, setMedPage] = useState(1);
//   const [medPageSize, setMedPageSize] = useState(5);
//   const [prescriptions, setPrescriptions] = useState({});

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) navigate("/", { replace: true });
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/", { replace: true });
//   };

//   const handlePrescriptionUpload = (orderId, file) => {
//     setPrescriptions((prev) => ({
//       ...prev,
//       [orderId]: URL.createObjectURL(file),
//     }));
//   };

//   // Stripe payment
//   const handleStripePayment = async (orderId) => {
//     const stripe = await stripePromise;
//     alert("Redirecting to Stripe Checkout (mock)...");
//     setOrders((prev) =>
//       prev.map((o) =>
//         o.id === orderId ? { ...o, paymentStatus: "Paid via Stripe" } : o
//       )
//     );
//   };

//   const handleESWAPayment = (orderId) => {
//     alert("Processing ESWA payment (mock)...");
//     setOrders((prev) =>
//       prev.map((o) =>
//         o.id === orderId ? { ...o, paymentStatus: "Paid via ESWA" } : o
//       )
//     );
//   };

//   const handleCODPayment = (orderId) => {
//     alert("Order marked as Cash on Delivery");
//     setOrders((prev) =>
//       prev.map((o) =>
//         o.id === orderId ? { ...o, paymentStatus: "Pending (COD)" } : o
//       )
//     );
//   };

//   const menuItems = [
//     { name: "Dashboard", icon: <Users size={18} /> },
//     { name: "Medicines", icon: <Package size={18} /> },
//     { name: "Orders", icon: <ShoppingCart size={18} /> },
//   ];

//   const { items: sortedOrders, requestSort: requestSortOrder } =
//     useSortableData(orders);
//   const filteredOrders = sortedOrders.filter(
//     (o) =>
//       o.customer.toLowerCase().includes(ordersQuery.toLowerCase()) ||
//       o.medicine.toLowerCase().includes(ordersQuery.toLowerCase())
//   );
//   const ordersPageItems = filteredOrders.slice(
//     (ordersPage - 1) * ordersPageSize,
//     ordersPage * ordersPageSize
//   );

//   const { items: sortedMeds, requestSort: requestSortMed } =
//     useSortableData(medicines);
//   const filteredMeds = sortedMeds.filter(
//     (m) =>
//       m.name.toLowerCase().includes(medQuery.toLowerCase()) ||
//       m.category.toLowerCase().includes(medQuery.toLowerCase())
//   );
//   const medsPageItems = filteredMeds.slice(
//     (medPage - 1) * medPageSize,
//     medPage * medPageSize
//   );

//   return (
//     <div
//       className={`${
//         darkMode
//           ? "bg-gray-900 text-gray-100"
//           : "bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200"
//       } flex min-h-screen transition-all duration-700`}
//     >
//       {/* Sidebar */}
//       <aside
//         className={`${
//           sidebarOpen ? "w-64" : "w-20"
//         } transition-all duration-500 bg-gradient-to-b from-blue-900 via-purple-800 to-blue-700 flex flex-col text-white`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-white/20">
//           {sidebarOpen && (
//             <div className="flex items-center gap-2">
//               <img
//                 src={logo}
//                 alt="logo"
//                 className="w-10 h-10 rounded-full shadow-lg"
//               />
//               <span className="font-bold text-lg">Pharmacy</span>
//             </div>
//           )}
//           <button
//             onClick={() => setSidebarOpen((s) => !s)}
//             className="p-1 rounded hover:bg-white/20 transition"
//           >
//             <Menu size={20} />
//           </button>
//         </div>
//         <nav className="flex-1 p-3 space-y-1">
//           {menuItems.map((item) => (
//             <motion.div
//               key={item.name}
//               whileHover={{ scale: 1.05, rotate: 1 }}
//               className={`flex items-center gap-2 p-2 rounded hover:bg-white/20 cursor-pointer ${
//                 sidebarOpen ? "" : "justify-center"
//               }`}
//             >
//               {item.icon}
//               {sidebarOpen && <span>{item.name}</span>}
//             </motion.div>
//           ))}
//         </nav>
//         <div className="p-3 border-t border-white/20 flex justify-between">
//           <button
//             onClick={handleLogout}
//             className="flex items-center gap-2 px-3 py-2 rounded hover:bg-red-500 hover:text-white transition"
//           >
//             <LogOut size={16} /> {sidebarOpen && "Logout"}
//           </button>
//           <button
//             onClick={() => setDarkMode((d) => !d)}
//             className="p-2 rounded hover:bg-gray-400 transition"
//           >
//             {darkMode ? <Sun size={16} /> : <Moon size={16} />}
//           </button>
//         </div>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-6 space-y-8">
//         <h1 className="text-3xl font-bold animate-pulse">
//           Welcome, Pharmacist 👋
//         </h1>

//         {/* Orders */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-semibold text-xl">Customer Orders</h3>
//             <input
//               placeholder="Search orders..."
//               className="border px-3 py-1 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
//               value={ordersQuery}
//               onChange={(e) => {
//                 setOrdersQuery(e.target.value);
//                 setOrdersPage(1);
//               }}
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm rounded-lg">
//               <thead>
//                 <tr className="bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 dark:bg-gray-700 rounded-t-lg">
//                   <th
//                     className="p-3 cursor-pointer"
//                     onClick={() => requestSortOrder("id")}
//                   >
//                     Order ID
//                   </th>
//                   <th className="p-3">Customer</th>
//                   <th className="p-3">Medicine</th>
//                   <th className="p-3">Qty</th>
//                   <th className="p-3">Prescription</th>
//                   <th className="p-3">Payment</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {ordersPageItems.map((o, i) => (
//                   <tr
//                     key={o.id}
//                     className={`${
//                       i % 2 === 0
//                         ? "bg-gray-50 dark:bg-gray-800"
//                         : "bg-white dark:bg-gray-700"
//                     } hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-400 hover:to-yellow-300 transition-all duration-500`}
//                   >
//                     <td className="p-2 font-medium">#{o.id}</td>
//                     <td className="p-2">{o.customer}</td>
//                     <td className="p-2">{o.medicine}</td>
//                     <td className="p-2">{o.qty}</td>
//                     <td className="p-2">
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) =>
//                           handlePrescriptionUpload(o.id, e.target.files[0])
//                         }
//                         className="text-xs"
//                       />
//                       {prescriptions[o.id] && (
//                         <motion.img
//                           src={prescriptions[o.id]}
//                           alt="prescription"
//                           className="mt-1 w-20 h-20 object-cover rounded-lg shadow-lg"
//                           whileHover={{ scale: 1.1 }}
//                           transition={{ duration: 0.3 }}
//                         />
//                       )}
//                     </td>
//                     <td className="p-2 flex flex-col gap-2">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded hover:from-green-500 hover:to-blue-600 transition-all duration-500"
//                         onClick={() => handleStripePayment(o.id)}
//                       >
//                         Stripe
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-3 py-1 rounded hover:from-blue-500 hover:to-purple-600 transition-all duration-500"
//                         onClick={() => handleESWAPayment(o.id)}
//                       >
//                         ESWA
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-3 py-1 rounded hover:from-gray-500 hover:to-gray-700 transition-all duration-500"
//                         onClick={() => handleCODPayment(o.id)}
//                       >
//                         COD
//                       </motion.button>
//                       <span className="text-xs mt-1">{o.paymentStatus}</span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <TablePagination
//             total={filteredOrders.length}
//             page={ordersPage}
//             pageSize={ordersPageSize}
//             onPageChange={setOrdersPage}
//             onPageSizeChange={(s) => {
//               setOrdersPageSize(s);
//               setOrdersPage(1);
//             }}
//           />
//         </div>

//         {/* Medicines */}
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-semibold text-xl">Medicines</h3>
//             <input
//               placeholder="Search medicines..."
//               className="border px-3 py-1 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-200"
//               value={medQuery}
//               onChange={(e) => {
//                 setMedQuery(e.target.value);
//                 setMedPage(1);
//               }}
//             />
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full text-sm rounded-lg">
//               <thead>
//                 <tr className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 dark:bg-gray-700 rounded-t-lg">
//                   <th
//                     className="p-3 cursor-pointer"
//                     onClick={() => requestSortMed("id")}
//                   >
//                     ID
//                   </th>
//                   <th className="p-3">Name</th>
//                   <th className="p-3">Category</th>
//                   <th className="p-3">Stock</th>
//                   <th className="p-3">Expiry</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {medsPageItems.map((m, i) => (
//                   <tr
//                     key={m.id}
//                     className={`${
//                       i % 2 === 0
//                         ? "bg-gray-50 dark:bg-gray-800"
//                         : "bg-white dark:bg-gray-700"
//                     } hover:bg-gradient-to-r hover:from-green-400 hover:via-blue-400 hover:to-purple-300 transition-all duration-500`}
//                   >
//                     <td className="p-2 font-medium">{m.id}</td>
//                     <td className="p-2">{m.name}</td>
//                     <td className="p-2">{m.category}</td>
//                     <td className="p-2">{m.stock}</td>
//                     <td className="p-2">{m.expiryDate}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <TablePagination
//             total={filteredMeds.length}
//             page={medPage}
//             pageSize={medPageSize}
//             onPageChange={setMedPage}
//             onPageSizeChange={(s) => {
//               setMedPageSize(s);
//               setMedPage(1);
//             }}
//           />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PharmacistDashboard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Search,
  LogOut,
  Sun,
  Moon,
  Package,
  Users,
  ChevronDown,
  Menu,
  FileDown,
  Filter,
} from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Papa from "papaparse";
import jsPDF from "jspdf";
import "jspdf-autotable";
import avatar from "../assets/avatar.jpg";
import logo from "../assets/pharmacy-logo.jpg";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe("pk_test_12345"); // Replace with your real key

const PharmacistDashboard = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState("");
  const [uploadPreview, setUploadPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [prescriptions, setPrescriptions] = useState([
    {
      id: "RX001",
      patient: "Sandra Cook",
      doctor: "Dr. Harper",
      medication: "Trulicity (dulaglutide)",
      dosage: "8 Pre-filled pen",
      duration: "4 Weeks",
      status: "Pending",
    },
    {
      id: "RX002",
      patient: "Stephen Green",
      doctor: "Dr. Harper",
      medication: "Amoxicillin 250mg",
      dosage: "20 Tablets",
      duration: "2 Weeks",
      status: "Processing",
    },
    {
      id: "RX003",
      patient: "Maria Lopez",
      doctor: "Dr. James",
      medication: "Paracetamol 500mg",
      dosage: "15 Tablets",
      duration: "5 Days",
      status: "Completed",
    },
  ]);

  const analyticsData = [
    { month: "Jan", prescriptions: 80 },
    { month: "Feb", prescriptions: 120 },
    { month: "Mar", prescriptions: 100 },
    { month: "Apr", prescriptions: 150 },
    { month: "May", prescriptions: 130 },
    { month: "Jun", prescriptions: 180 },
    { month: "Jul", prescriptions: 220 },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handlePayment = async () => {
    if (selectedPayment === "stripe") {
      const stripe = await stripePromise;
      alert("Stripe payment initialized (demo).");
      await stripe.redirectToCheckout({ sessionId: "test_session_123" });
    } else if (selectedPayment === "esewa") {
      alert("Redirecting to eSewa...");
    } else if (selectedPayment === "cod") {
      alert("Cash on Delivery selected!");
    } else {
      alert("Please select a payment method.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Filtered and searched prescriptions
  const filteredPrescriptions = prescriptions.filter((p) => {
    const matchesSearch =
      p.patient.toLowerCase().includes(search.toLowerCase()) ||
      p.doctor.toLowerCase().includes(search.toLowerCase()) ||
      p.medication.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" ? true : p.status === filter;
    return matchesSearch && matchesFilter;
  });

  // Export to CSV
  const exportCSV = () => {
    const csv = Papa.unparse(prescriptions);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "prescriptions.csv";
    link.click();
  };

  // Export to PDF
  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Prescription Report", 14, 15);
    const tableColumn = [
      "ID",
      "Patient",
      "Doctor",
      "Medication",
      "Dosage",
      "Duration",
      "Status",
    ];
    const tableRows = prescriptions.map((p) => [
      p.id,
      p.patient,
      p.doctor,
      p.medication,
      p.dosage,
      p.duration,
      p.status,
    ]);
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 25,
      theme: "grid",
    });
    doc.save("prescriptions.pdf");
  };

  return (
    <div
      className={`flex min-h-screen transition-all duration-500 ${
        theme === "light" ? "bg-[#F2F2F2]" : "bg-[#3C4659]"
      }`}
    >
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-[#4A51D9] to-[#667BF2] text-white flex flex-col shadow-xl transition-all duration-500`}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-400">
          {sidebarOpen && (
            <div className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-10 rounded-full" />
              <span className="font-semibold text-lg">Pharmacy</span>
            </div>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu size={24} />
          </button>
        </div>
        <nav className="flex-1 p-4">
          {[
            { name: "Prescriptions", icon: <Package size={18} /> },
            { name: "Patients", icon: <Users size={18} /> },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: sidebarOpen ? 6 : 0 }}
              className="flex items-center gap-3 px-3 py-2 mb-2 rounded-lg hover:bg-[#5C9DF2]/40 cursor-pointer transition-all"
            >
              {item.icon}
              {sidebarOpen && <span>{item.name}</span>}
            </motion.div>
          ))}
        </nav>
        <div className="p-4 border-t border-blue-400">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-red-200 hover:text-red-400 transition"
          >
            <LogOut size={18} /> {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1
            className={`text-3xl font-bold ${
              theme === "light" ? "text-[#3C4659]" : "text-white"
            }`}
          >
            Pharmacist Dashboard 💊
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 shadow">
              <Search size={18} className="text-gray-500" />
              <input
                type="text"
                placeholder="Search prescription..."
                className="outline-none text-gray-600 w-48"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Bell className="cursor-pointer text-[#5C9DF2]" size={24} />
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <Moon className="text-gray-700" />
              ) : (
                <Sun className="text-yellow-300" />
              )}
            </button>
            <div className="relative group cursor-pointer">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <ChevronDown className="absolute right-0 bottom-0 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Search + Filter + Export */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
          <div className="flex items-center gap-2">
            <Filter className="text-[#4A51D9]" size={20} />
            <select
              className="border rounded-lg px-3 py-2 text-sm outline-none text-[#3C4659]"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Processing</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="flex gap-3">
            <button
              onClick={exportCSV}
              className="flex items-center gap-1 bg-[#4A51D9] text-white px-3 py-2 rounded-lg hover:bg-[#5C9DF2] transition"
            >
              <FileDown size={16} /> CSV
            </button>
            <button
              onClick={exportPDF}
              className="flex items-center gap-1 bg-[#5C9DF2] text-white px-3 py-2 rounded-lg hover:bg-[#667BF2] transition"
            >
              <FileDown size={16} /> PDF
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <h2 className="text-xl font-semibold text-[#3C4659] mb-4">
            Prescription Overview
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-[#667BF2]/10 text-[#3C4659]">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Patient</th>
                  <th className="py-3 px-4">Doctor</th>
                  <th className="py-3 px-4">Medication</th>
                  <th className="py-3 px-4">Dosage</th>
                  <th className="py-3 px-4">Duration</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredPrescriptions.map((p) => (
                  <tr
                    key={p.id}
                    className="hover:bg-[#5C9DF2]/10 transition-all duration-300"
                  >
                    <td className="py-2 px-4">{p.id}</td>
                    <td className="py-2 px-4">{p.patient}</td>
                    <td className="py-2 px-4">{p.doctor}</td>
                    <td className="py-2 px-4">{p.medication}</td>
                    <td className="py-2 px-4">{p.dosage}</td>
                    <td className="py-2 px-4">{p.duration}</td>
                    <td className="py-2 px-4 font-medium text-[#4A51D9]">
                      {p.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Keep your payment + analytics sections below here */}
      </main>
    </div>
  );
};

export default PharmacistDashboard;
