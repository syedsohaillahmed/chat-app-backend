import express from "express";
import { userData } from "../controllers/user.controller.js";

const app = express.Router();

app.get("/user", userData)


export default app