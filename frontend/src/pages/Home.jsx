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

// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import pharmacyHero from "../assets/pharmacy.jpg"; // your hero image
// import "tailwindcss";
// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <motion.header
//         style={styles.header}
//         initial={{ y: -60, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h1 style={styles.title}>💊 Smart Pharmacy System</h1>
//         <p style={styles.tagline}>
//           Simplifying Healthcare with Technology — Anytime, Anywhere
//         </p>
//       </motion.header>

//       <marquee style={{ backgroundColor: "#e9f3ff", padding: "8px" }}>
//         💊 Get 10% off on your first online prescription order! | Fast delivery
//         available in all major cities 🚚
//       </marquee>

//       {/* Main Section */}
//       <motion.div
//         style={styles.main}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         {/* Left Text Section */}
//         <motion.div
//           style={styles.left}
//           initial={{ x: -100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 style={styles.heading}>Welcome to the Future of Pharmacy 🏥</h2>
//           <p style={styles.text}>
//             Manage your medicines, track prescriptions, and access trusted
//             healthcare services from the comfort of your home. Our platform
//             connects customers, pharmacists, and admins seamlessly.
//           </p>

//           <motion.div style={styles.buttons}>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={styles.loginBtn}
//               onClick={() => navigate("/login")}
//             >
//               🔑 Login
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               style={styles.registerBtn}
//               onClick={() => navigate("/register")}
//             >
//               📝 Register
//             </motion.button>
//           </motion.div>
//         </motion.div>

//         {/* Right Hero Image */}
//         <motion.div
//           style={styles.right}
//           initial={{ x: 100, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.img
//             src={pharmacyHero}
//             alt="Pharmacy"
//             style={styles.heroImage}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 150 }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* Features Section */}
//       <motion.section
//         style={styles.features}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <h3>🌟 Why Choose Smart Pharmacy?</h3>
//         <div style={styles.featureGrid}>
//           {[
//             {
//               icon: "⚡",
//               title: "Fast & Secure",
//               text: "Order and manage medicines securely with real-time updates.",
//             },
//             {
//               icon: "📦",
//               title: "Inventory Automation",
//               text: "Smart alerts for stock management and vendor restocking.",
//             },
//             {
//               icon: "👨‍⚕️",
//               title: "Role-Based System",
//               text: "Dedicated dashboards for Admins, Pharmacists, and Customers.",
//             },
//           ].map((item, index) => (
//             <motion.div
//               key={index}
//               style={styles.featureCard}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
//               }}
//               transition={{ type: "spring", stiffness: 150 }}
//             >
//               <h4>
//                 {item.icon} {item.title}
//               </h4>
//               <p>{item.text}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Footer */}
//       <motion.footer
//         style={styles.footer}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         © {new Date().getFullYear()} Smart Pharmacy System | Designed with 💚 by
//         Your Team
//       </motion.footer>
//     </div>
//   );
// };

// // -------------------------
// // Styles
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
//     cursor: "pointer",
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
import pharmacyHero from "../assets/pharmacy.jpg";
import "tailwindcss";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      {/* Navigation Bar with Login/Register */}
      <nav style={styles.navbar}>
        <h1 style={styles.navTitle}>💊 Smart Pharmacy System</h1>
        <div style={styles.navButtons}>
          <button style={styles.loginBtn} onClick={() => navigate("/login")}>
            🔑 Login
          </button>
          <button
            style={styles.registerBtn}
            onClick={() => navigate("/register")}
          >
            📝 Register
          </button>
        </div>
      </nav>

      {/* Announcement Marquee */}
      <marquee style={styles.marquee}>
        💊 Get 10% off on your first online prescription order! | Fast delivery
        available in all major cities 🚚
      </marquee>

      {/* Main Section */}
      <motion.main
        style={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Content */}
        <motion.section
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
          <div style={styles.buttons}>
            <button
              style={styles.ctaPrimary}
              onClick={() => navigate("/register")}
            >
              Get Started
            </button>
            <button
              style={styles.ctaSecondary}
              onClick={() => navigate("/learn-more")}
            >
              Learn More
            </button>
          </div>
        </motion.section>

        {/* Right Image */}
        <motion.section
          style={styles.right}
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={pharmacyHero}
            alt="Pharmacy hero"
            style={styles.heroImage}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.section>
      </motion.main>

      {/* Features Section */}
      <motion.section
        style={styles.features}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        aria-label="Why Choose Smart Pharmacy features"
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
            <motion.article
              key={index}
              style={styles.featureCard}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              }}
              transition={{ type: "spring", stiffness: 150 }}
              tabIndex={0}
              aria-label={item.title}
            >
              <h4>
                {item.icon} {item.title}
              </h4>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Smart Pharmacy System | Designed with 💚 by
        Your Team
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "#333",
  },

  // Navigation bar with flex for alignments and spacing
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#007bff",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  },

  navTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },

  navButtons: {
    display: "flex",
    gap: "1rem",
  },

  loginBtn: {
    backgroundColor: "#0056b3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
    whiteSpace: "nowrap",
  },

  registerBtn: {
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
    whiteSpace: "nowrap",
  },

  marquee: {
    backgroundColor: "#e9f3ff",
    padding: "8px",
    fontWeight: "600",
    color: "#007bff",
    textAlign: "center",
    fontSize: "1rem",
  },

  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "3rem 2rem",
    gap: "3rem",
    flexWrap: "wrap", // Wrap on small screens
    maxWidth: "1200px",
    margin: "0 auto",
  },

  left: {
    flex: "1 1 400px",
    minWidth: "280px",
    maxWidth: "600px",
  },

  heading: {
    fontSize: "2rem",
    color: "#007bff",
    marginBottom: "1rem",
  },

  text: {
    fontSize: "1.125rem",
    lineHeight: "1.6",
    color: "#555",
  },

  buttons: {
    marginTop: "2rem",
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
  },

  ctaPrimary: {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "12px 24px",
    cursor: "pointer",
    fontSize: "1.125rem",
    whiteSpace: "nowrap",
  },

  ctaSecondary: {
    backgroundColor: "#6c757d",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "12px 24px",
    cursor: "pointer",
    fontSize: "1.125rem",
    whiteSpace: "nowrap",
  },

  right: {
    flex: "1 1 300px",
    textAlign: "center",
    minWidth: "300px",
    maxWidth: "450px",
  },

  heroImage: {
    width: "100%",
    height: "auto",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },

  features: {
    backgroundColor: "#fff",
    textAlign: "center",
    padding: "3rem 2rem",
    maxWidth: "1000px",
    margin: "0 auto",
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
    outline: "none",
  },

  footer: {
    backgroundColor: "#f1f1f1",
    padding: "1rem 2rem",
    textAlign: "center",
    fontSize: "0.9rem",
    color: "#555",
    marginTop: "3rem",
  },

  // Media Queries (using JS)
  "@media (max-width: 768px)": {
    main: {
      flexDirection: "column",
      padding: "2rem 1rem",
    },
    right: {
      maxWidth: "100%",
    },
    left: {
      maxWidth: "100%",
    },
    navButtons: {
      flexDirection: "column",
      gap: "0.5rem",
      width: "100%",
      marginTop: "1rem",
    },
    navbar: {
      flexWrap: "wrap",
      justifyContent: "center",
      textAlign: "center",
    },
  },
};

export default Home;
