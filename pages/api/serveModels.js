import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const { modelName } = req.query;

  const modelPath = path.join(process.cwd(), 'models', `${modelName}.glb`);
  
  if (fs.existsSync(modelPath)) {
    res.setHeader('Content-Type', 'model/gltf-binary');
    fs.createReadStream(modelPath).pipe(res);
  } else {
    res.status(404).json({ message: 'Model not found' });
  }
}
