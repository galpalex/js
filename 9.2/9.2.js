arr = ["boo", "doooo", "hoo", "ro"];
arrL = [3, 5, 3, 2];

const myLengthWhile = (array) => {
  let i = 0;
  let arrLen = [];
  while (i < array.length) {
    arrLen[i] = array[i].length;
    i++;
  }

  return arrLen;
};
console.log(myLengthWhile(arr));
