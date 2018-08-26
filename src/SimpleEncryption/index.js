function encrypt(text, n) {
  if (text === null) return null;
  let result = text;
  let firstPart = [];
  let secondPart = [];

  for (let i = 0; i < n; i += 1) {
    result.split('').forEach((val, index) => {
      if (((index + 1) % 2) === 0) {
        firstPart.push(val);
      } else {
        secondPart.push(val);
      }
    });
    result = [...firstPart, ...secondPart].join('');
    firstPart = [];
    secondPart = [];
  }

  return result;
}

function decrypt(encryptedText, n) {

  if (encryptedText === null) return null;

  const textLength = encryptedText.length;
  let result = encryptedText.split('');

  for (let j = 0; j < n; j += 1) {
    const secondPart = result.slice(Math.floor(result.length / 2), result.length);
    const firstPart = result.slice(0, Math.floor(result.length / 2));
    result = [];

    for (let i = 0; i < textLength; i += 1) {
      if (i % 2 === 0) {
        result.push(secondPart.shift());
      } else {
        result.push(firstPart.shift());
      }
    }
  }
  return result.join('');
}

console.log(
  encrypt('This is a test!', 0),
  encrypt('This is a test!', 1),
  encrypt('This is a test!', 2),
  encrypt('This is a test!', 3),
  encrypt('This is a test!', 4),
  encrypt('This is a test!', -1),
  encrypt('This kata is very interesting!', 1),
);

console.log(
  decrypt('This is a test!', 0),
  decrypt('hsi  etTi sats!', 1),
  decrypt('s eT ashi tist!', 2),
  decrypt(' Tah itse sits!', 3),
  decrypt('This is a test!', 4),
  decrypt('This is a test!', -1),
  decrypt('hskt svr neetn!Ti aai eyitrsig', 1),
);

console.log(
  encrypt('', 0),
  decrypt('', 0),
  encrypt(null, 0),
  decrypt(null, 0),
);
