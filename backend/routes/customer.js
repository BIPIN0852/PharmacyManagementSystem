const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { userAuth } = require("../middleware/authMiddleware");

router.get("/orders", userAuth, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.medicine"
    );
    res.json({ orders });
  } catch (err) {
    console.error("Customer orders fetch error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
