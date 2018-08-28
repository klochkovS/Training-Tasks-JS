/**
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog"
 * is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram.
 * Return True if it is, False if not. Ignore numbers and punctuation.
 */

function isPangram(string) {
  const testString = string.toUpperCase().split('');
  let alfabetCount = 0;
  const testArray = [];

  testString.forEach((val) => {
    const code = val.charCodeAt(0);
    if (code >= 65 && code <= 90 && testArray.indexOf(code) === -1) {
      testArray.push(code);
      alfabetCount += 1;
    }
  });

  return alfabetCount >= 26 ? true : false;
}

let string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string));

string = "This is not a pangram."
console.log(isPangram(string));
