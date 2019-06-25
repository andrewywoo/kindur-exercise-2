# Kindur Exercise 2 - Find Pairs

This is a coding exercise to read in a text file, a list of a bunch of items and prices, and a gift card value and return the best items in the price list file that is closest to the value to the gift card amount.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node.js
- Git

### Installing

Clone the repo and install the dependencies.

```bash
git clone https://github.com/andrewywoo/kindur-exercise-2.git
cd kindur-exercise-2
```

```bash
npm install
```

## How to use

The application can be run using:

```
node main.js prices.txt 2300
```

## Running the tests

Run tests with jest with the following command

```bash
npm run test
```

## Test Cases

The following test cases run with Jest

- Execute program with prices inside price.txt and value of 2500
- Execute program with prices inside price.txt and value of 2300
- Execute program with prices inside price.txt and value of 1100
- Execute program with no arguments
- Execute program with invalid arguments

## Built With

- Node.js

Dev Dependencies

- Nodemon
- Jest

## Authors

- **Andrew Woo** - _Initial work_ - [Andrew Woo](https://github.com/andrewywoo)
