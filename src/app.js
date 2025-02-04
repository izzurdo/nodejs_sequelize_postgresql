import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);

export default app;
