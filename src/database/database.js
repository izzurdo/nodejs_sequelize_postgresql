import { Sequelize } from "sequelize";

const sequelize = new Sequelize("", "", "", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
