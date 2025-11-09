// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const session = require("express-session");
// const passport = require("./utils/passport"); // Make sure path is correct

// const authRoutes = require("./routes/auth");

// const app = express();
// const adminRoutes = require("./routes/admin");
// app.use("/api/admin", adminRoutes);

// const medicinesRoutes = require("./routes/medicines");
// const ordersRoutes = require("./routes/orders");

// app.use("/api/medicines", medicinesRoutes);
// app.use("/api/orders", ordersRoutes);

// // ---------- MIDDLEWARE ----------
// app.use(
//   cors({
//     origin: "http://localhost:5173", // React frontend
//     credentials: true,
//   })
// );
// app.use(express.json());

// // Session required for Passport
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "secret",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use(passport.initialize());
// app.use(passport.session());

// // ---------- ROUTES ----------
// app.use("/api/auth", authRoutes);

// // Health check
// app.get("/", (req, res) => res.send("Pharmacy Backend OK"));

// // ---------- MONGODB ----------
// const PORT = process.env.PORT || 5000;

// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("MongoDB connected");
//     app.listen(PORT, () => console.log(`Server running on ${PORT}`));
//   })
//   .catch((err) => console.error("MongoDB connection error:", err));

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("./utils/passport"); // Make sure path is correct
//import { createInvoicePDF } from "./generateInvoice.js";

// ---------- ROUTES ----------
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const medicinesRoutes = require("./routes/medicines");
const ordersRoutes = require("./routes/orders");
const customerRoutes = require("./routes/customer");

const app = express();

app.use("/api/customer", customerRoutes);

// ---------- MIDDLEWARE ----------
// Enable CORS for frontend
app.use(
  cors({
    origin: "http://localhost:5173", // React frontend
    credentials: true, // allow cookies and auth headers
  })
);

// Parse JSON
app.use(express.json());

// Session required for Passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// ---------- ROUTES ----------
// Auth
app.use("/api/auth", authRoutes);

// Admin
app.use("/api/admin", adminRoutes);

// Medicines & Orders
app.use("/api/medicines", medicinesRoutes);
app.use("/api/orders", ordersRoutes);

// Health check
app.get("/", (req, res) => res.send("Pharmacy Backend OK"));
// app.post("/api/invoice", (req, res) => {
//   const invoiceData = req.body;
//   createInvoicePDF(invoiceData, res);
// });

// ---------- MONGODB ----------
// Connect & start server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
