import express from "express";
import { login, registerUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", registerUser);

export default router;
