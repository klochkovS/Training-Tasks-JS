/**
 * Bob is preparing to pass IQ test.
 * The most frequent task in this test is to find out which one of the given numbers differs from the others.
 * Bob observed that one number usually differs from the others in evenness.
 * Help Bob — to check his answers,
 * he needs a program that among the given numbers finds one that is different in evenness,
 * and return a position of this number.
 * ! Keep in mind that your task is to help Bob solve a real IQ test,
 * which means indexes of the elements start from 1 (not 0) 
 */


function iqTest(numbers) {
  const arr = numbers.split(' ');
  let result;
  let evenCount = 0;
  let oddCount = 0;
  arr.forEach((val) => {
    val % 2 ? oddCount++ : evenCount++;
  });

  if (oddCount > evenCount) {
    arr.forEach((val, index) => {
      if (val % 2 === 0) result = index + 1;
    });
  } else {
    arr.forEach((val, index) => {
      if (val % 2 !== 0) result = index + 1;
    });
  }

  return result;
}

console.log(iqTest('2 4 7 8 10'));
console.log(iqTest('1 2 2'));
