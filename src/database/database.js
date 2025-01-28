import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nombre_de_la_base_de_datos", "tu_usuario", "tu_contrasena", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
