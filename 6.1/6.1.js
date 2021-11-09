const arr = [1, 7, 3, 0, -5, 7, 3, 9];
const arr1 = [1, 3, 9];
// 1
for (const value of arr) {
  console.log(value);
}

const arrayLength = (array) => {
  let i = 0;
  for (const value of array) {
    i++;
  }

  return i;
};

//2
//console.log(arrayLength(arr));

const arraySum = (array) => {
  let i = 0;
  for (const value of array) {
    i += value;
  }
  return i;
};

//3
//console.log(arraySum(arr));

const arrayMulti = (array) => {
  let i = 1;
  for (const value of array) {
    i = i * value;
  }
  return i;
};

//4
//console.log(arrayMulti(arr1));
