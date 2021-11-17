const { CSVParser, FilterContent } = require('./utilities');
const args = process.argv.slice(2);

if (args[0]) {
  new CSVParser(args[0]).get()
    .then((response) => new FilterContent(response).init())
  ;
}
