const express = require("express");
const router = express.Router();
const Medicine = require("../models/Medicine");
const authenticateToken = require("../middleware/auth");

// GET all medicines
router.get("/", authenticateToken, async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    console.error("Fetch medicines error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Optional: Admin can add medicine
router.post("/", authenticateToken, async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "Forbidden" });

    const { name, price, stock, description } = req.body;
    const medicine = new Medicine({ name, price, stock, description });
    await medicine.save();
    res.status(201).json(medicine);
  } catch (err) {
    console.error("Add medicine error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
