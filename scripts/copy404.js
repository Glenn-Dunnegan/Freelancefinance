import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const src = path.join(distDir, 'index.html');
const dest = path.join(distDir, '404.html');

fs.copyFileSync(src, dest);
console.log('404.html created');

