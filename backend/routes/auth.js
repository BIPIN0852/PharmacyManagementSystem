// const express = require("express");
// const { body, validationResult } = require("express-validator");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const passport = require("passport");
// const User = require("../models/User");
// const authenticateToken = require("../middleware/auth");

// const router = express.Router();

// // ---------- REGISTER ----------
// router.post(
//   "/register",
//   [
//     body("name").isLength({ min: 2 }),
//     body("email").isEmail(),
//     body("password").isLength({ min: 6 }),
//     body("role").optional().isIn(["admin", "pharmacist", "staff", "customer"]),
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty())
//       return res.status(400).json({ errors: errors.array() });

//     const { name, email, password, role } = req.body;
//     try {
//       let user = await User.findOne({ email });
//       if (user) return res.status(400).json({ message: "User already exists" });

//       const hashedPassword = await bcrypt.hash(password, 10);
//       user = await User.create({
//         name,
//         email,
//         password: hashedPassword,
//         role: role || "customer",
//       });

//       const payload = {
//         id: user._id,
//         role: user.role,
//         email: user.email,
//         name: user.name,
//       };
//       const token = jwt.sign(payload, process.env.JWT_SECRET, {
//         expiresIn: "7d",
//       });

//       res.status(201).json({ token, user: payload });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: "Server error" });
//     }
//   }
// );

// // ---------- LOGIN ----------
// router.post(
//   "/login",
//   [body("email").isEmail(), body("password").exists()],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty())
//       return res.status(400).json({ errors: errors.array() });

//     const { email, password } = req.body;
//     try {
//       const user = await User.findOne({ email });
//       if (!user)
//         return res.status(400).json({ message: "Invalid email or password" });

//       if (user.password) {
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch)
//           return res.status(400).json({ message: "Invalid email or password" });
//       }

//       const payload = {
//         id: user._id,
//         role: user.role,
//         email: user.email,
//         name: user.name,
//       };
//       const token = jwt.sign(payload, process.env.JWT_SECRET, {
//         expiresIn: "7d",
//       });

//       res.status(200).json({ token, user: payload });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: "Server error" });
//     }
//   }
// );

// // ---------- GOOGLE AUTH ----------
// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     failureRedirect: "http://localhost:5173/login",
//   }),
//   (req, res) => {
//     // Redirect frontend with JWT token
//     res.redirect(`http://localhost:5173/dashboard?token=${req.user.token}`);
//   }
// );

// module.exports = router;

const express = require("express");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../models/User");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

// -------------------
// REGISTER
// -------------------
router.post(
  "/register",
  [
    body("name").isLength({ min: 2 }).withMessage("Name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("password").isLength({ min: 6 }).withMessage("Password min 6 chars"),
    body("role").optional().isIn(["admin", "pharmacist", "staff", "customer"]),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password, role, phone } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user)
        return res
          .status(400)
          .json({ message: "User with that email already exists" });

      const hashedPassword = await bcrypt.hash(password, 10);

      user = new User({
        name,
        email,
        password: hashedPassword,
        role: role || "customer",
        phone,
      });
      await user.save();

      const payload = {
        id: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
      });

      res.status(201).json({
        message: "User registered",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error("Register error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// -------------------
// LOGIN
// -------------------
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Valid email required"),
    body("password").exists().withMessage("Password required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ message: "Invalid email or password" });

      if (user.password) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({ message: "Invalid email or password" });
      }

      const payload = {
        id: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || "7d",
      });

      res.status(200).json({
        message: "Logged in",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// -------------------
// GET CURRENT USER
// -------------------
router.get("/me", authenticateToken, async (req, res) => {
  try {
    const u = await User.findById(req.user.id).select("-password");
    if (!u) return res.status(404).json({ message: "User not found" });
    res.json(u);
  } catch (err) {
    console.error("Fetch user error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// -------------------
// GOOGLE AUTH
// -------------------
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    // Redirect with JWT token as query param
    res.redirect(`http://localhost:3000/dashboard?token=${req.user.token}`);
  }
);

module.exports = router;
