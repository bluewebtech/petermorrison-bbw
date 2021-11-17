const { createReadStream, existsSync } = require('fs');
const path = require('path');

module.exports = class CSVParser {
  /**
   * The name of the requested file.
   *
   * @var {String}
   */
  file = null;

  /**
   * Whether or not the file actually exists.
   *
   * @var {Boolean}
   */
  fileExists = false;

  /**
   * The complete and full path to the file.
   *
   * @var {String}
   */
  filePath = null;

  /**
   * Class constructor.
   *
   * @param {String} file
   * @return {Void}
   */
  constructor(file) {
    this.setFile(file);
    this.setFilePath();
    this.setFileExists();
  }

  /**
   * Get the contents of the file parsed and resolved from a promise.
   *
   * @return {Void}
   */
  get() {
    return new Promise((resolve) => {
      if (this.fileExists) {
        const stream = createReadStream(this.filePath);
        this.parser(stream, resolve);
      } else {
        console.log(`The file (${this.file}) was not found.`);
      }
    });
  }

  /**
   * Resolve the stream and resolve the promise using the papaparse
   * module if it has been installed. Otherwise use the fallback
   * which utilizes the readline module.
   *
   * @param {Object} stream
   * @param {Object} resolve
   * @return {Void}
   */
   parser(stream, resolve) {
    try {
      const Papa = require('papaparse');
      Papa.parse(stream, { complete: (results) => resolve(results.data) });
    } catch (error) {
      const readline = require('readline');
      const data = [];

      readline.createInterface({ input: stream })
        .on('line', (item) => data.push(item.split(',')))
        .on('close', () => resolve(data))
      ;
    }
  }

  /**
   * Set the {file} property value.
   *
   * @param {String} file
   * @return {Void}
   */
  setFile(file) {
    this.file = file;
  }

  /**
   * Set the {filePath} property value.
   *
   * @return {Void}
   */
  setFileExists() {
    this.fileExists = existsSync(this.filePath);
  }

  /**
   * Set the {fileExists} property value.
   *
   * @return {Void}
   */
  setFilePath() {
    this.filePath =  path.resolve(this.file);
  }
}
