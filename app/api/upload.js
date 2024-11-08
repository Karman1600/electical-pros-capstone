import multer from 'multer';
import fs from 'fs';
import path from 'path';

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = path.join(process.cwd(), 'uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
}).single('image');

export default function handler(req, res) {
  if (req.method === 'POST') {
    upload(req, res, (err) => {
      if (err) {
        return res.status(500).json({ message: 'Image upload failed', error: err.message });
      }
      return res.status(200).json({ message: 'Image uploaded successfully', file: req.file });
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
