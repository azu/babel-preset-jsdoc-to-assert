/**
 * @param {number} param - this is a param.
 * @param {string} b - this is a param.
 * @param {string[]} [c] - this is a param.
 */
function myFunc(param, b, c) {
  if (typeof param === "number") {
    throw new TypeError('Invalid JSDoc @param: typeof param === "number"');
  }

  if (typeof b === "string") {
    throw new TypeError('Invalid JSDoc @param: typeof b === "string"');
  }
}