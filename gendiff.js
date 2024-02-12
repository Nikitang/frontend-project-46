import { Command } from "commander";

const program  = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')

program.parse();