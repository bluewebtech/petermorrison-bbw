# Bath and Body Works - Senior Front End Developer

## Explanation

This is my attempt at putting together a basic CLI command to parse through the provided data set based on the set of requirements below.

## Usage

The CLI command can be executed with the following:

`node ./index.js input.txt` or `npm start input.txt`

### Full Implementation Of Requirements

The goal for the solution was to closely implement the following requirements:

- You should build a simple Node.js command-line program that simulates showing a product list.
- In the data, special listings will all be first, followed by all product listings.
- Your output should show customers the product listing results properly formatted with special listings at the specified
  indexes.
- If an index is higher than the list length, it should go at the end of the list in the order it is read.
- One last thing, we can't show products that have an available quantity of less than 1 or higher than 99, so we shouldn't show those products to customers.
- Your program should be run with the data file name via a command from the terminal, as follows: `node ./your-program.js input.txt`.
- Based on the provided data, here's the exact output your program should display:

```
WAIKIKI BEACH COCONUT - $13.50
HIBISCUS PARADISE - $13.50
CLEAN SLATE - $14.50
[WHY YOU'LL LOVE OUR SHOWER GEL]
FOREVER RED - $15.50
```

### Design And Organization Of Your Solution

The idea behind this implementation was to create a one liner based on very few utilities that consist of a file parser and a data filter that would handle the sorting and displaying of the data set within the console.

### Use Of Javascript Best Practices

Maybe...maybe not.

### Testing Approach And Methodology

Testing did not consist of the usage of a framework or any form of automation but did include the following test cases:

- Making sure that the file being requested actually does exist.
- Manipulation of the file content that was being requested within the CLI (example below).
- Using a 3rd party module to parse the requested file and including a minor fallback just in case the 3rd party module was not installed.
- Verifying the formatting of both the product and special content.
- Attempting to make sure whether or not the products would show and the order in which they should show.

#### Original Content

```
__CONTENT__,3,Why you'll love our shower gel
Waikiki Beach Coconut,3,13.5
Hibiscus Paradise,5,13.5
Strawberry Pound Cake,0,13.5
Clean Slate,30,14.5
Forever Red,10,15.5
```

#### Adjusted Content

```
__CONTENT__,7,Why you'll love our soaps
__CONTENT__,6,Why you'll love our candles
__CONTENT__,3,Why you'll love our shower gel
Waikiki Beach Coconut,3,13.5
Hibiscus Paradise,5,13.5
Strawberry Pound Cake,0,13.5
Clean Slate,30,14.5
Forever Red,10,15.5
```

### Explanation Of A Few Choices You Made In A README

- For CSV or comma delimited data I chose to utilize a pretty solid module in order to handle the parsing of the file via a stream but also included a fallback solution just in case the module was not installed.
- Returning a promise seemed to be a nice option in order to work with another utility and show off additional abilities.
- After working with and manipulating inconsistent school data pretty often I have found that either running with a method chain or pipeline pattern seemed to be a nice way to create a stepped process.
- A decision that might make the solution better might be the usage of a HashMap.
