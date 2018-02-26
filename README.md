# parse-percentage

Convert an array argument, percentify each value.

[![bitHound Overall Score](https://www.bithound.io/github/Envisio/parse-percentage/badges/score.svg)](https://www.bithound.io/github/Envisio/parse-percentage) [![Inline docs](http://inch-ci.org/github/Envisio/parse-percentage.svg?branch=master&style=shields)](http://inch-ci.org/github/Envisio/parse-percentage) [![Build Status](https://travis-ci.org/Envisio/parse-percentage.svg?branch=master)](https://travis-ci.org/Envisio/parse-percentage) [![Coverage Status](https://coveralls.io/repos/github/Envisio/parse-percentage/badge.svg?branch=master)](https://coveralls.io/github/Envisio/parse-percentage?branch=master)

## Examples

### Basic

```js
import percentify from 'parse-percentage';

const arr = [ 0.7, 0.15, 0.05, 0 ];
const newArr = percentify(arr);
console.log(newArr);
```
```
[ 0.78, 0.17, 0.05, 0 ]
```

### Specify Precision

```js
import percentify from 'parse-percentage';

const arr = [ 70, 15, 5, 0 ];
const newArr = percentify(arr, 3);
console.log(newArr);
```
```
[ 0.778, 0.167, 0.055, 0 ]
```
