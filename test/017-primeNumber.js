/**
质数（prime number）又称素数，有无限个。
质数定义为在大于1的自然数中，除了1和它本身以外不再有其他因数。

这个更好理解：
质数又称素数。一个大于1的自然数，除了1和它自身外，不能被其他自然数整除的数叫做质数；否则称为合数。

https://baike.baidu.com/item/%E8%B4%A8%E6%95%B0/263515?fr=aladdin
 */


// function primeNumber(n) {
//   var result = [];
//   for (var index = 1; index <= n; index++) {
//     for (var j = 2; j < n; j++) {
//       if( index % j !== 0){
//         if( result.indexOf(j)==-1){
//           // result.push(j);
//         }
//       }
//     }
//   }
//   return result;
// }




function isPrime(n) {
  if (n <= 3) { return n > 1; }
  if (n % 2 == 0 || n % 3 == 0) { return false; }

  for (var  i = 5; i * i <= n; i += 6) {
      if (n % i == 0 || n % (i + 2) == 0) { return false; }
  }
  return true;
}
