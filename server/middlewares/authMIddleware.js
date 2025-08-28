import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      console.log("Token received:", token); // <- Debug

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded JWT:", decoded); // <- Debug

      req.user = await User.findById(decoded.id).select("-password");
      // console.log("Authenticated user from DB:", req.user); // <- Debug

      if (!req.user) {
        return res.status(401).json({ message: "User not found" });
      }

      next();
    } catch (error) {
      console.error("Auth error:", error);
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    console.log("No token sent!");
    return res.status(401).json({ message: "Not authorized, no token" });
  }
};

export default protect;
