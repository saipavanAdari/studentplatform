import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const authenticateUser = async (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // ✅ split Bearer token

  if (!token)
    return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    if (!user)
      return res.status(401).json({ message: 'User not found.' });

    req.user = user; // ✅ full user object
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
