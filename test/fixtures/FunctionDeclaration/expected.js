const assert = require("assert");

/**
 * @param {number} param - this is a param.
 * @param {string} b - this is a param.
 * @param {string[]} [c] - this is a param.
 */
function myFunc(param, b, c) {
  assert(typeof param === "number", 'typeof param === "number"');
  assert(typeof b === "string", 'typeof b === "string"');
}