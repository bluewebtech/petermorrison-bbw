module.exports = class FilterContent {
  /**
   * The original data to get filtered based on
   * specific requirements.
   *
   * @var {Array}
   */
  data = [];

  /**
   * The available items object that houses the
   * separated data into specific collections.
   *
   * @var {Object}
   */
  items = {
    products: [],
    specials: [],
  };

  /**
   * The total of available items to get filtered.
   *
   * @var {Number}
   */
  total = 0;

  /**
   * Class constructor.
   *
   * @param {Array} data
   * @return {Void}
   */
  constructor(data) {
    this.data = data;
    this.total = this.data.length;
  }

  /**
   * Format the decimal to a dollar amount.
   *
   * @param {String} item
   * @return {String}
   */
  formatDollar(item) {
    return `$${parseFloat(item).toFixed(2)}`;
  }

  /**
   * Initialize the process of filtering through the
   * data based on specified requirements.
   *
   * @return {Void}
   */
  init() {
    this.set().sort().output();
  };

  /**
   * Check if the item has a special content tag.
   *
   * @param {String} item
   * @return {Boolean}
   */
  isSpecial(item) {
    return item === '__CONTENT__';
  }

  /**
   * Output the results based on the requirement.
   *
   * @return {Void}
   */
  output() {
    this.items.products.forEach((item) => {
      const isSpecial = this.isSpecial(item[0]);
      const title = this.title(item, isSpecial);
      const price = this.price(item, isSpecial);

      // Output the results.
      console.log(`${title}${price}`);
    });

    return this;
  }

  /**
   * Get the formatted price of the product but not the special
   * content since it does not have a price defined.
   *
   * @param {Array} item
   * @param {Boolean} isSpecial
   * @return {String}
   */
  price(item, isSpecial) {
    return isSpecial ? '' : this.formatDollar(item[2]);
  }

  /**
   * Organize the available items into specific collections.
   *
   * @return {Void}
   */
  set() {
    this.data.forEach((item) => {
      const firstKey = item[0];
      const secondKey = parseInt(item[1]);
      const isSpecial = this.isSpecial(firstKey);
      const shouldShow = secondKey > 0 && secondKey < 100;

      if (shouldShow) {
        (isSpecial ? this.items.specials : this.items.products).push(item);
      }
    });

    return this;
  }

  /**
   * Handle the sorting of the special content based on its
   * index making sure to send special content with an index
   * higher then the total of the original data set to the
   * very end.
   *
   * @return {Void}
   */
  sort() {
    const specials = this.items.specials.sort((a, b) => a[1] - b[1]);

    specials.forEach((item) => {
      const toEnd = parseInt(item[1]) > this.total;
      const products = this.items.products;

      if (toEnd) {
        products.push(item);
      } else {
        products.splice(item[1], 0, item);
      }
    });

    return this;
  }

  /**
   * Get the formatted title of the product and special content.
   *
   * @param {Array} item
   * @param {Boolean} isSpecial
   * @return {String}
   */
  title(item, isSpecial) {
    return (isSpecial ? `[${item[2]}]` : `${item[0]} - `).toUpperCase();
  }
}
