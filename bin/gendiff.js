#!/usr/bin/env node

import { program } from 'commander';
import _ from 'lodash';
import parseData from '../dataParse.js';
import getDiff from '../src/getDiff.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('filepath1 filepath2')
  .action((filepath1, filepath2) => {
    const data1 = parseData(filepath1);
    const data2 = parseData(filepath2);

    const diff = getDiff(data1, data2);
    console.log(diff);
  });

program.parse();
