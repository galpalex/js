//Block 1
// function funcA() {
//   var a = 1;
//   console.log(a);
//   console.log(foo());

//   function foo() {
//     return 2;
//   }
// }
//funcA();
//expected
//undefined - var a hoisted but initialisation happens only in line 5, we could write var a = 1; in line 3 to fix it
//2 - function foo() hoisted

//Block 2
// var fullName = "John Doe";
// var obj = {
//   fullName: "Colin Ihrig",
//   prop: {
//     fullName: "Aurelio De Rosa",
//     getFullName: function () {
//       return this.fullName;
//     },
//   },
// };
// console.log(obj.prop.getFullName());

// var test = obj.prop.getFullName;
// console.log(test());

// line 26 Aurelio De Rosa  - this refers to object obj.prop,  fullName: "Aurelio De Rosa", from the same object local scope
//console.log(test()); gets John Doe, this refers to global object, fullname of window

//block3
// function funcB() {
//   let a = 0;
//   let b = 0;
//   a++;

//   return a;
// }
// funcB();
// console.log(typeof a);
// console.log(typeof b);
//undefined
//number
// a local variable let thats why we get undefined outside the scope of function
//we dont declare b so it becomes global variable and we get outside function b=0 = number
//we can declare let b=0 to solve it. line 38

//block4
// function funcC1() {
//   console.log("1");
// }
// funcC1();
// function funcC() {
//   console.log("2");
// }
// funcC();
//expected
//2
//2
//it happens becaouse of hoisting, what written line 58 will hapenn in both funcC function
//we can solve it by naming functions different names

//block5
// function funcD1() {
//   d = 1;
// }
// funcD1();
// console.log(d);
// function funcD2() {
//   var e = 1;
// }
// funcD2();
// console.log(e);

//expected
//1 because we dont declare d so it becomes global variable outside this function, we can declare it by adding let d = 1; in line 69
// }
// not defined because e only defined in scope of function funcD2()

//block6
function funcE() {
  console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;

funcE();
//expected
//Value of f in global scope:undefined - var f hoisted, declared but still has no value in line 88(it has value from line 89)
//Value of f in local scope:1 - var f hoisted, declared and initialised in line 89, when we call funcE in line 91 JS replace F with global var F
//we code move console.log("Value of f in global scope: ", f); to line 90 so we could see Value of f in global scope: 1
