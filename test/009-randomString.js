/**
Q8 随机生成指定长度的字符串
实现一个算法，随机生成指制定长度的字符窜。

比如给定 长度 8  输出 4ldkfg9j
 */

var assert = require('assert');
 function randomString( inNum ){
  var str = 'abcdefghijklmnopqrstuvwxyz9876543210';
  var res = [];
  var len = str.length;
  for (let i = 0; i < inNum; i++) {
    // Create a random index:
    var randomIndex = Math.floor(Math.random() * len);
    var element = str.charAt(randomIndex);
    res.push(element);
  };
  return res.join('');
}


describe('009-randomString', function() {
  it(" randomString(5) != randomString(5) ", function() {
    assert.deepEqual( randomString(5) != randomString(5), true );
  });
});
