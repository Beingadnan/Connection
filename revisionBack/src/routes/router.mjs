import express from "express";
import { createUser } from "../../../backend/src/controllers/userController.mjs";
const router=express.Router();

router.post('/',createUser)
export default router
