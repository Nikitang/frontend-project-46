import path from 'node:path';
import buildStructure from './src/difference.js';
import parser from './src/parsers.js';
import formatter from './src/styles/formatter.js';

const getDiff = (file1, file2, format = 'stylish') => {
  const pathing = (filePath) => path.resolve(`${process.cwd()}/files/`, filePath);
  const resolve1 = pathing(file1);
  const resolve2 = pathing(file2);

  const dataParse1 = parser(resolve1);
  const dataParse2 = parser(resolve2);
  const building = buildStructure(dataParse1, dataParse2);

  return formatter(building, format);
};

export default getDiff;
