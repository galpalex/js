const numbers = [1, -5, 666, 2, 400, 11];
//1
const descTOascOrder = numbers.slice().sort((a, b) => a - b);
console.log(descTOascOrder);

//2
const ascTOdescOrder = numbers.slice().sort((a, b) => b - a);
console.log(ascTOdescOrder);
