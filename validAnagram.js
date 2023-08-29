function validAnagram(str1, str2) {
  if (str1.length != str2.length) {
      return false;
  }
  
  // create two empty object
  let firstStringObject = {};
  let secondStringObject = {};
  // loop over first string and check for character frequency
  for (let value of str1) {
      firstStringObject[value] = (firstStringObject[value] || 0) + 1;
  }
  // loop over second string and check for character frequency
  for (let value of str2) {
      secondStringObject[value] = (secondStringObject[value] || 0) + 1;
  }
  for (let key in firstStringObject) {
      if (!key in secondStringObject) {
          return false;
      }
      if (firstStringObject[key] !== secondStringObject[key]) {
          return false;
      }
  }
  return true;
}


validAnagram('qwerty', 'qrewty');