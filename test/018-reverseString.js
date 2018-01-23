/**
 在JavaScript中反转字符串？
 */
// 1. 正常的反向循环数组：
function reverse1(inStr) {
  var strArr = inStr.split('');
  var result = [];
  for (var i = strArr.length - 1; i >= 0; i--) {
    result.push( strArr[i] );
  }
  return result.join('');
}


// 只循环了一半，性能会有很大的提升
function reverse2(inStr) {
  var strArr = inStr.split('');
  var result = [];
  var length = strArr.length;
  var middle = Math.floor( length/2 );

  for (var index = 0; index < middle; index++) {
    var rIndex = length - index - 1 ;

    // swap 操作：
    var current = strArr[ index ];
    strArr[ index ] = strArr[ rIndex];
    strArr[ rIndex ] = current;
  }
  return strArr.join('');
}

// 代码最少，最好理解的方案
function reverse3(str){
  return str.split('').reverse().join('');
}

// reverse2:
// 左边的元素： index
// 右边的元素： length - index - 1
