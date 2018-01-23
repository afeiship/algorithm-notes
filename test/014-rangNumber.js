/*
生成从0到指定值的数字数组
 */



function range1(n) {
  var arr=[0], length=n, i=1;
  for(;arr.push(i++)<=length;){}
  console.log(arr);
}


function range2(n) {
  var arr = new Array(n+1);
  return Array.from(arr,(item,i)=>i+1);
}


function range3(n) {
  var arr = new Array(n+1);
  return Object.keys(arr.join().split(','))
}


function range4(n) {
  var arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push( i );
  }
  return arr;
}
