//block1
// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);
// console.log(firstResult);
// console.log(result);
//in line 10 we dont execute firstResult but assign to it function otherFunction(input) {return b;}
//line 11 we execute firstResult, and get 5 because we didnt declare 5 in line 7 so JS takes it as global variable

//block2
// var a = 1;
// function b2() {
//   a = 10;
//   return;
//   function a() {}
// }
// b2();
// console.log(a);
//expected  a =1 as variable from same scope as console.log(a);

//block3
let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };

  setTimeout(log, 100);
}

//line 31-33 function expression - it does not execute the function
//line 34 it set timeout 100ms and then run log function 3 times(for loop) with i=3 because of timeout
