import Upload from "../models/Upload.js";
import multer from "multer";
import path from "path";

// Storage config
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

export const uploadMiddleware = multer({ storage });

export const uploadFile = async (req, res) => {
  try {
    const { title, type } = req.body;

    if (!req.file) return res.status(400).json({ message: "No file uploaded" });
    if (!title || !type)
      return res.status(400).json({ message: "Title and type are required" });

    const newUpload = await Upload.create({
      title,
      type,
      filePath: req.file.path,
      uploadedBy: req.user._id,
    });

    res
      .status(201)
      .json({ message: "File uploaded successfully", file: newUpload });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getUploads = async (req, res) => {
  try {
    const uploads = await Upload.find()
      .populate("uploadedBy", "name email role")
      .sort({ createdAt: -1 });

    res.json(uploads);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
