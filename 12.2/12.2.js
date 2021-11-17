const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//1
function getCandy(candyStore, id) {
  return candyStore.candies.find((item) => item.id === id);
}
//console.log(getCandy(candyStore, "as12f"));

//2 credit to Mahmood
function getPrice(candyStore, id) {
  return candyStore.candies.find((item) => item.id === id).price;
}
//console.log(getPrice(candyStore, "as12f"));

//3
function addCandy(candyStore, id, name, price) {
  let arrCandy = candyStore.candies;
  arrCandy.push({ name: name, id: id, price: price, amount: 1 });
}
//addCandy(candyStore, "gfdd4", "snikers", 5);
//console.log(candyStore);

//4
function buy(candyStore, id) {
  candyStore.cashRegister += getPrice(candyStore, id);
  getCandy(candyStore, id).amount--;
}
//buy(candyStore, "5hd7y");
//console.log(candyStore);
