import React from "react";
import { Home, Users, Box, LogOut } from "lucide-react";

const Sidebar = ({ userRole }) => {
  return (
    <div
      style={{
        width: "250px",
        background: "#1f2937",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h2>Pharmacy Admin</h2>
      <nav style={{ marginTop: "30px" }}>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <Home size={20} style={{ marginRight: "8px" }} />
            Dashboard
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Users size={20} style={{ marginRight: "8px" }} />
            Users
          </li>
          <li style={{ marginBottom: "15px" }}>
            <Box size={20} style={{ marginRight: "8px" }} />
            Medicines
          </li>
          <li style={{ marginBottom: "15px" }}>
            <LogOut size={20} style={{ marginRight: "8px" }} />
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
