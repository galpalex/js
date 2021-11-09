//1
const filledArray = Array(100).fill({ name: "Alex" });

//2
const filledArray2 = Array.from({ length: 100 }, (v, k) => 1 + k);

//3 object values to array
const person = {
  name: "Alex",
  age: 36,
  city: "Rehovot",
  gradeMath: 88,
};
//const objValues = Object.values(person);
//console.log(objValues);

//4
//const fromArrayToObject = Object.assign({}, objValues);

//5
// returns True
//console.log(Array.isArray(objValues));

//6 I created 2 options to deep copy and shallow copy
//Create a copy of an array that won’t effect the original
//array if modified.
let arrOrigin2 = [1, 2, 3, 4, 5];
let copyArr2 = JSON.parse(JSON.stringify(arrOrigin2));
copyArr2[0] = 9;
//console.log(copyArr2);
//console.log("it's origin " + arrOrigin2);
//slice() method should also work for deep copy

let arrOrigin3 = [1, 2, 3, 4, 5];
let copyArr3 = arrOrigin3.slice();
copyArr3[0] = 9;
console.log(copyArr3);
console.log("it's origin " + arrOrigin3);

//Create a copy of an array that will effect the original
//array if modified.
let arrOrigin = [1, 2, 3, 4, 5];
let copyArr = arrOrigin;
copyArr[0] = 9;
//console.log(copyArr);
//console.log("it's origin " + arrOrigin);
//same result here - only shallow copy
let arrOrigin1 = [1, 2, 3, 4, 5];
let copyArr1 = Array.from(arrOrigin1);
copyArr1[0] = 9;
//console.log(copyArr1);
//console.log("it's origin " + arrOrigin1);
