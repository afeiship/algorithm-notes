/**
 //注意对象必须是以下格式的才可以通过此方式转化为数组
//获取的DOM集合，以及函数的arguments也可以通过此方式转化为数组
 */
// 这里的slic(0) 中的参数 0 ，可以省略
function likeToArray(inObj) {
  return Array.prototype.slice.call( inObj );
}
