import fs from 'fs';

const parseData = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf-8');
  console.log(data);
  return JSON.parse(data);
};

export default parseData;

