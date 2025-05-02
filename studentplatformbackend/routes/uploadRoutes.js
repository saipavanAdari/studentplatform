import express from 'express';
import { authenticateUser } from '../middleware/authMiddleware.js';
import { uploadFile, getUploads, uploadMiddleware } from '../controllers/uploadController.js';

const router = express.Router();

router.post('/upload', authenticateUser, uploadMiddleware.single('file'), uploadFile);
router.get('/uploads', authenticateUser, getUploads);

export default router;
