function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//   1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.
//added console.log() line 4
// line 2 has problem, i see variables from index 0 to 9(in debug mode) and function want to return not existing number at index arr[10], also i get output NaN.
//i change index to be index-1, from arr[2] + arr[4] + arr[6] + arr[8] + arr[10] to arr[1] + arr[3] + arr[5] + arr[7] + arr[9]
