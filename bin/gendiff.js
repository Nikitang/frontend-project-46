#!/usr/bin/env node
import { program } from 'commander';
import getDiff from '../index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('filepath1 filepath2')
  .action((filepath1, filepath2) => {
    const diff = getDiff(filepath1, filepath2, program.opts().format);
    console.log(diff);
  });

program.parse();
