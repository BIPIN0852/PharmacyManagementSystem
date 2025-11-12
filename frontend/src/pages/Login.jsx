// import React, { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import { Link } from "react-router-dom";

// const Login = () => {
//   const { login, error, loading } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     login(email, password);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
//       <h2>🔐 Login - Pharmacy Management System</h2>
//       <form onSubmit={handleSubmit}>
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
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         Don’t have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import googleLogo from "../assets/google-logo.png";

// const Login = () => {
//   const { login, error, loading, user } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle Google OAuth token in URL
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const token = params.get("token");
//     if (token) {
//       localStorage.setItem("token", token);
//       // Optionally fetch user info from backend /api/auth/me
//       navigate("/dashboard");
//     }
//   }, [location, navigate]);

//   // Redirect based on role if user already logged in
//   useEffect(() => {
//     if (user) {
//       switch (user.role) {
//         case "admin":
//           navigate("/admin-dashboard");
//           break;
//         case "pharmacist":
//           navigate("/pharmacist-dashboard");
//           break;
//         case "staff":
//           navigate("/customer-dashboard");
//           break;
//         default:
//           navigate("/dashboard");
//       }
//     }
//   }, [user, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Please enter both email and password");
//       return;
//     }
//     await login(email, password);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
//       <h2>🔐 Login - Pharmacy System</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <div style={{ position: "relative" }}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: 15,
//               cursor: "pointer",
//             }}
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>
//         <button disabled={loading} style={{ padding: "10px 20px" }}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       <div style={{ margin: "15px 0" }}>
//         <a
//           href="http://localhost:5000/api/auth/google"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             textDecoration: "none",
//             border: "1px solid #ccc",
//             padding: "8px",
//             borderRadius: "5px",
//           }}
//         >
//           <img
//             src={googleLogo}
//             alt="Google"
//             style={{ width: 20, marginRight: 8 }}
//           />
//           Login with Google
//         </a>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         Don’t have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import googleLogo from "../assets/google-logo.png";

// const Login = () => {
//   const { login, error, loading, user } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle Google OAuth token in URL
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const token = params.get("token");
//     if (token) {
//       localStorage.setItem("token", token);
//       // Optionally fetch user info from backend /api/auth/me
//       navigate("/dashboard");
//     }
//   }, [location, navigate]);

//   // ✅ Role-based redirect if user already logged in
//   useEffect(() => {
//     if (user) {
//       const redirect = () => {
//         switch (user.role) {
//           case "admin":
//             navigate("/admin-dashboard");
//             break;
//           case "pharmacist":
//             navigate("/pharmacist-dashboard");
//             break;
//           case "staff":
//             navigate("/customer-dashboard");
//             break;
//           default:
//             navigate("/dashboard");
//         }
//       };
//       redirect();
//     }
//   }, [user, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Please enter both email and password");
//       return;
//     }
//     await login(email, password);
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: "5rem auto", textAlign: "center" }}>
//       <h2>🔐 Login - Pharmacy System</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//         />
//         <div style={{ position: "relative" }}>
//           <input
//             type={showPassword ? "text" : "password"}
//             placeholder="Password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: "100%", margin: "10px 0", padding: "8px" }}
//           />
//           <span
//             onClick={() => setShowPassword(!showPassword)}
//             style={{
//               position: "absolute",
//               right: 10,
//               top: 15,
//               cursor: "pointer",
//             }}
//           >
//             {showPassword ? "🙈" : "👁️"}
//           </span>
//         </div>
//         <button disabled={loading} style={{ padding: "10px 20px" }}>
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       <div style={{ margin: "15px 0" }}>
//         <a
//           href="http://localhost:5000/api/auth/google"
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             textDecoration: "none",
//             border: "1px solid #ccc",
//             padding: "8px",
//             borderRadius: "5px",
//           }}
//         >
//           <img
//             src={googleLogo}
//             alt="Google"
//             style={{ width: 20, marginRight: 8 }}
//           />
//           Login with Google
//         </a>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       <p>
//         Don’t have an account? <Link to="/register">Register</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

