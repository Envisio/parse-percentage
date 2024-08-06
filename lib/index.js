"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arr) {
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
      arr[index] = parseFloat((1 - acc).toFixed(precision), 10);
    } else {
      arr[index] = parseFloat((item / total).toFixed(precision), 10);
    }

    acc += arr[index];

    return acc;
  }, 0);

  return arr;
};
//# sourceMappingURL=index.js.map