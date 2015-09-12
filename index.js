(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod);
    global.FormulaErrors = mod.exports;
  }
})(this, function (exports, module) {
  // Define the error system

  'use strict';

  var FormulaErrors;

  function FormulaError(message) {
    this.message = message;
  }

  FormulaError.prototype = new Error();

  FormulaError.prototype.toString = function () {
    return this.message;
  };

  module.exports = FormulaErrors = {
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
  };
});