// import React, { useState, useEffect } from "react";
// import { useAuth } from "../context/AuthContext";
// import { useNavigate, Link, useLocation } from "react-router-dom";
// import googleLogo from "../assets/google-logo.png";
// import pharmacyHero from "../assets/pharmacy.jpg"; // add a nice pharmacy/healthcare image to your assets folder
// import "tailwindcss";
// const Login = () => {
//   const { login, error, loading, user } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Handle Google OAuth token in URL
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const token = params.get("token");
//     if (token) {
//       localStorage.setItem("token", token);
//       navigate("/dashboard");
//     }
//   }, [location, navigate]);

//   // Redirect logged-in users by role
//   useEffect(() => {
//     if (user) {
//       switch (user.role) {
//         case "admin":
//           navigate("/admin-dashboard");
//           break;
//         case "pharmacist":
//           navigate("/pharmacist-dashboard");
//           break;
//         case "customer":
//           navigate("/customer-dashboard");
//           break;
//         default:
//           navigate("/dashboard");
//       }
//     }
//   }, [user, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Please enter both email and password");
//       return;
//     }
//     await login(email, password);
//   };

//   return (
//     <div className="login-container" style={styles.container}>
//       {/* Header Section */}
//       <header style={styles.header}>
//         <h1 style={styles.title}>💊 Welcome to Smart Pharmacy System</h1>
//         <marquee behavior="scroll" direction="left" style={styles.marquee}>
//           🚑 24/7 Online Medicine Ordering | 💉 Get Discounts on Prescriptions |
//           🏥 Trusted by 10,000+ Customers | 🌿 Health is Wealth!
//         </marquee>
//       </header>

//       {/* Main Content */}
//       <div style={styles.content}>
//         {/* Left Side - Hero / Info */}
//         <div style={styles.left}>
//           <img src={pharmacyHero} alt="Pharmacy" style={styles.heroImage} />
//           <h2 style={styles.slogan}>
//             Your Trusted Partner for Health and Wellness 🌿
//           </h2>
//           <p style={styles.description}>
//             Manage prescriptions, track medicine stock, and connect with
//             pharmacists easily. Simplify healthcare management in one place.
//           </p>
//         </div>

//         {/* Right Side - Login Form */}
//         <div style={styles.right}>
//           <h2 style={styles.loginTitle}>🔐 Login to Continue</h2>
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={styles.input}
//             />
//             <div style={{ position: "relative" }}>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 style={styles.input}
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 style={styles.eyeIcon}
//               >
//                 {showPassword ? "🙈" : "👁️"}
//               </span>
//             </div>
//             <button type="submit" disabled={loading} style={styles.button}>
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </form>

//           <div style={{ margin: "15px 0" }}>
//             <a
//               href="http://localhost:5000/api/auth/google"
//               style={styles.googleBtn}
//             >
//               <img
//                 src={googleLogo}
//                 alt="Google"
//                 style={{ width: 20, marginRight: 8 }}
//               />
//               Login with Google
//             </a>
//           </div>

//           {error && <p style={styles.error}>{error}</p>}
//           <p style={styles.registerText}>
//             Don’t have an account?{" "}
//             <Link to="/register" style={styles.link}>
//               Register here
//             </Link>
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <footer style={styles.footer}>
//         © {new Date().getFullYear()} Smart Pharmacy System | All Rights Reserved
//       </footer>
//     </div>
//   );
// };

