const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

//a1

const descTOascOrder = foods.slice().sort();
//console.log(descTOascOrder);

//a2
const ascTOdescOrder = foods.slice().sort((a, b) => {
  if (a > b) return -1;
  if (b > a) return 1;
  return 0;
});
//console.log(ascTOdescOrder);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "hummus",
  "pizza with extra pineapple",
];

//b1

const descTOascOrderUpper = foodsWithUpperCase.slice().sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) return -1;
  if (b < a) return 1;
  return 0;
});
console.log(descTOascOrderUpper);

//b2
const ascTOdescOrderUpper = foodsWithUpperCase.slice().sort((a, b) => {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a > b) return -1;
  if (b > a) return 1;
  return 0;
});
//console.log(ascTOdescOrderUpper);

//c
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

//c1
const ascTOdescOrderW = words.slice().sort((a, b) => b.length - a.length);
//console.log(ascTOdescOrderW);
