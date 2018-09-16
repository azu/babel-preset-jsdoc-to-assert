/**
 * @param {number} param - this is a param.
 * @param {string} b - this is a param.
 * @param {string[]} [c] - this is a param.
 */
function myFunc(param, b, c) {
  console.assert(typeof param === "number", 'Expected type: @param {number} param\nActual value:', param, '\nFailure assertion: typeof param === "number"');
  console.assert(typeof b === "string", 'Expected type: @param {string} b\nActual value:', b, '\nFailure assertion: typeof b === "string"');
}