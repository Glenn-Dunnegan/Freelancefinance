import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const src = path.join(distDir, 'index.html');
const dest = path.join(distDir, '404.html');

fs.copyFileSync(src, dest);
console.log('404.html created');
