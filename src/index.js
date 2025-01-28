import app from "./app.js";
import sequelize from "./database/database.js";
import { createRoles } from "./config/role.config.js";
import { Role, User } from "./models/index.js";



const main = async () => {
  try {
    await sequelize.sync({ force: true});
    await createRoles();
    app.listen(3000);
    console.log("Server on port 3000");
  } catch (error) {
    console.log(error);
  }
};

main();
