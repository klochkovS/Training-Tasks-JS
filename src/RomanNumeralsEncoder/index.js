/**
 * Create a function taking a positive integer as its parameter
 * and returning a string containing the Roman Numeral representation of that integer.
 * Modern Roman numerals are written by expressing
 * each digit separately starting with the left most digit and skipping any digit with a value of zero.
 * In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
 * 2008 is written as 2000=MM, 8=VIII; or MMVIII.
 * 1666 uses each Roman symbol in descending order: MDCLXVI.
 */

const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
const hunds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
const thous = ['', 'M', 'MM', 'MMM'];

function solution(number) {
  if (number > 3999) return false;
  let result = '';

  result = thous[number / 1000 ^ 0];
  number %= 1000;
  result += hunds[number / 100 ^ 0];
  number %= 100;
  result += tens[number / 10 ^ 0];
  number %= 10;
  result += ones[number / 1 ^ 0];

  return result;
}
console.log(solution(1995));
