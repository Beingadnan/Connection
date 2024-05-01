import express from "express";
import { createUser, getUser } from "../controllers/userController.mjs";
const router = express.Router();

router.get('/', getUser)
router.post('/createuser',createUser)

export default router;