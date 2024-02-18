#!/usr/bin/env node

import { program } from 'commander';
import { parseData, parseYaml } from '../Parsers.js'
import getDiff from '../src/getDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('filepath1 filepath2')
  .action((filepath1, filepath2) => {
    let data1;
    let data2;
    if (filepath1.includes('.yml')) {
       data1 = parseYaml(filepath1);
    } else {
      data1 = parseData(filepath1);
    }
    if (filepath2.includes('.yml')) {
      data2 = parseYaml(filepath2);
    } else {
      data2 = parseData(filepath2);
    }

    const diff = getDiff(data1, data2);
    console.log(diff);
  });

program.parse();
