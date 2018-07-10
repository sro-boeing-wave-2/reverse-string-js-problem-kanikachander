// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (a) => {
  let reversedString = '';
  for (let i = a.length - 1; i >= 0; i -= 1) {
    reversedString += a[i];
  }
  return reversedString;
};

module.exports = reverse;
