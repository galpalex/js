function findSmallest(a, b, c) {
  if (c < a && c < b) {
    return c;
  } else if (a < b && a < c) {
    return a;
  } else {
    return b;
  }
}
console.log(findSmallest(52, 66, 2));

// 1. First find the line that contains the problem. Write it down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

//1 added console.log() - line 10
//2terminal output ReferenceError: findSmalest is not defined - line 10 - i change function name line 10 from findSmalest to findSmallest
//3 wrong logic line 2 we cant compare 3 variables at one time, we should split to pairs
