import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { home } from "../controllers/user.controller.js";
const router = Router();

router.get("/", verifyToken, home);

export default router;
