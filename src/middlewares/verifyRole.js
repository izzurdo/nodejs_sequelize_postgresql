import Role from "../models/roleModel.js";
import User from "../models/userModel.js";

export const verifyRoleAdmin = async (req, res, next) => {
  try {
    const roleId = req.user.roleId; // Obtiene el roleId de req.user
    const role = await Role.findByPk(roleId);
    if (!role || role.name !== "admin") {
      return res.status(403).send({ message: "No permission" });
    }
    next();
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};