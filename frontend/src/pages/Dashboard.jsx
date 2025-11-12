import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      window.history.replaceState({}, document.title, "/dashboard"); // remove ?token from URL
    }
  }, [location]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>✅ Logged in successfully with Google!</h2>
      <p>Token saved to localStorage.</p>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  console.log("✅ Dashboard component loaded");

  const { user, logout } = useAuth();
  const [stats, setStats] = useState({
    medicines: 0,
    sales: 0,
    users: 0,
  });

  useEffect(() => {
    // simulate data fetch
    setTimeout(() => {
      setStats({
        medicines: 145,
        sales: 76,
        users: 12,
      });
    }, 1000);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f0f4f8",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#2c3e50" }}>🏥 Pharmacy Dashboard</h1>
      <p style={{ color: "#34495e" }}>
        Welcome back, <strong>{user?.name || "Admin"}</strong>!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        <DashboardCard title="💊 Medicines" value={stats.medicines} />
        <DashboardCard title="🧾 Sales" value={stats.sales} />
        <DashboardCard title="👥 Users" value={stats.users} />
      </div>

      <button
        onClick={logout}
        style={{
          marginTop: "3rem",
          backgroundColor: "#e74c3c",
          color: "#fff",
          border: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Logout
      </button>
    </div>
  );
};

const DashboardCard = ({ title, value }) => (
  <div
    style={{
      backgroundColor: "#fff",
      padding: "1.5rem",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "180px",
    }}
  >
    <h3 style={{ color: "#2c3e50" }}>{title}</h3>
    <p style={{ fontSize: "1.5rem", color: "#16a085" }}>{value}</p>
  </div>
);

export default Dashboard;
