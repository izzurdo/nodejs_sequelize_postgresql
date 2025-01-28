import { User } from "../models/index.js";
import { createToken } from "../middlewares/verifyToken.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const isMatch = await User.comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = createToken(user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const register = async (req, res) => {
  const { name, email, password, roleId } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password: await User.encryptPassword(password),
      roleId,
    });
    res.status(201).json({ user, message: "User created" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