// // -------------------------
// // Inline Styles
// // -------------------------
// const styles = {
//   container: {
//     fontFamily: "Poppins, sans-serif",
//     color: "#333",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//   },
//   header: {
//     backgroundColor: "#007bff",
//     color: "white",
//     padding: "1rem",
//     textAlign: "center",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   title: {
//     margin: 0,
//     fontSize: "1.6rem",
//     fontWeight: "600",
//   },
//   marquee: {
//     marginTop: "8px",
//     color: "#fff",
//     fontSize: "0.95rem",
//   },
//   content: {
//     display: "flex",
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "2rem",
//     gap: "3rem",
//     flexWrap: "wrap",
//   },
//   left: {
//     flex: 1,
//     minWidth: "300px",
//     maxWidth: "500px",
//     textAlign: "center",
//   },
//   heroImage: {
//     width: "100%",
//     maxWidth: "450px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
//   },
//   slogan: {
//     marginTop: "1rem",
//     fontSize: "1.3rem",
//     fontWeight: "600",
//     color: "#007bff",
//   },
//   description: {
//     fontSize: "0.95rem",
//     marginTop: "0.5rem",
//     color: "#555",
//   },
//   right: {
//     flex: 1,
//     minWidth: "300px",
//     maxWidth: "400px",
//     backgroundColor: "white",
//     borderRadius: "12px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     padding: "2rem",
//     textAlign: "center",
//   },
//   loginTitle: {
//     marginBottom: "1.5rem",
//     fontWeight: "600",
//     color: "#007bff",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   input: {
//     padding: "10px",
//     marginBottom: "12px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     width: "100%",
//     outline: "none",
//     transition: "0.3s",
//   },
//   eyeIcon: {
//     position: "absolute",
//     right: 10,
//     top: 12,
//     cursor: "pointer",
//   },
//   button: {
//     backgroundColor: "#007bff",
//     color: "white",
//     padding: "10px",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },
//   googleBtn: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textDecoration: "none",
//     border: "1px solid #ccc",
//     padding: "8px",
//     borderRadius: "5px",
//     backgroundColor: "#fff",
//   },
//   error: {
//     color: "red",
//     marginTop: "10px",
//   },
//   registerText: {
//     marginTop: "10px",
//     fontSize: "0.95rem",
//   },
//   link: {
//     color: "#007bff",
//     textDecoration: "none",
//     fontWeight: "500",
//   },
//   footer: {
//     backgroundColor: "#f1f1f1",
//     textAlign: "center",
//     padding: "10px",
//     fontSize: "0.9rem",
//     color: "#555",
//   },
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link, useLocation } from "react-router-dom";
import googleLogo from "../assets/google-logo.png";
import pharmacyHero from "../assets/pharmacy.jpg"; // add a nice pharmacy/healthcare image to your assets folder
import "tailwindcss";
const Login = () => {
  const { login, error, loading, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle Google OAuth token in URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  }, [location, navigate]);

  // Redirect logged-in users by role
  useEffect(() => {
    if (user) {
      switch (user.role) {
        case "admin":
          navigate("/admin-dashboard");
          break;
        case "pharmacist":
          navigate("/pharmacist-dashboard");
          break;
        case "customer":
          navigate("/customer-dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    await login(email, password);
  };

  return (
    <div className="login-container" style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>💊 Welcome to Smart Pharmacy System</h1>
        <marquee behavior="scroll" direction="left" style={styles.marquee}>
          🚑 24/7 Online Medicine Ordering | 💉 Get Discounts on Prescriptions |
          🏥 Trusted by 10,000+ Customers | 🌿 Health is Wealth!
        </marquee>
      </header>

      {/* Main Content */}
      <div style={styles.content}>
        {/* Left Side - Hero / Info */}
        <div style={styles.left}>
          <img src={pharmacyHero} alt="Pharmacy" style={styles.heroImage} />
          <h2 style={styles.slogan}>
            Your Trusted Partner for Health and Wellness 🌿
          </h2>
          <p style={styles.description}>
            Manage prescriptions, track medicine stock, and connect with
            pharmacists easily. Simplify healthcare management in one place.
          </p>
        </div>

        {/* Right Side - Login Form */}
        <div style={styles.right}>
          <h2 style={styles.loginTitle}>🔐 Login to Continue</h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
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
            {/* Forgot Password link */}
            <div style={{ textAlign: "right", marginBottom: "8px" }}>
              <Link
                to="/forgot-password"
                style={{ ...styles.link, fontSize: "0.93rem" }}
              >
                Forgot Password?
              </Link>
            </div>
            <button type="submit" disabled={loading} style={styles.button}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <div style={{ margin: "15px 0" }}>
            <a
              href="http://localhost:5000/api/auth/google"
              style={styles.googleBtn}
            >
              <img
                src={googleLogo}
                alt="Google"
                style={{ width: 20, marginRight: 8 }}
              />
              Login with Google
            </a>
          </div>

          {error && <p style={styles.error}>{error}</p>}
          <p style={styles.registerText}>
            Don’t have an account?{" "}
            <Link to="/register" style={styles.link}>
              Register here
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
// Inline Styles
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
    backgroundColor: "#007bff",
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
    color: "#007bff",
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
  loginTitle: {
    marginBottom: "1.5rem",
    fontWeight: "600",
    color: "#007bff",
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
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 12,
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
  googleBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    border: "1px solid #ccc",
    padding: "8px",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  registerText: {
    marginTop: "10px",
    fontSize: "0.95rem",
  },
  link: {
    color: "#007bff",
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

export default Login;
