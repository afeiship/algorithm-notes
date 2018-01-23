/**
 * 打乱数字数组的顺序
 */
function shuffle(inArray) {
  return inArray.sort(function () {
    return Math.random() - 0.5
  });
}
