// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.

/*
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const operators = [
  {
    char: "÷",
    value: "/"
  },
  {
    char: "×",
    value: "*"
  },
  {
    char: "−",
    value: "-"
  },
  {
    char: "+",
    value: "+"
  },
  {
    char: "=",
    value: "="
  }
];

const specials = ["C", "±", "%"];

export { numbers, operators, specials };
*/


// there is no logical distinction between numbers, operators, and 'special' symbols
// let's change this up so it make more sense


const keys = [
  {
    char: "0",
    name: "digit0"
  },
  {
    char: "1",
    name: "digit1"
  },
  {
    char: "2",
    name: "digit2"
  },
  {
    char: "3",
    name: "digit3"
  },
  {
    char: "4",
    name: "digit4"
  },
  {
    char: "5",
    name: "digit5"
  },
  {
    char: "6",
    name: "digit6"
  },
  {
    char: "7",
    name: "digit7"
  },
  {
    char: "8",
    name: "digit8"
  },
  {
    char: "9",
    name: "digit9"
  },
  {
    char: ".",
    name: "point"
  },
  {
    char: "÷",
    name: "divide"
  },
  {
    char: "×",
    name: "times"
  },
  {
    char: "−",
    name: "minus"
  },
  {
    char: "+",
    name: "plus"
  },
  {
    char: "=",
    name: "equals"
  },
  {
    char: "C",
    name: "clear"
  },
  {
    char: "±",
    name: "sign"
  },
  {
    char: "%",
    name: "percent"
  },
];


export default keys;
