// STEP 1 - Get the modules here exported before building out your components
// Don't worry about bringing all of these into the same file.
// Export them as necessary and import each array into its appropriate
// file. No real tricks here just be aware of what is in each array
// and how you'll access the data.


const numberKeys = [
  {
    char: "1",
    name: "digit1",
    class: "number"
  },
  {
    char: "2",
    name: "digit2",
    class: "number"
  },
  {
    char: "3",
    name: "digit3",
    class: "number"
  },
  {
    char: "4",
    name: "digit4",
    class: "number"
  },
  {
    char: "5",
    name: "digit5",
    class: "number"
  },
  {
    char: "6",
    name: "digit6",
    class: "number"
  },
  {
    char: "7",
    name: "digit7",
    class: "number"
  },
  {
    char: "8",
    name: "digit8",
    class: "number"
  },
  {
    char: "9",
    name: "digit9",
    class: "number"
  },
  {
    char: "0",
    name: "digit0",
    class: "number zero"
  },  {
    char: ".",
    name: "point",
    class: "number"
  }
];


const operandKeys = [
  {
    char: "÷",
    name: "divide",
    class: "operand"
  },
  {
    char: "×",
    name: "times",
    class: "operand"
  },
  {
    char: "−",
    name: "minus",
    class: "operand"
  },
  {
    char: "+",
    name: "plus",
    class: "operand"
  },
  {
    char: "=",
    name: "equals",
    class: "operand"
  }
];

const specialKeys = [
  {
    char: "C",
    name: "clear",
    class: "special"
  },
  {
    char: "±",
    name: "sign",
    class: "special"
  },
  {
    char: "%",
    name: "percent",
    class: "special"
  },
];


export { numberKeys, operandKeys, specialKeys };
