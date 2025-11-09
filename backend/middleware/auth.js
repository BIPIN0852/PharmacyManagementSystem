// const jwt = require("jsonwebtoken");

// function authenticateToken(req, res, next) {
//   // Token in header: Authorization: Bearer <token>
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];
//   if (!token) return res.status(401).json({ message: "No token provided" });
//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: "Token invalid" });
//     req.user = user; // contains id, role, email
//     next();
//   });
// }

// module.exports = authenticateToken;
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token invalid" });

    req.user = user; // contains id, role, email, name
    next();
  });
}

module.exports = authenticateToken;
