import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { verifySignin } from "../middlewares/verifySignin.js";
const router = Router();

router.post("/",verifySignin, login);

router.post("/register" ,verifySignin, register);

export default router;
