/**
 * @param {number} param - this is a param.
 * @param {string} b - this is a param.
 * @param {string[]} [c] - this is a param.
 */
function myFunc(param, b, c) {
  if (!(typeof param === "number")) {
    console.error('TypeError: babel-plugin-jsdoc-to-assert\nExpected type: @param {number} param\nActual value:', param);
    console.assert(typeof param === "number", 'Invalid JSDoc: typeof param === "number"');
  }

  if (!(typeof b === "string")) {
    console.error('TypeError: babel-plugin-jsdoc-to-assert\nExpected type: @param {string} b\nActual value:', b);
    console.assert(typeof b === "string", 'Invalid JSDoc: typeof b === "string"');
  }
}