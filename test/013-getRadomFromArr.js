/**
2 随机获取数组中的元素
 */

var assert = require('assert');

function getRadomFromArr(inArray){
  var randomIndex = Math.floor( Math.random() * inArray.length );
  return inArray[randomIndex];
}

// 0. getRadomFromArr(['前端’','后端','测试','运营','项目经理','交互','UI设计师'])
// 1. Math.random() => (0,1)  大于0， 小于1的值
// 2. inArray.length 为 7
// 3. randomIndex 最大值为6, 最小值为 0
// 4. 所以，可以取到数组里的任何值，也不会有overflow的情况



