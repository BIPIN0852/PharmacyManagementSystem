const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String }, // made optional for OAuth users
  googleId: { type: String }, // store Google ID for OAuth login
  role: {
    type: String,
    enum: ["admin", "pharmacist", "staff", "customer"],
    default: "customer",
  },
  phone: { type: String },
  createdAt: { type: Date, default: Date.now },
  // extendable: address, NMC number for doctors, etc.
});

module.exports = mongoose.model("User", UserSchema);
