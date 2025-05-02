import mongoose from 'mongoose';

const uploadSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  filePath: { type: String, required: true },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'userkmces',
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Upload', uploadSchema);
