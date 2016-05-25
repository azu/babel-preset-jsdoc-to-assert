/**
 * @param {number} param - this is a param.
 * @param {string} b - this is a param.
 * @param {string[]} [c] - this is a param.
 */
function myFunc(param, b, c) {
  console.assert(typeof param === "number", 'Invalid JSDoc @param: typeof param === "number"');
  console.assert(typeof b === "string", 'Invalid JSDoc @param: typeof b === "string"');
}