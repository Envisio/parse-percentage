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
module.exports = (arr, precision = 2) => {
  const total = arr.reduce((a, b) => a + b, 0);
  if (!total) {
    return arr;
  }
  const lastIndex = arr.length - 1 - arr.reverse().findIndex(num => num > 0);
  arr.reverse().reduce((acc, item, index) => {
    if (index === lastIndex) { // eslint-disable-next-line no-param-reassign
      arr[index] = parseFloat((1 - acc).toFixed(precision), 10);
    } else { // eslint-disable-next-line no-param-reassign
      arr[index] = parseFloat((item / total).toFixed(precision), 10);
    }
    acc += arr[index]; // eslint-disable-line no-param-reassign
    return acc;
  }, 0);
  return arr;
};
