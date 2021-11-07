const describeCountry = (country, population, capitalCity) => {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};
let firstCountry = describeCountry("Israel", 8, "Jerusalem");
let secondCountry = describeCountry("USA", 200, "Washington");
let thirdCountry = describeCountry("Germany", 80, "Berlin");
console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
