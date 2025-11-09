// import React from "react";
// import { useNavigate } from "react-router-dom";
// import pharmacyHero from "../assets/pharmacy.jpg"; // same hero image

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <header style={styles.header}>
//         <h1 style={styles.title}>💊 Smart Pharmacy System</h1>
//         <p style={styles.tagline}>
//           Simplifying Healthcare with Technology — Anytime, Anywhere
//         </p>
//       </header>

//       {/* Main Content */}
//       <div style={styles.main}>
//         <div style={styles.left}>
//           <h2 style={styles.heading}>Welcome to the Future of Pharmacy 🏥</h2>
//           <p style={styles.text}>
//             Manage your medicines, track prescriptions, and access trusted
//             healthcare services from the comfort of your home. Our platform
//             connects customers, pharmacists, and admins seamlessly.
//           </p>

//           <div style={styles.buttons}>
//             <button style={styles.loginBtn} onClick={() => navigate("/login")}>
//               🔑 Login
//             </button>
//             <button
//               style={styles.registerBtn}
//               onClick={() => navigate("/register")}
//             >
//               📝 Register
//             </button>
//           </div>
//         </div>

//         <div style={styles.right}>
//           <img src={pharmacyHero} alt="Pharmacy" style={styles.heroImage} />
//         </div>
//       </div>

//       {/* Features Section */}
//       <section style={styles.features}>
//         <h3>🌟 Why Choose Smart Pharmacy?</h3>
//         <div style={styles.featureGrid}>
//           <div style={styles.featureCard}>
//             <h4>⚡ Fast & Secure</h4>
//             <p>Order and manage medicines securely with real-time updates.</p>
//           </div>
//           <div style={styles.featureCard}>
//             <h4>📦 Inventory Automation</h4>
//             <p>Smart alerts for stock management and vendor restocking.</p>
//           </div>
//           <div style={styles.featureCard}>
//             <h4>👨‍⚕️ Role-Based System</h4>
//             <p>Dedicated dashboards for Admins, Pharmacists, and Customers.</p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer style={styles.footer}>
//         © {new Date().getFullYear()} Smart Pharmacy System | Designed with 💚 by
//         Your Team
//       </footer>
//     </div>
//   );
// };

// // -------------------------
// // Modern Styling
// // -------------------------
// const styles = {
//   container: {
//     fontFamily: "Poppins, sans-serif",
//     backgroundColor: "#f9f9f9",
//     minHeight: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     color: "#333",
//   },
//   header: {
//     backgroundColor: "#007bff",
//     color: "white",
//     padding: "2rem",
//     textAlign: "center",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   title: {
//     fontSize: "2rem",
//     marginBottom: "0.5rem",
//   },
//   tagline: {
//     fontSize: "1rem",
//     fontWeight: "400",
//   },
//   main: {
//     display: "flex",
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "3rem",
//     gap: "2rem",
//     flexWrap: "wrap",
//   },
//   left: {
//     flex: 1,
//     minWidth: "300px",
//     maxWidth: "500px",
//   },
//   heading: {
//     fontSize: "1.8rem",
//     color: "#007bff",
//     marginBottom: "1rem",
//   },
//   text: {
//     fontSize: "1rem",
//     lineHeight: "1.6",
//     color: "#555",
//   },
//   buttons: {
//     marginTop: "1.5rem",
//     display: "flex",
//     gap: "1rem",
//   },
//   loginBtn: {
//     backgroundColor: "#007bff",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     padding: "10px 20px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     transition: "0.3s",
//   },
//   registerBtn: {
//     backgroundColor: "#28a745",
//     color: "white",
//     border: "none",
//     borderRadius: "6px",
//     padding: "10px 20px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     transition: "0.3s",
//   },
//   right: {
//     flex: 1,
//     textAlign: "center",
//   },
//   heroImage: {
//     width: "100%",
//     maxWidth: "450px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//   },
//   features: {
//     backgroundColor: "#ffffff",
//     textAlign: "center",
//     padding: "3rem 2rem",
//   },
//   featureGrid: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "2rem",
//     marginTop: "2rem",
//     flexWrap: "wrap",
//   },
//   featureCard: {
//     backgroundColor: "#f8f9fa",
//     padding: "1.5rem",
//     borderRadius: "10px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//     maxWidth: "250px",
//     transition: "0.3s",
//   },
//   footer: {
//     backgroundColor: "#f1f1f1",
//     padding: "1rem",
//     textAlign: "center",
//     fontSize: "0.9rem",
//     color: "#555",
//     marginTop: "2rem",
//   },
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pharmacyHero from "../assets/pharmacy.jpg"; // your hero image

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Header */}
      <motion.header
        style={styles.header}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 style={styles.title}>💊 Smart Pharmacy System</h1>
        <p style={styles.tagline}>
          Simplifying Healthcare with Technology — Anytime, Anywhere
        </p>
      </motion.header>

      <marquee style={{ backgroundColor: "#e9f3ff", padding: "8px" }}>
        💊 Get 10% off on your first online prescription order! | Fast delivery
        available in all major cities 🚚
      </marquee>

      {/* Main Section */}
      <motion.div
        style={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Text Section */}
        <motion.div
          style={styles.left}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.heading}>Welcome to the Future of Pharmacy 🏥</h2>
          <p style={styles.text}>
            Manage your medicines, track prescriptions, and access trusted
            healthcare services from the comfort of your home. Our platform
            connects customers, pharmacists, and admins seamlessly.
          </p>

          <motion.div style={styles.buttons}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.loginBtn}
              onClick={() => navigate("/login")}
            >
              🔑 Login
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.registerBtn}
              onClick={() => navigate("/register")}
            >
              📝 Register
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Hero Image */}
        <motion.div
          style={styles.right}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={pharmacyHero}
            alt="Pharmacy"
            style={styles.heroImage}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        style={styles.features}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>🌟 Why Choose Smart Pharmacy?</h3>
        <div style={styles.featureGrid}>
          {[
            {
              icon: "⚡",
              title: "Fast & Secure",
              text: "Order and manage medicines securely with real-time updates.",
            },
            {
              icon: "📦",
              title: "Inventory Automation",
              text: "Smart alerts for stock management and vendor restocking.",
            },
            {
              icon: "👨‍⚕️",
              title: "Role-Based System",
              text: "Dedicated dashboards for Admins, Pharmacists, and Customers.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              style={styles.featureCard}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <h4>
                {item.icon} {item.title}
              </h4>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        style={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        © {new Date().getFullYear()} Smart Pharmacy System | Designed with 💚 by
        Your Team
      </motion.footer>
    </div>
  );
};

// -------------------------
// Styles
// -------------------------
const styles = {
  container: {
    fontFamily: "Poppins, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "#333",
  },
  header: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "2rem",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  tagline: {
    fontSize: "1rem",
    fontWeight: "400",
  },
  main: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem",
    gap: "2rem",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "500px",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#007bff",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#555",
  },
  buttons: {
    marginTop: "1.5rem",
    display: "flex",
    gap: "1rem",
  },
  loginBtn: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
  registerBtn: {
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "0.3s",
  },
  right: {
    flex: 1,
    textAlign: "center",
  },
  heroImage: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
  },
  features: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    padding: "3rem 2rem",
  },
  featureGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
    flexWrap: "wrap",
  },
  featureCard: {
    backgroundColor: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "250px",
    cursor: "pointer",
    transition: "0.3s",
  },
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "1rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#555",
    marginTop: "2rem",
  },
};

export default Home;
