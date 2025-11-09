// import React, { useState } from "react";
// import {
//   ShoppingBag,
//   Clock,
//   Heart,
//   User,
//   LogOut,
//   Menu,
//   Search,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const CustomerDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [search, setSearch] = useState("");

//   const orders = [
//     {
//       id: "ORD001",
//       medicine: "Paracetamol",
//       date: "2025-11-01",
//       status: "Delivered",
//       total: "$15",
//     },
//     {
//       id: "ORD002",
//       medicine: "Cough Syrup",
//       date: "2025-11-02",
//       status: "Pending",
//       total: "$10",
//     },
//   ];

//   const favorites = [
//     { id: "MED001", name: "Ibuprofen", price: "$8.50" },
//     { id: "MED002", name: "Amoxicillin", price: "$12.00" },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside
//         className={`bg-blue-800 text-white transition-all duration-300 shadow-lg ${
//           sidebarOpen ? "w-64" : "w-20"
//         }`}
//       >
//         <div className="flex justify-between items-center p-4 border-b border-blue-600">
//           {sidebarOpen && <h2 className="text-xl font-bold">My Pharmacy</h2>}
//           <button onClick={() => setSidebarOpen(!sidebarOpen)}>
//             <Menu size={22} />
//           </button>
//         </div>

//         <nav className="p-4 space-y-3">
//           <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
//             <ShoppingBag size={18} /> {sidebarOpen && "My Orders"}
//           </div>
//           <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
//             <Heart size={18} /> {sidebarOpen && "Wishlist"}
//           </div>
//           <div className="flex items-center gap-3 hover:bg-blue-700 p-2 rounded cursor-pointer">
//             <User size={18} /> {sidebarOpen && "Profile"}
//           </div>
//           <div className="flex items-center gap-3 text-red-300 hover:text-red-500 cursor-pointer mt-6">
//             <LogOut size={18} /> {sidebarOpen && "Logout"}
//           </div>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold">Welcome Back 👋</h1>
//           <div className="flex items-center bg-white px-3 py-1 rounded-full shadow">
//             <Search size={18} />
//             <input
//               type="text"
//               placeholder="Search medicines..."
//               className="ml-2 outline-none"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Recent Orders */}
//         <div className="bg-white p-6 rounded-xl shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//             <Clock className="text-blue-600" /> Recent Orders
//           </h2>
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="border-b">
//                 <th>ID</th>
//                 <th>Medicine</th>
//                 <th>Date</th>
//                 <th>Status</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((o) => (
//                 <tr key={o.id} className="border-b hover:bg-gray-100">
//                   <td>{o.id}</td>
//                   <td>{o.medicine}</td>
//                   <td>{o.date}</td>
//                   <td>{o.status}</td>
//                   <td>{o.total}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Wishlist */}
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//             <Heart className="text-pink-600" /> My Wishlist
//           </h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {favorites.map((med) => (
//               <motion.div
//                 key={med.id}
//                 whileHover={{ scale: 1.03 }}
//                 className="border p-4 rounded-lg shadow-sm hover:shadow-md flex justify-between items-center"
//               >
//                 <div>
//                   <p className="font-semibold">{med.name}</p>
//                   <p className="text-sm text-gray-500">{med.price}</p>
//                 </div>
//                 <button className="bg-blue-600 text-white px-3 py-1 rounded">
//                   Buy
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CustomerDashboard;

import React, { useState } from "react";
import {
  Bell,
  ShoppingCart,
  User,
  Search,
  Package,
  HeartPulse,
  MessageCircle,
  CreditCard,
  Upload,
  Truck,
  CheckCircle,
  Clock,
  Wallet,
  X,
} from "lucide-react";
//import "./CustomerDashboard.css";

const CustomerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  const orders = [
    {
      id: "ORD-1023",
      medicine: "Paracetamol 500mg",
      quantity: 2,
      price: 120,
      status: "Delivered",
      date: "2025-11-04",
      progress: 100,
    },
    {
      id: "ORD-1040",
      medicine: "Cough Syrup",
      quantity: 1,
      price: 240,
      status: "Shipped",
      date: "2025-11-07",
      progress: 70,
    },
    {
      id: "ORD-1055",
      medicine: "Vitamin C Tablets",
      quantity: 3,
      price: 300,
      status: "Processing",
      date: "2025-11-02",
      progress: 40,
    },
  ];

  const recommended = [
    {
      id: 1,
      name: "Amoxicillin 250mg",
      price: 350,
      image: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
    },
    {
      id: 2,
      name: "Ibuprofen 400mg",
      price: 280,
      image: "https://cdn-icons-png.flaticon.com/512/387/387561.png",
    },
    {
      id: 3,
      name: "Vitamin D Capsules",
      price: 400,
      image: "https://cdn-icons-png.flaticon.com/512/3405/3405802.png",
    },
    {
      id: 4,
      name: "Cetrizine Tablets",
      price: 150,
      image: "https://cdn-icons-png.flaticon.com/512/4257/4257465.png",
    },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-all">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-white dark:bg-gray-800 p-4 flex flex-col justify-between border-r border-gray-200 dark:border-gray-700 transition-all duration-300`}
      >
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-8"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {sidebarOpen ? "MyPharma" : "💊"}
            </h1>
          </div>
          <nav className="space-y-3">
            {[
              { icon: ShoppingCart, label: "My Orders" },
              { icon: Package, label: "Medicines" },
              { icon: User, label: "Profile" },
              { icon: MessageCircle, label: "Support" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800 p-2 rounded-lg cursor-pointer transition"
              >
                <item.icon size={20} />
                {sidebarOpen && <span>{item.label}</span>}
              </div>
            ))}
          </nav>
        </div>
        <div
          className="flex items-center space-x-3 mt-auto cursor-pointer hover:bg-green-100 dark:hover:bg-green-800 p-2 rounded-lg"
          onClick={() => setShowWalletModal(true)}
        >
          <Wallet className="text-green-500" />
          {sidebarOpen && <span>Wallet</span>}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl px-3 py-2 shadow w-1/3">
            <Search className="text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search medicines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent w-full pl-2 outline-none text-gray-700 dark:text-gray-300"
            />
          </div>

          <div className="flex items-center space-x-4">
            <Bell className="text-gray-600 dark:text-gray-300 cursor-pointer hover:text-blue-500" />
            <img
              src="https://i.pravatar.cc/40"
              alt="avatar"
              className="w-9 h-9 rounded-full border-2 border-blue-500 cursor-pointer"
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              title: "Wallet Balance",
              value: "₹2,540",
              icon: CreditCard,
              color: "text-green-500",
            },
            {
              title: "Active Orders",
              value: 2,
              icon: ShoppingCart,
              color: "text-blue-500",
            },
            {
              title: "Loyalty Points",
              value: 125,
              icon: HeartPulse,
              color: "text-pink-500",
            },
            {
              title: "Expiring Medicines",
              value: 3,
              icon: Package,
              color: "text-yellow-500",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="card flex items-center justify-between p-5 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition"
            >
              <div>
                <p className="text-gray-600 dark:text-gray-400">{card.title}</p>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {card.value}
                </h3>
              </div>
              <card.icon className={`${card.color} w-8 h-8`} />
            </div>
          ))}
        </div>

        {/* Prescription Upload */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow mb-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Upload Doctor’s Prescription
          </h2>
          <label
            htmlFor="prescription"
            className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 dark:border-blue-700 rounded-xl p-6 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition"
          >
            <Upload className="text-blue-500 mb-2" size={28} />
            <p className="text-gray-600 dark:text-gray-300">
              Click or drag to upload prescription image
            </p>
            <input
              type="file"
              id="prescription"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
            {uploadedImage && (
              <img
                src={uploadedImage}
                alt="Prescription Preview"
                className="w-40 h-40 object-cover mt-4 rounded-xl shadow"
              />
            )}
          </label>
        </div>

        {/* Orders Table with Progress */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow mb-10">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            My Orders
          </h2>
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500 dark:text-gray-400">
                <th className="pb-3">Order ID</th>
                <th className="pb-3">Medicine</th>
                <th className="pb-3">Price</th>
                <th className="pb-3">Status</th>
                <th className="pb-3">Progress</th>
                <th className="pb-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr
                  key={o.id}
                  className="border-b dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/40"
                >
                  <td className="py-2">{o.id}</td>
                  <td>{o.medicine}</td>
                  <td>₹{o.price}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        o.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : o.status === "Shipped"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}
                    >
                      {o.status}
                    </span>
                  </td>
                  <td>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          o.progress === 100
                            ? "bg-green-500"
                            : o.progress > 60
                            ? "bg-blue-500"
                            : "bg-yellow-500"
                        }`}
                        style={{ width: `${o.progress}%` }}
                      ></div>
                    </div>
                  </td>
                  <td>{o.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Recommended Medicines */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Recommended Medicines
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommended.map((med) => (
              <div
                key={med.id}
                className="card bg-white dark:bg-gray-800 p-4 rounded-2xl shadow hover:shadow-xl cursor-pointer"
                onClick={() => setShowPaymentModal(true)}
              >
                <img
                  src={med.image}
                  alt={med.name}
                  className="w-20 h-20 mx-auto mb-3 object-contain"
                />
                <h4 className="text-center text-gray-800 dark:text-gray-100 font-medium">
                  {med.name}
                </h4>
                <p className="text-center text-blue-600 dark:text-blue-400 mt-1">
                  ₹{med.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* 💰 Wallet Modal */}
      {showWalletModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-96 relative shadow-xl">
            <button
              onClick={() => setShowWalletModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Top-up Wallet
            </h2>
            <input
              type="number"
              placeholder="Enter amount (₹)"
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 mb-4"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Add Funds
            </button>
          </div>
        </div>
      )}

      {/* 💳 Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl w-96 relative shadow-xl">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
            >
              <X size={20} />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Select Payment Method
            </h2>
            <div className="space-y-3 mb-4">
              {["eSewa", "Khalti", "Stripe", "Cash on Delivery"].map(
                (method) => (
                  <label
                    key={method}
                    className={`flex items-center justify-between border rounded-lg p-3 cursor-pointer ${
                      paymentMethod === method
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/40"
                        : "border-gray-300 dark:border-gray-700"
                    }`}
                  >
                    <span>{method}</span>
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />
                  </label>
                )
              )}
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg">
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerDashboard;
