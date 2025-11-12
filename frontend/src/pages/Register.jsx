// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const { register, error, loading } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(name, email, password);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
//       <h2>🧾 Register - Pharmacy System</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <button disabled={loading} style={{ padding: "10px 20px" }}>
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const { register, error, loading, user } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [role, setRole] = useState("customer");
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword) {
//       alert("Please fill all required fields");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     await register(name, email, password, role, phone);
//   };

//   if (user) navigate("/dashboard"); // redirect if logged in

//   return (
//     <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
//       <h2>📝 Register - Pharmacy System</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />

//         {/* Password Field */}
//         <div style={{ position: "relative", margin: "10px 0" }}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", padding: "8px" }}
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: "50%",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>

//         {/* Confirm Password Field */}
//         <div style={{ position: "relative", margin: "10px 0" }}>
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="Re-enter Password"
//             required
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             style={{ width: "100%", padding: "8px" }}
//           />
//           <span
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: "50%",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             {showConfirmPassword ? "🙈" : "👁️"}
//           </span>
//         </div>

//         {/* Role dropdown */}
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         >
//           <option value="customer">Customer</option>
//           <option value="pharmacist">Pharmacist</option>
//           <option value="admin">Admin</option>
//         </select>

//         {/* Phone field */}
//         <input
//           type="text"
//           placeholder="Phone (optional)"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />

//         <button disabled={loading} style={{ padding: "10px 20px" }}>
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

// import React, { useState, useEffect } from "react"; // added useEffect
// import { useAuth } from "../context/AuthContext";
// import { Link, useNavigate } from "react-router-dom";

// const Register = () => {
//   const { register, error, loading, user } = useAuth();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [role, setRole] = useState("customer");
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !confirmPassword) {
//       alert("Please fill all required fields");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     await register(name, email, password, role, phone);
//   };

//   // ✅ Move navigation inside useEffect
//   useEffect(() => {
//     if (user) {
//       switch (user.role) {
//         case "admin":
//           navigate("/admin-dashboard");
//           break;
//         case "pharmacist":
//           navigate("/pharmacist-dashboard");
//           break;
//         default:
//           navigate("/dashboard");
//       }
//     }
//   }, [user, navigate]);

//   return (
//     <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
//       <h2>📝 Register - Pharmacy System</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />

//         {/* Password Field */}
//         <div style={{ position: "relative", margin: "10px 0" }}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", padding: "8px" }}
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: "50%",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>

//         {/* Confirm Password Field */}
//         <div style={{ position: "relative", margin: "10px 0" }}>
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             placeholder="Re-enter Password"
//             required
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             style={{ width: "100%", padding: "8px" }}
//           />
//           <span
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: "50%",
//               transform: "translateY(-50%)",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             {showConfirmPassword ? "🙈" : "👁️"}
//           </span>
//         </div>

//         {/* Role dropdown */}
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         >
//           <option value="customer">Customer</option>
//           <option value="pharmacist">Pharmacist</option>
//           <option value="admin">Admin</option>
//         </select>

//         {/* Phone field */}
//         <input
//           type="text"
//           placeholder="Phone (optional)"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />

//         <button disabled={loading} style={{ padding: "10px 20px" }}>
//           {loading ? "Registering..." : "Register"}
//         </button>
//       </form>

//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// };

// export default Register;

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import pharmacyHero from "../assets/register.jpg"; // same image as login for consistency
import "tailwindcss";

const Register = () => {
  const { register, error, loading, user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [role, setRole] = useState("customer");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all required fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await register(name, email, password, role, phone);
  };

  // ✅ Redirect after registration
  useEffect(() => {
    if (user) {
      switch (user.role) {
        case "admin":
          navigate("/admin-dashboard");
          break;
        case "pharmacist":
          navigate("/pharmacist-dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    }
  }, [user, navigate]);

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>💊 Join Smart Pharmacy System</h1>
        <marquee behavior="scroll" direction="left" style={styles.marquee}>
          🌟 Register today and access 24/7 Medicine Services | 💊 Manage Orders
          | 💉 Trusted Health Platform | 🏥 One Stop for Healthcare!
        </marquee>
      </header>

      {/* Main Section */}
      <div style={styles.content}>
        {/* Left - Info & Image */}
        <div style={styles.left}>
          <img src={pharmacyHero} alt="Pharmacy" style={styles.heroImage} />
          <h2 style={styles.slogan}>
            Simplify Your Health Journey with Smart Pharmacy 💚
          </h2>
          <p style={styles.description}>
            Create your account as a customer, pharmacist, or admin to get
            started. Track medicines, manage inventory, and connect with
            professionals instantly.
          </p>
        </div>

        {/* Right - Registration Form */}
        <div style={styles.right}>
          <h2 style={styles.formTitle}>📝 Create Your Account</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />

            {/* Password */}
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={styles.input}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Confirm Password */}
            <div style={{ position: "relative" }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={styles.input}
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeIcon}
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {/* Role Selection */}
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
            >
              <option value="customer">Customer</option>
              <option value="pharmacist">Pharmacist</option>
              <option value="admin">Admin</option>
            </select>

            {/* Phone Field */}
            <input
              type="text"
              placeholder="Phone (optional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={styles.input}
            />

            <button type="submit" disabled={loading} style={styles.button}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          {error && <p style={styles.error}>{error}</p>}

          <p style={styles.footerText}>
            Already have an account?{" "}
            <Link to="/login" style={styles.link}>
              Login here
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Smart Pharmacy System | All Rights Reserved
      </footer>
    </div>
  );
};

// -------------------------
// Modern Styling
// -------------------------
const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    color: "#333",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    margin: 0,
    fontSize: "1.6rem",
    fontWeight: "600",
  },
  marquee: {
    marginTop: "8px",
    color: "#fff",
    fontSize: "0.95rem",
  },
  content: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    gap: "3rem",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "500px",
    textAlign: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  slogan: {
    marginTop: "1rem",
    fontSize: "1.3rem",
    fontWeight: "600",
    color: "#28a745",
  },
  description: {
    fontSize: "0.95rem",
    marginTop: "0.5rem",
    color: "#555",
  },
  right: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "400px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    padding: "2rem",
    textAlign: "center",
  },
  formTitle: {
    marginBottom: "1.5rem",
    fontWeight: "600",
    color: "#28a745",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    outline: "none",
    transition: "0.3s",
  },
  select: {
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%",
    outline: "none",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  footerText: {
    marginTop: "10px",
    fontSize: "0.95rem",
  },
  link: {
    color: "#28a745",
    textDecoration: "none",
    fontWeight: "500",
  },
  footer: {
    backgroundColor: "#f1f1f1",
    textAlign: "center",
    padding: "10px",
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default Register;
