/**
 * 输入n，求Fibonacci数列的第n项
 * https://www.cnblogs.com/jiancui/archive/2017/02/09/fibonacci.html
 *
 */

var assert = require('assert');

function fibonacci(n) {
  if (n < 0) {
    throw new Error('输入的数字不能小于0');
  }
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci_opt(n) {
  switch (true) {
    case n < 0:
      return;
    case n <= 1:
      return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacci4(n) {
  if (n < 0)
    throw new Error('输入的数字不能小于0');
  let dataMinusTwo = 0,
    dataMinusOne = 1,
    data;
  if (n == 0)
    return dataMinusTwo;
  if (n == 1)
    return dataMinusOne;
  for (var i = 2; i <= n; i++) {
    data = dataMinusOne + dataMinusTwo;

    dataMinusTwo = dataMinusOne;
    dataMinusOne = data;
  }
  return data;
}


// 这种方式利用了cache ,以内存空间换时间。
function fibonacci2(n) {
  if (n < 0)
    throw new Error('输入的数字不能小于0');
  let cache = {};
  function calc(n) {
    if (n < 2) {
      return n;;
    }
    if (cache[n] != undefined) {
      return cache[n];
    }
    let res = calc(n - 1) + calc(n - 2);
    cache[n] = res;
    return res;
  }
  return calc(n);
}

describe('008-fibonacci', function () {
  it(" fibonacci(0) 0", function () {
    assert.deepEqual(fibonacci(0), 0);
  });

  it(" fibonacci(1) 1", function () {
    assert.deepEqual(fibonacci(1), 1);
  });

  it(" fibonacci(2) 1", function () {
    assert.deepEqual(fibonacci(2), 1);
  });

  it(" fibonacci(3) 2", function () {
    assert.deepEqual(fibonacci(3), 2);
  });

  it(" fibonacci(4) 3", function () {
    assert.deepEqual(fibonacci(4), 3);
  });
});
