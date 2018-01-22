/**
 * Q5 不借助临时变量，进行两个整数的交换
输入 a = 2, b = 4 输出 a = 4, b =2
这种问题非常巧妙，需要大家跳出惯有的思维，利用 a , b进行置换。

主要是利用 + - 去进行运算，类似 a = a + ( b - a) 实际上等同于最后 的 a = b;



// a = a - ( a - b );
// b = b + ( a - b );

1. 先得到 a - b的值 为a
2. b = b + a;
*/

var assert = require('assert');

 function swap(a,b){
   //1. 得到二者的差，此时的a 已经不是原来的a了，但是b 还是原来的b
    a = a - b;

    //2. 利用 b = b + ( a - b ); 完成 b = a;的交换
    b = b + a;

    // 3. B已经不存在了，但是a 是原来的b
    // 得用：a = a + ( b - a );
    // 实际转化为： a - (a -b);
    a = b - a ;

    return [a, b]
 }




 describe('006-swap', function() {
  it(" swap(1,2) => [2,1] ", function() {
    assert.deepEqual( swap(1,2), [2,1] );
  });

  // it(" uniq2('result') ", function() {
  //   console.log('=== uniq2(result)', uniq2(result));

  //   assert.deepEqual( uniq2(result), [0, 1,13,24,11,14,2] );
  // });
});

