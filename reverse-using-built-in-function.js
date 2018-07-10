// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  const array = str.split('');
  const reversedArray = array.reverse();
  let reversedString = reversedArray.toString();
  reversedString = reversedString.replace(/,/g, '');
  return reversedString;
};

export default reverse;
