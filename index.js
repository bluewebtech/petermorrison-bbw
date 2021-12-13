#!/usr/bin/env node
const { CSVParser, FilterContent } = require('./utilities');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const options = yargs(hideBin(process.argv)).argv;

if (options.helper !== undefined) {
  console.log('Options:');
  console.log('  --helper   Provides a command list');
  console.log('  --file     The name of the file to get parsed');
  console.log('  --orderBy  The column that should be used to sort');
  console.log('  --sorting  The sort option of either: asc, desc');
  return;
}

if (options.file !== undefined) {
  new CSVParser(options.file).get()
    .then((response) => new FilterContent(response, options).init())
  ;
} else {
  console.log('Please use the --file={filename.txt} flag in order to parse a file.');
}
