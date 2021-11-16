const first = [1, 2, 3, 4, 5, 6];

const doubleValues = (array) => {
  return array.map(function doubled(item) {
    return item * 2;
  });
};

//1
//console.log(doubleValues(first));
const onlyEvenValues = (array) => {
  let result = [];
  array.map(function (item) {
    if (item % 2 === 0) {
      result.push(item);
    }
  });
  return result;
};
//2
//console.log(onlyEvenValues(first));

//3
// Write a function called showFirstAndLast which accepts an array as an argument and returns a new array with strings that have only the first and last characters of each string in the input array. It should ignore array elements that are not strings.
// For example:
// input: [1, 'abc', 'ab', 5', 'abcd', 'a']
// output: ['ac', 'ab', 'ad', 'a']

const example = [1, "abc", "ab", 5, "abcd", "a"];

const showFirstAndLast = (array) => {
  let result = [];
  let newItem = "";
  array.map(function (item) {
    if (typeof item === "string") {
      if (item.length < 3) {
        result = [...result, item];
      } else {
        newItem = item[0] + item[item.length - 1];
        result = [...result, newItem];
      }
    }
  });
  return result;
};
//3
//console.log(showFirstAndLast(example));

//4

const vowelCount = (str) => {
  let result = {};
  let objKey = "aeiou";
  str
    .toLowerCase()
    .split("")
    .map(function (char) {
      if (objKey.includes(char)) {
        if (result[char]) result[char]++;
        else result[char] = 1;
      }
    });
  return result;
};
//console.log(vowelCount("Alexander"));

//5
const capitalize = (str) => {
  const array = str.split("");
  const uppercased = array.map(function (item) {
    return item.toUpperCase();
  });
  return uppercased.join("");
};

//console.log(capitalize("function called shiftLetters"));

//6
const shiftLetters = (str) => {
  let result = [];
  //alphabet doesn't include "a" because I don't shift "a"
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  str
    .toLowerCase()
    .split("")
    .map(function (char) {
      // I don't shift "a", don't change anything that isn't alphabet
      if (alphabet.indexOf(char) > 0) {
        result.push(alphabet[alphabet.indexOf(char) - 1]);
      } else result.push(char);
    });
  return result.join("");
};
//console.log(shiftLetters("Answer the questions!"));

//7

const swapCase = (str) => {
  let array = str.toLowerCase().split("");
  let result = [];
  let isSecond = false;

  array.map(function (char) {
    if (char === " " || isSecond) {
      result.push(capitalize(char));
    } else {
      result.push(char);
    }
    if (char === " ") isSecond = !isSecond;
  });

  return result.join("");
};
console.log(swapCase("Create a function called swapCase that takes"));
//output "create A function CALLED swapcase THAT takes"
