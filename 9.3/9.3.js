const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];
const food3 = ["Fries", "Pizza", "Hamburgers"];

const compare = (arr1, arr2) => {
  let arr3 = [];
  for (let word1 of arr1) {
    for (let word2 of arr2) {
      if (word1 === word2) arr3.push(word2);
    }
  }
  if (arr3.length) return arr3;
  else return false;
};

console.log(compare(food, food1));
console.log(compare(food, food3));
