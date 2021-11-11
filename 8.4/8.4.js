const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

// 1. format array to lower case, filters whitespaces, splits values to one character
// like this [["h","e","l","l",o"], ["g","o","o","d","d","a","y"]]
let newArr = array.map(function (word) {
  return word
    .toLowerCase()
    .split("")
    .filter((c) => c != " ");
});
//console.log(newArr);
// 2. transform array to this  ["h", "h", "o", "o", "d", "d", "a", "y", "d"];
const transformArray = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (const char of arr[i]) {
      newArr = [...newArr, char];
    }
  }
  return newArr;
};

//3. count over all the letters and return an object with the
//letter as the key and the letter count as the value.

const countLetters = (arr) => {
  const obj = {};

  for (const value of arr) {
    let i = 0;
    let char = value;

    for (const value of arr) {
      if (value === char) i++;
    }
    obj[value] = i;
  }

  return obj;
};

//console.log(transformArray(newArr));
console.log(countLetters(transformArray(newArr)));

const finalObj = countLetters(transformArray(newArr));
//******************return the letter with the most occurrences as well**********************

let maxOccurNumber = Math.max(...Object.values(finalObj));
console.log(maxOccurNumber);

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

let maxOccurKey = getKeyByValue(finalObj, maxOccurNumber);
console.log(maxOccurKey);
