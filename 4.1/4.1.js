let numSiblings = prompt("How many siblings do you have?");
if (+numSiblings === 1) {
  console.log("1 sibling!");
} else if (numSiblings > 1) {
  console.log("More than 1 sibling");
} else {
  console.log("No siblings");
}
// 6. it's happening because computer recognizes input as string and if I use expression (numSiblings === 1) i ask if '1' string = 1 number and it false, that's why i get meesage no siblings
// 7. now it's works because +numSiblings is a number and 1 as number === 1
//8. we use operator === when we whant exact equality including type of variable, we wanted in this case exact equality to 1 as number and also as type that's why we had to convert promt to number by using plus  +numSiblings
