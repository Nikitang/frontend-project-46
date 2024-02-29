import fs from 'fs';
import yaml from 'js-yaml';

const parser = (filepath) => {
  let parsingResult;
  if (filepath.includes('.yml') || filepath.includes('.yaml')) {
    const fileContents = fs.readFileSync(filepath, 'utf-8');
    parsingResult = yaml.load(fileContents);
  }
  if (filepath.includes('.json')) {
    const data = fs.readFileSync(filepath, 'utf-8');
    parsingResult = JSON.parse(data);
  }
  return parsingResult;
};

export default parser;
