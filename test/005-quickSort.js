/**
原理：

快速排序也是分治法思想的一种实现，他的思路是使数组中的每个元素与基准值（Pivot，通常是数组的首个值，A[0]）比较，数组中比基准值小的放在基准值的左边，形成左部；大的放在右边，形成右部；接下来将左部和右部分别递归地执行上面的过程：选基准值，小的放在左边，大的放在右边。。。直到排序结束。

步骤：
1.找基准值，设Pivot = a[0]
2.分区（Partition）：比基准值小的放左边，大的放右边，基准值(Pivot)放左部与右部的之间。
3.进行左部（a[0] - a[pivot-1]）的递归，以及右部（a[pivot+1] - a[n-1]）的递归，重复上述步骤。

https://www.cnblogs.com/libin-1/p/5998870.html
http://blog.csdn.net/yzllz001/article/details/50982841
 */

var assert = require('assert');


// 升序排列：
function quickSort( inArray ){

  if( inArray.length <= 1) return inArray;

  var baseValue = inArray[0];
  var left = [];
  var right = [];

  //这里要注意： 如果第一个已经作为base值了，那么就不能以 0 为起点了
  for (let index = 1; index < inArray.length; index++) {
    const item = inArray[index];
    if( item <= baseValue){
      left.push( item );
    }else{
      right.push(item);
    }
  }

  return [].concat(
    //left:
    quickSort(left),

    // middle:
    [ baseValue ],

    //right:
    quickSort(right)
  );
}


// 降序排列：
function quickSort2( inArray ){
  if( inArray.length <= 1) return inArray;

  var baseValue = inArray[0];
  var left = [];
  var right = [];

  //这里要注意： 如果第一个已经作为base值了，那么就不能以 0 为起点了
  for (let index = 1; index < inArray.length; index++) {
    const item = inArray[index];
    if( item > baseValue){
      left.push( item );
    }else{
      right.push(item);
    }
  }

  return [].concat(
    //left:
    quickSort2(left),

    // middle:
    [ baseValue ],

    //right:
    quickSort2(right)
  );
}

// console.log(

//   quickSort( [1,13,24,11,11,14,1,2] )
// );


describe('005-quickSort', function() {
  it(" quickSort('result') ", function() {
    var arr = [0, 1,13,24,11,14,2];
    assert.deepEqual( quickSort(arr), [ 0, 1, 2, 11, 13, 14, 24 ] );
  });


  it(" quickSort2('reverse') ", function() {
    var arr = [0, 1,13,24,11,14,2];
    assert.deepEqual( quickSort2(arr), [ 24, 14, 13, 11, 2, 1, 0 ] );
  });
});
