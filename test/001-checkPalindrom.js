
var assert = require('assert');

var rs1 = checkPalindrom('reer');
var rs2 = checkPalindrom('beer');
var rs3 = checkPalindrom('pip');
var rs4 = checkPalindrom('ror');


/**
 * Q1 判断一个单词是否是回文？
 * 回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来，产生首尾回环的情趣，叫做回文，也叫回环。比如 mamam redivider .
 */
function checkPalindrom(inStr){
  return inStr === inStr.split('').reverse().join('');
}


describe('checkPalindrom', function() {
  it(" checkPalindrom('reer') ", function() {
    assert.equal( checkPalindrom('reer'), true );
  });

  it(" checkPalindrom('beer') ", function() {
    assert.equal( checkPalindrom('beer'), false );
  });

  it(" checkPalindrom('pip') ", function() {
    assert.equal( checkPalindrom('pip'), true );
  });

  it(" checkPalindrom('ror') ", function() {
    assert.equal( checkPalindrom('ror'), true );
  });

});
