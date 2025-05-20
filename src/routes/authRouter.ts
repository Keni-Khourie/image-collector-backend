import express from'express';
const router = express.Router();
import { createUser, loginUser } from '../controller/authController';


router.post('/register', createUser);
router.post('/login', loginUser);
export default router;