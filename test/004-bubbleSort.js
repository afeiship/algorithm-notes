/**
 Q4 排序算法
如果抽到算法题目的话，应该大多都是比较开放的题目，不限定算法的实现，但是一定要求掌握其中的几种，所以冒泡排序，这种较为基础并且便于理解记忆的算法一定需要熟记于心。冒泡排序算法就是依次比较大小，小的的大的进行位置上的交换。
https://www.cnblogs.com/libin-1/p/5998870.html
 */

var assert = require('assert');

function bubbleSort( inArray, inReverse ){

  var i, j;
  var len = inArray.length;
  var len_ = len - 1;

  for (var i = 0; i < len_; i++) {
    for (var j = i + 1; j < len; j++) {
      var current = inArray[ i ];
      var next = inArray[ j ];

      if(!inReverse){
        // 交换 current/next
        if( current > next){
          inArray[i] = next;
          inArray[j] = current;
        }
      }else{
        // 交换 current/next
        if( current < next){
          inArray[i] = next;
          inArray[j] = current;
        }
      }
    }
   }

   return inArray;
 }






 describe('004-bubbleSort', function() {
  it(" bubbleSort([1,13,24,11,11,14,1,2])  => [ 1, 1, 2, 11, 11, 13, 14, 24 ]", function() {
    var arr = [1,13,24,11,11,14,1,2] ;
    assert.deepEqual( bubbleSort(arr), [ 1, 1, 2, 11, 11, 13, 14, 24 ] );
  });

  it(" bubbleSort([1,13,24,11,11,14,1,2], true) =>  [ 24, 14, 13, 11, 11, 2, 1, 1 ]", function() {
    var arr = [1,13,24,11,11,14,1,2] ;
    assert.deepEqual( bubbleSort(arr,true), [ 24, 14, 13, 11, 11, 2, 1, 1 ] );
  });
});
