import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Role = sequelize.define(
  "Role",
  {
    _id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"user",
      unique: true,
      validate: { isIn: [["admin", "user"]] },
    },
  },
  {
    timestamps: false,
  }
);

export default Role;
