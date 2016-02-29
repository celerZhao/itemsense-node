import del from 'del';
import fs from './lib/fs';
import compile from './lib/compile';
import { rootDir } from './config';

// Clean output directories
const cleanup = async () => {
  await del(['build/*', 'lib/*', '!build/.git'], { dot: true });
  await fs.makeDir('build');
  await fs.makeDir('lib');
};

// Compile the source code into a distributable format
const src = async () => {
  const babel = require('babel');
  const files = await fs.getFiles('src');

  for (const file of files) {
    if(file !== '.DS_Store') {
      console.log(file);
      const source = await fs.readFile('src/' + file);
      const result = babel.transform(source);
      console.log(result);
      await fs.writeFile('lib/' + file, result.code);
      await fs.writeFile('lib/' + file.substr(0, file.length - 3) + '.babel.js', source);

    }
  }
};

// Copy static files into the build folder
const assets = async () => {
  const files = await fs.getFiles('docs');
  for (const file of files) {
    if (file.endsWith('.svg') || file.endsWith('.ico')) {
      await fs.copyFile('docs/' + file, 'build/' + file);
    }
  }
};

// Bundle and optmize JavaScript code for the documentation site
const javascript = async () => {
  const output = await compile.js({ debug: false });
  await fs.makeDir('build/js');
  await fs.writeFile('build/js/main.min.js', output);
};

// Run all build steps in sequence
export default async () => {
  try {
    console.log('clean');
    await cleanup();
    console.log('compile src');
    await src();
    console.log('compile javascript');
    await javascript();

  } catch (err) {
    console.error(err.stack);
  }
};
