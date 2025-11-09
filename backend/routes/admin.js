// const express = require("express");
// const router = express.Router();
// const Medicine = require("../models/Medicine");
// const Order = require("../models/Order");
// const User = require("../models/User");
// const { adminAuth } = require("../middleware/authMiddleware");

// // -------------------------
// // Admin Dashboard Routes
// // -------------------------

// // Get all medicines
// router.get("/medicines", adminAuth, async (req, res) => {
//   try {
//     const medicines = await Medicine.find();
//     res.json(medicines);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Add a new medicine
// router.post("/medicines", adminAuth, async (req, res) => {
//   const { name, manufacturer, price, quantity } = req.body;
//   try {
//     const newMedicine = new Medicine({ name, manufacturer, price, quantity });
//     await newMedicine.save();
//     res.status(201).json({ message: "Medicine added", medicine: newMedicine });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Update a medicine
// router.put("/medicines/:id", adminAuth, async (req, res) => {
//   try {
//     const updatedMedicine = await Medicine.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (!updatedMedicine)
//       return res.status(404).json({ message: "Medicine not found" });
//     res.json({ message: "Medicine updated", medicine: updatedMedicine });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Delete a medicine
// router.delete("/medicines/:id", adminAuth, async (req, res) => {
//   try {
//     const deleted = await Medicine.findByIdAndDelete(req.params.id);
//     if (!deleted)
//       return res.status(404).json({ message: "Medicine not found" });
//     res.json({ message: "Medicine deleted" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Get all orders
// router.get("/orders", adminAuth, async (req, res) => {
//   try {
//     const orders = await Order.find()
//       .populate("user")
//       .populate("items.medicine");
//     res.json(orders);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Update order status
// router.put("/orders/:id/status", adminAuth, async (req, res) => {
//   const { status } = req.body;
//   try {
//     const order = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );
//     if (!order) return res.status(404).json({ message: "Order not found" });
//     res.json({ message: "Order status updated", order });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Get all users
// router.get("/users", adminAuth, async (req, res) => {
//   try {
//     const users = await User.find().select("-password");
//     res.json(users);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Update user role
// router.put("/users/:id/role", adminAuth, async (req, res) => {
//   const { role } = req.body;
//   if (!["admin", "pharmacist", "staff", "customer"].includes(role))
//     return res.status(400).json({ message: "Invalid role" });

//   try {
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { role },
//       { new: true }
//     ).select("-password");
//     if (!user) return res.status(404).json({ message: "User not found" });
//     res.json({ message: "User role updated", user });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");
const Order = require("../models/Order");
const User = require("../models/User");
const { adminAuth } = require("../middleware/authMiddleware");

// -------------------------
// Admin Dashboard Routes
// -------------------------

// Admin Dashboard stats
router.get("/dashboard", adminAuth, async (req, res) => {
  try {
    const usersCount = await User.countDocuments();
    const medicinesCount = await Medicine.countDocuments();
    const orders = await Order.find();
    const ordersCount = orders.length;

    const revenue = orders.reduce((sum, order) => sum + order.totalPrice, 0);

    // Example monthly sales data
    const salesData = orders.reduce((acc, order) => {
      const month = new Date(order.createdAt).toLocaleString("default", {
        month: "short",
      });
      const found = acc.find((d) => d.month === month);
      if (found) {
        found.sales += order.totalPrice;
      } else {
        acc.push({ month, sales: order.totalPrice });
      }
      return acc;
    }, []);

    const lowStock = await Medicine.find({ quantity: { $lt: 10 } });

    res.json({
      stats: {
        users: usersCount,
        medicines: medicinesCount,
        orders: ordersCount,
        revenue,
        salesData,
      },
      lowStock,
    });
  } catch (err) {
    console.error("Admin dashboard error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------------
// Medicines CRUD
// -------------------------

router.get("/medicines", adminAuth, async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/medicines", adminAuth, async (req, res) => {
  const { name, manufacturer, price, quantity } = req.body;
  try {
    const newMedicine = new Medicine({ name, manufacturer, price, quantity });
    await newMedicine.save();
    res.status(201).json({ message: "Medicine added", medicine: newMedicine });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/medicines/:id", adminAuth, async (req, res) => {
  try {
    const updatedMedicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedMedicine)
      return res.status(404).json({ message: "Medicine not found" });
    res.json({ message: "Medicine updated", medicine: updatedMedicine });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/medicines/:id", adminAuth, async (req, res) => {
  try {
    const deleted = await Medicine.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Medicine not found" });
    res.json({ message: "Medicine deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------------
// Orders CRUD
// -------------------------

router.get("/orders", adminAuth, async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user")
      .populate("items.medicine");
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/orders/:id/status", adminAuth, async (req, res) => {
  const { status } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json({ message: "Order status updated", order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------------
// Users CRUD
// -------------------------

router.get("/users", adminAuth, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.put("/users/:id/role", adminAuth, async (req, res) => {
  const { role } = req.body;
  if (!["admin", "pharmacist", "staff", "customer"].includes(role))
    return res.status(400).json({ message: "Invalid role" });

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role },
      { new: true }
    ).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User role updated", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
