/**
 *
 *
 *
 Q3 统计一个字符串出现最多的字母
给出一段英文连续的英文字符窜，找出重复出现次数最多的字母

输入 ： afjghdfraaaasdenas

输出 ： a
前面出现过去重的算法，这里需要是统计重复次数。


小结，分两步：
1. 把所有的char放放一个hash map, key -> value 分别是：char : 个数
2. 遍历这个hash, 与最大的maxValue对比，同时更新maxValue，得到maxChar
3. 这里设置的maxValue 是0


4. 优化： 如果str.length === 1 , 则直接返回 这个char
 */
var assert = require('assert');

 function findMaxDuplicateChar(inStr){


  if( inStr.length === 1) return inStr;

   // 1. map
   // 2. map[char] ++
   // 3. Get values -> Max
  var chars = inStr.split('');
  var hash = {};
  var values = [];
  var maxChar;
  var maxValue = 0;

  chars.forEach(item=>{
    if( typeof hash[item]!=='undefined' ){
      hash[item] = hash[item] + 1;
    }else{
      hash[item] = 0;
    }
  });


  for (var char in hash) {
    var val = hash[char];
    if( val > maxValue){
      maxValue = val;
      maxChar = char;
    }
  }

  return maxChar;
 }



 describe('003-findMaxDuplicateChar', function() {
  it(" findMaxDuplicateChar('afjghdfraaaasdenas') ", function() {
    assert.deepEqual( findMaxDuplicateChar('afjghdfraaaasdenas'), 'a' );
  });

  // it(" uniq2('result') ", function() {
  //   console.log('=== uniq2(result)', uniq2(result));

  //   assert.deepEqual( uniq2(result), [0, 1,13,24,11,14,2] );
  // });
});
