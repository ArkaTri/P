// routes/auth.js

import { Router } from 'express';
const router = Router();
import { register, login, logout } from '../controllers/authController';
import authenticate from '../middlewares/authMiddleware';

// Endpoint untuk registrasi
router.post('/register', register);

// Endpoint untuk login
router.post('/login', login);

// Endpoint untuk logout dengan middleware otentikasi
router.post('/logout', authenticate, logout);

export default router;
