function print(value) {
  return console.log(value);
}

const isString = (str, func) => {
  if (typeof str === "string") return func(str);
  else return false;
};

//1
//console.log(isString(1, print));
//isString("alex", print);

const firstWordUpperCase = (str, func) => {
  let array = str.split(" ");
  array[0] = array[0].toUpperCase();
  return func(array);
};
function dashes(array) {
  return array.join("-");
}

//2
//console.log(firstWordUpperCase("function checks that", dashes));

function underScore(array) {
  return array.join("_");
}
//3
//console.log(firstWordUpperCase("function checks that", underScore));

//4
function multiplyByTwo(num) {
  return num * 2;
}

const isEven = (number, func) => {
  if (number % 2 === 0) return func(number);
  else return false;
};

console.log(isEven(4, multiplyByTwo));
//console.log(isEven(5, multiplyByTwo));
