function percentageOfWorld1(population) {
  return `it's about ${+((population / 7900) * 100).toFixed(
    1
  )}% of the world population`;
}
const popGermany = percentageOfWorld1(83.2);
const popRussia = percentageOfWorld1(144);
const popIsrael = percentageOfWorld1(8);
console.log(popGermany);
console.log(popRussia);
console.log(popIsrael);

let percentageOfWorld2 = function (population) {
  return `it's about ${+((population / 7900) * 100).toFixed(
    1
  )}% of the world population - function 2`;
};
const popGermany2 = percentageOfWorld2(83.2);
const popRussia2 = percentageOfWorld2(144);
const popIsrael2 = percentageOfWorld2(8);
console.log(popGermany2);
console.log(popRussia2);
console.log(popIsrael2);
