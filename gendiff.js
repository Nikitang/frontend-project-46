const { program } = require('commander');

program
  .command('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .option('-h, --help', 'output usage information')

program.parse(process.argv);