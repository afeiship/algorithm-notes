/**
Q9 实现类似getElementsByClassName 的功能
自己实现一个函数，查找某个DOM节点下面的包含某个class的所有DOM节点？不允许使用原生提供的 getElementsByClassName querySelectorAll 等原生提供DOM查找函数。

https://www.cnblogs.com/libin-1/p/5998870.html

关键点在这里： hasClass:
return new RegExp('(?:^|\\s)' + className + '(?:\\s|$)').test(el.className);
// 只需要定位位置，所以用: ?:
// 两种情况：1. 开头位置，肯定没有空格等情况 2. 如果不是开头，就得加个空格来匹配，防止 这种情况导致错误 className="a" className="abc"



return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1 ;

 */
function getByElsClass(inClassName, inContext) {
  // get by *
  // node.className.indexOf( inClassName ) > -1;
  // to array
  var context = inContext || document;
  var nodes = context.getElementsByTagName('*');
  var length = nodes.length;
  var BLANK = ' ';
  var result = [ ];

  for (var index = 0; index < length; index++) {
    var el = nodes[index];
    var className = el.className;
    //hasClass
    if( (BLANK + className + BLANK).indexOf(BLANK + inClassName + BLANK) > -1 ){
      result.push( el );
    }
  }

  return result;
}


// DONE!
