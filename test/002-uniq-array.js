/**
 * Q2 去掉一组整型数组重复的值
比如输入: [1,13,24,11,11,14,1,2]
输出: [1,13,24,11,14,2]
需要去掉重复的11 和 1 这两个元素。
这道问题出现在诸多的前端面试题中，主要考察个人对Object的使用，利用key来进行筛选。
https://www.cnblogs.com/libin-1/p/5998870.html
 */



var assert = require('assert');


function uniq1( inArray ){
  var hash = {};
  var result = [];
  inArray.forEach( item => {
    if(!hash[ item ]){
      hash[ item ] = true;
      result.push( item );
    }
  });
  return result;
}

// will filter `0`
// function uniq2( inArray ){
//   var hash = {};
//   var result = inArray.filter( item => {
//     if(!hash[ item ]){
//       hash[ item ] = true;
//       return item;
//     }
//   });
//   return result;
// }


var result = [0, 1,13,24,11,11,14,1,2];




describe('002-uniq', function() {
  it(" uniq1('result') ", function() {
    assert.deepEqual( uniq1(result), [0, 1,13,24,11,14,2] );
  });

  // it(" uniq2('result') ", function() {
  //   console.log('=== uniq2(result)', uniq2(result));

  //   assert.deepEqual( uniq2(result), [0, 1,13,24,11,14,2] );
  // });
});
