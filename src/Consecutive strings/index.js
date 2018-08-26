/*
 * You are given an array strarr of strings and an integer k.
 * Your task is to return the first longest string consisting of k consecutive strings taken in the array.
 *
 * #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 * n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
*/

function longestConsec(strarr, k) {
  const arrLength = strarr.length;
  let tmpStr = '';
  let maxLength = 0;
  let result = '';

  if (arrLength === 0 || k > arrLength || k <= 0) return result;

  for (let i = 0; i <= arrLength - k; i += 1) {
    tmpStr = strarr.slice(i, i + k).join('');

    if (tmpStr.length > maxLength) {
      maxLength = tmpStr.length;
      result = tmpStr;
    }
  }
  return result;
}


console.log(
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2),
  longestConsec(['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'], 1),
  longestConsec([], 3),
  longestConsec(['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'], 2),
  longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2),
  longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2),
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3),
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15),
  longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0),
);
