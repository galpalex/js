function getSum(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  return sum;
}
console.log(getSum([1, 2, 3], [5, 66, 23]));

// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

//method - i run the code with breakpoints and see the error in debug console
//1 line 10 - added "," between two arrays getSum([1, 2, 3],[(5, 66, 23)]); - Uncaught TypeError: Cannot read property 'length' of undefined
//2 line 2  Uncaught TypeError: Assignment to constant variable. - changed const sum = 0; to let sum = 0;
//3 i see return value undefined in variables stack - added -  return sum; it seems to work fine now, output 100
