import User from "./userModel.js";
import Role from "./roleModel.js";

Role.hasMany(User, {
  foreignKey: "roleId",
  sourceKey: "_id",
});

User.belongsTo(Role, {
  foreignKey: "roleId",
  targetId: "_id",
});

export { User, Role };
