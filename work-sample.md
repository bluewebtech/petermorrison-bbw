## The Problem

While ecommerce is generally a very controlled and predictable set of inputs and outputs, on
occasion we need to break out of the normal flow and take some imperative actions to improve
conversion or customer experience. One example of this is injecting special content into a product
listing page. This exercise is a contrived, simplified simulation of that scenario.

We've provided you with some data and we'd like you to begin your solution by reading that it from a
local file. In the data provided, there are products and special content listings. Products will
start with the product name and special listings will begin with `__CONTENT__`. The fields in all
records are comma delimited.

A product has, in order, the product name, available quantity, and price. Here's an example product:

```
Hibiscus Paradise,5,13.5
```

A special listing has, in order, the identifier flag, target list index (zero-based), and its
content. Here's an example special listing:

```
__CONTENT__,1,I am a special listing
```

## Your Solution

You should build a simple Node.js command-line program that simulates showing a product list. In the
data, special listings will all be first, followed by all product listings. Your output should show
customers the product listing results properly formatted with special listings at the specified
indexes. If an index is higher than the list length, it should go at the end of the list in the
order it is read. One last thing, we can't show products that have an available quantity of less
than 1 or higher than 99, so we shouldn't show those products to customers.

Your program should be run with the data file name via a command from the terminal, as follows:
`node ./your-program.js input.txt`. Based on the provided data, here's the exact output your program
should display:

```
WAIKIKI BEACH COCONUT - $13.50
HIBISCUS PARADISE - $13.50
CLEAN SLATE - $14.50
[WHY YOU'LL LOVE OUR SHOWER GEL]
FOREVER RED - $15.50
```

## The Data

Please save the data below in your project as `input.txt`.

```
__CONTENT__,3,Why you'll love our shower gel
Waikiki Beach Coconut,3,13.5
Hibiscus Paradise,5,13.5
Strawberry Pound Cake,0,13.5
Clean Slate,30,14.5
Forever Red,10,15.5
```

## Extra context

You won't be evaluated on anything not explicitly in this document. We also don't intend to take
much of your time. The things we look for are specifically mentioned, everything else is up to you
to design and build. Feel free to use tools you're comfortable with as long as it's within the scope
of the requirements outlined here. The goal is for you to demonstrate your ability to plan and
execute a simple piece of Javascript software.

We want you to be respectful of your own time, but we also ask that you do your best to showcase how
you would actually build production-ready software including structure, design, test coverage, and
documentation. What we're looking for is a thoughtful solution that fully implements all
requirements and demonstrates your methodologies and thought processes as an engineer. We ask that
you don't over-engineer, but also don't over-simplify. As a rule of thumb, try to timebox your
solution to no more than 6-8 hours. We're looking for a reasonable mix of architecture and time
management.

## Evaluation criteria

- Full implementation of requirements
- Design and organization of your solution
- Use of Javascript best practices
- Testing approach and methodology
- Explanation of a few choices you made in a README

## Questions

If you have any questions or need clarification, feel free to reach out to your recruiter. If
something isn't in this document, it is up to your interpretation and imagination. Remember, we
aren't trying to trick you, and we don't intend to mislead you with any part of the problem.

## Turning In

Package your code as a tarball with `tar zcvf ${your-name}-work-sample.tgz ${project-dir}` or a .zip and send
the archive to your recruiter. There's no specific deadline, but please do try to complete the
exercise and return your solution to us in a timely manner.
