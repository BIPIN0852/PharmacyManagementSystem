// import React from "react";
// import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Inventory from "./pages/Inventory";
// import SalesBilling from "./pages/SalesBilling";

// const Home = () => (
//   <div style={{ textAlign: "center", marginTop: "5rem" }}>
//     <h1>🏥 Pharmacy Dashboard (Demo)</h1>
//     <p>Welcome to your Pharmacy Management System.</p>
//     <Link to="/inventory">
//       <button>Go to Inventory</button>
//     </Link>
//     <button
//       style={{ marginLeft: "1rem" }}
//       onClick={() => {
//         localStorage.removeItem("user");
//         window.location.href = "/login";
//       }}
//     >
//       Logout
//     </button>
//   </div>
// );

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <ProtectedRoute>
//                 <Home />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/inventory"
//             element={
//               <ProtectedRoute>
//                 <Inventory />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="*" element={<Navigate to="/login" replace />} />
//           <Route
//             path="/billing"
//             element={
//               <ProtectedRoute>
//                 <SalesBilling />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route path="*" element={<Navigate to="/login" />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

// // ✅ Inline private route logic
// const PrivateRoute = ({ children }) => {
//   const { user } = useAuth();
//   return user ? children : <Navigate to="/login" replace />;
// };

// function App() {
//   console.log("✅ App.jsx rendered");

//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Protected Route */}
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />

//           {/* Redirect any unknown route to login */}
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { AuthProvider, useAuth } from "./context/AuthContext";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AdminDashboard from "./pages/AdminDashboard";
// import PharmacistDashboard from "./pages/PharmacistDashboard";
// import CustomerDashboard from "./pages/CustomerDashboard";

// // PrivateRoute component
// // const PrivateRoute = ({ children, allowedRoles }) => {
// //   const { user } = useAuth();

// //   if (!user) return <Navigate to="/login" replace />;

// //   // If allowedRoles is defined, check if user's role is allowed
// //   if (allowedRoles && !allowedRoles.includes(user.role)) {
// //     // Redirect unauthorized users
// //     return <Navigate to="/login" replace />;
// //   }

// //   return children;
// // };

// // Role-based dashboard redirection
// const DashboardRedirect = () => {
//   const { user } = useAuth();

//   if (!user) return <Navigate to="/login" replace />;

//   switch (user.role) {
//     case "admin":
//       return <Navigate to="/admin-dashboard" replace />;
//     case "pharmacist":
//       return <Navigate to="/pharmacist-dashboard" replace />;
//     case "customer":
//       return <Navigate to="/dashboard" replace />;
//     default:
//       return <Navigate to="/login" replace />;
//   }
// };

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* Dashboard Route redirects based on role */}
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <DashboardRedirect />
//               </PrivateRoute>
//             }
//           />

//           {/* Admin Dashboard */}
//           <Route
//             path="/admin-dashboard"
//             element={
//               <PrivateRoute allowedRoles={["admin"]}>
//                 <AdminDashboard />
//               </PrivateRoute>
//             }
//           />

//           {/* Pharmacist Dashboard */}
//           <Route
//             path="/pharmacist-dashboard"
//             element={
//               <PrivateRoute allowedRoles={["pharmacist"]}>
//                 <PharmacistDashboard />
//               </PrivateRoute>
//             }
//           />

//           {/* Customer Dashboard */}
//           <Route
//             path="/customer-dashboard"
//             element={
//               <PrivateRoute allowedRoles={["customer"]}>
//                 <CustomerDashboard />
//               </PrivateRoute>
//             }
//           />

//           {/* Redirect unknown routes to login */}
//           <Route path="*" element={<Navigate to="/login" replace />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import PharmacistDashboard from "./pages/PharmacistDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import Home from "./pages/Home";
import OrderConfirmation from "./components/OrderConfirm";

// 🔒 PrivateRoute with role-based access
const PrivateRoute = ({ children, allowedRoles }) => {
  const { user, initLoading } = useAuth();

  // Wait until AuthContext finishes initializing
  if (initLoading) return <div>Loading...</div>;

  // Not logged in → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // Role-based access check
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

// 🌐 Dashboard Redirector (for /dashboard route)
const DashboardRedirect = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;

  switch (user.role) {
    case "admin":
      return <Navigate to="/admin-dashboard" replace />;
    case "pharmacist":
      return <Navigate to="/pharmacist-dashboard" replace />;
    case "customer":
      return <Navigate to="/customer-dashboard" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🟢 Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 🔐 Role Redirect Route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardRedirect />
              </PrivateRoute>
            }
          />

          {/* 🛠 Admin Dashboard */}
          <Route
            path="/admin-dashboard"
            element={
              <PrivateRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />

          {/* 💊 Pharmacist Dashboard */}
          <Route
            path="/pharmacist-dashboard"
            element={
              <PrivateRoute allowedRoles={["pharmacist"]}>
                <PharmacistDashboard />
              </PrivateRoute>
            }
          />

          {/* 👤 Customer Dashboard */}
          <Route
            path="/customer-dashboard"
            element={
              <PrivateRoute allowedRoles={["customer"]}>
                <CustomerDashboard />
              </PrivateRoute>
            }
          />

          <Route path="/payment-success" element={<OrderConfirmation />} />

          {/* 🚫 Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
