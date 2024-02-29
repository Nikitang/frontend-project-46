import fs from 'fs';
import yaml from 'js-yaml';

const parser = (filepath) => {
  if (filepath.includes('.yml') || filepath.includes('.yaml')) {
    const fileContents = fs.readFileSync(filepath, 'utf-8');
    return yaml.load(fileContents);
  }
  if (filepath.includes('.json')) {
    const data = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
  }
  return null;
};

export default parser;
