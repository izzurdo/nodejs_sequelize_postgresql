import jwt from "jsonwebtoken";  
import  {JWT_SECRET}  from "../config/config.js";



export const createToken = (user) => {
  const token = jwt.sign({ userId: user._id, roleId: user.roleId }, JWT_SECRET, {
    expiresIn: "1h",
  });
  return token;
};

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Asigna el objeto decodificado completo
    next();
  } catch (error) {
    return res.status(401).send({ message: "Invalid token" });
  }
};
