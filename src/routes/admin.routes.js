import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { verifyRoleAdmin } from "../middlewares/verifyRole.js";
import   {home}  from "../controllers/admin.controller.js";
const router = Router();

router.get("/", [verifyToken, verifyRoleAdmin], home);


export default router;
