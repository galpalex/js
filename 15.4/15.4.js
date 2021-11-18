function calcAverage(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([85, 90, 92]));

// 1. First find the line that contains the problem. Write it
// down.
// 2. Which debug method did you use to find the bug?
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all.

//added console.log() line 7
//1 line2 sum variable didnt have a value (0)- was indifinied. it was Nan. added  var sum = 0;
//we want to get average, that's why we should divide sum by arr.length - line 6 change to return sum/arr.length;
//i could change var sum and var i to let because we usually dont use it because it global and it could
//make problems but here it doesnt make problems thats why i do not change it.
