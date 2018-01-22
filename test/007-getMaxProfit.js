/**
 *
 Q7 找出下列正数组的最大差值比如:
输入 [10,5,11,7,8,9]
输出 6
这是通过一道题目去测试对于基本的数组的最大值的查找，很明显我们知道，最大差值肯定是一个数组中最大值与最小值的差。
 */

var assert = require('assert');


// 代码看起来繁琐一些，不过，本质上只有一次循环
function getMaxProfit(inArray){
    var max = 0;
    var min = 1000;
    inArray.forEach(element => {
      if( element > max ){
        max = element;
      }

      if( element < min){
        min = element;
      }
    });

    // console.log(max,min);

    return max - min;
}



// 代码少，性能没上面那个好， 因为底层至少用了两次循环
function getMaxProfit2( inArray ){
  return Math.max.apply( null, inArray)  - Math.min.apply( null, inArray);
}




describe('007-getMaxProfit', function() {
  it(" getMaxProfit('arr') ", function() {
    var arr = [10,5,11,7,8,9];
    assert.deepEqual( getMaxProfit(arr), 6 );
  });

  it(" getMaxProfit2('arr') ", function() {
    var arr = [10,5,11,7,8,9];
    assert.deepEqual( getMaxProfit2(arr), 6 );
  });
});
