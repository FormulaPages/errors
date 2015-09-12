
// Define the error system

let FormulaErrors;

function FormulaError(message) {
  this.message = message;
}

FormulaError.prototype = new Error;

FormulaError.prototype.toString = function() {
  return this.message;
}

export default FormulaErrors = {
  nil: new FormulaError('#NULL!'),
  div0: new FormulaError('#DIV/0!'),
  value: new FormulaError('#VALUE?'),
  ref: new FormulaError('#REF!'),
  name: new FormulaError('#NAME?'),
  num: new FormulaError('#NUM!'),
  na: new FormulaError('#N/A'),
  error: new FormulaError('#ERROR!'),
  data: new FormulaError('#GETTING_DATA'),
  missing: new FormulaError('#MISSING'),
  unknown: new FormulaError('#UNKNOWN')
}
