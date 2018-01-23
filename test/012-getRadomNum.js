/**
1 获取指定范围内的随机数
当我们需要获取指定范围(min,max)内的整数的时候，下面的代码非常适合。


在n和m之间生成随机整数
Math.floor(Math.random()*(m-n))+n


 */
// range1(1,20) [ 1, 20 ];

// 向上取整：
// Math.ceil(4.34)  => 5
// Math.ceil(4.46)  => 5

// 向下取整：
// Math.floor(4.34)  => 4
// Math.floor(4.46)  => 4

// 四舍五入：
// Math.round(4.34)  => 4
// Math.round(4.46)  => 5

function range1(inMin, inMax) {
  var distance = inMax - inMin + 1;
  return Math.floor( Math.random() * distance ) + inMin;
}

// 最大值：分析

// range1(1, 20 )
// 1. distance: 20 - 1 + 1 = 20;
// 2. Math.random() * distance 这个值，最多只会是 19.99 这种数
// 3. math.floolr(19.99) => 19
// 4. 19 + min = 20;


// 最小值：分析
// range1(1, 20 )
// 1. distance: 20 - 1 + 1 = 20;
// 2. Math.random() * distance 这个值，最多只会是 0.0001 这种数
// 3. math.floolr(0.001) => 0
// 4. 0 + min = 1;

// 所以： 这个range的取值为： 大于或者等于1， 小于或者等于20


