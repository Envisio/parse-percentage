"use strict";

/**
 * @param {Array} arr
 * @param {Number} precision
 * @returns {Array}
 * @example
 * import percentify from 'parse-percentage';
 * const arr = [ 0.7, 0.15, 0.5, 0 ];
 * const newArr = percentify(arr);
 * console.log(newArr);
 */
module.exports = function (arr) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  var total = arr.reduce(function (a, b) {
    return a + b;
  }, 0);
  if (!total) {
    return arr;
  }
  var lastIndex = arr.length - 1 - arr.reverse().findIndex(function (num) {
    return num > 0;
  });
  arr.reverse().reduce(function (acc, item, index) {
    if (index === lastIndex) {
      // eslint-disable-next-line no-param-reassign
      arr[index] = parseFloat((1 - acc).toFixed(precision), 10);
    } else {
      // eslint-disable-next-line no-param-reassign
      arr[index] = parseFloat((item / total).toFixed(precision), 10);
    }
    acc += arr[index]; // eslint-disable-line no-param-reassign
    return acc;
  }, 0);
  return arr;
};
//# sourceMappingURL=index.js.map