import Role from "../models/roleModel.js";

export const createRoles = async () => {
  try {
    const { count } = await Role.findAndCountAll();
    if (count > 0) return;

    const values = await Promise.all([
      Role.create({ name: "user" }),
      Role.create({ name: "admin" }),
    ]);
    
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};