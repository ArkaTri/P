// middlewares/authMiddleware.js

import { verify } from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  try {
    // Mendapatkan token dari header Authorization
    const token = req.headers.authorization.split(' ')[1];

    // Memverifikasi token
    const decodedToken = verify(token, 'your-secret-key');

    // Menambahkan informasi user ke objek request
    req.userData = { userId: decodedToken.userId };

    // Melanjutkan ke middleware atau handler selanjutnya
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: 'Authentication failed' });
  }
};

export default authenticate;
