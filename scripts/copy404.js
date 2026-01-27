const fs = require('fs');
const path = require('path');

const distDir = path.resolve('dist');
const src = path.join(distDir, 'index.html');
const dest = path.join(distDir, '404.html');

fs.copyFileSync(src, dest);
console.log('404.html created');

