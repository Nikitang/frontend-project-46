import fs from 'fs';
import yaml from 'js-yaml'

const parseData = (filepath) => {
  const data = fs.readFileSync(filepath, 'utf-8');
  return JSON.parse(data);
};

const parseYaml = (data) => {
  const fileContents = fs.readFileSync(data, 'utf8');
  return yaml.load(fileContents);
};

export { parseData, parseYaml };
