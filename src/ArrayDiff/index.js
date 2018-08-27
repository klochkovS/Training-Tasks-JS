function array_diff(a, b) {
  return a.filter(val => b.indexOf(val) === -1);
}

console.log(array_diff([1, 2, 3], [2]));
