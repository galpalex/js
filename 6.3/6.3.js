arr = ["boo", "doooo", "hoo", "ro"];
arrL = [3, 5, 3, 2];

const myLength = (array) => {
  let i = 0;
  let arrLen = [];
  for (const value of array) {
    arrLen[i] = value.length;
    i++;
  }

  return arrLen;
};
console.log(myLength(arr));
