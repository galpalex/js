let arr = [1, 2, 3, 4, 5, 6];

//1 max
let max = arr.reduce((acc, val) => {
  if (acc > val) return acc;
  else return val;
});
//console.log(max);

//2 sum of even numbers
let sum = arr.reduce((acc, val) => {
  if (val % 2 === 0) return acc + val;
  else return acc;
}, 0);
//console.log(sum);

//3 average
let avg =
  arr.reduce((acc, val) => {
    return acc + val;
  }) / arr.length;

//console.log(avg);
