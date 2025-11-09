const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const Medicine = require("../models/Medicine");
const authenticateToken = require("../middleware/auth");

// GET customer orders
router.get("/customer/:customerId", authenticateToken, async (req, res) => {
  try {
    if (req.user.id !== req.params.customerId && req.user.role !== "admin")
      return res.status(403).json({ message: "Forbidden" });

    const orders = await Order.find({
      customerId: req.params.customerId,
    }).populate("items.medicineId");
    res.json(orders);
  } catch (err) {
    console.error("Fetch orders error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST create order
router.post("/", authenticateToken, async (req, res) => {
  try {
    const { customerId, items } = req.body;

    if (req.user.id !== customerId)
      return res.status(403).json({ message: "Forbidden" });

    let total = 0;
    for (const item of items) {
      const medicine = await Medicine.findById(item.medicineId);
      if (!medicine)
        return res.status(400).json({ message: "Medicine not found" });
      if (medicine.stock < item.quantity)
        return res
          .status(400)
          .json({ message: `Not enough stock for ${medicine.name}` });

      medicine.stock -= item.quantity;
      await medicine.save();

      total += medicine.price * item.quantity;
    }

    const order = new Order({ customerId, items, total });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Create order error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
