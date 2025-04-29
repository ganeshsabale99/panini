const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  try {
  const token=req.headers.authorization?.split(" ")[1]
  if (!token)
     return res.status(401).json({ message: "Access Denied" });
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;
