import express from "express";
import { getUsers, Register, Login } from './controllers/usersController.js';
import { verifyToken } from "../../modules/user/Middleware/auth.js";
import { refreshToken } from "./controllers/refreshToken.js";

const router = express.Router();

router.get('/users', verifyToken,getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);

export default router;