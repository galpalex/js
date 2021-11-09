//population in millions
populations = [10, 20, 30, 40];

function percentageOfWorld1(population) {
  return `it's about ${+((population / 7900) * 100).toFixed(
    1
  )}% of the world population`;
}

const populationPercentages = (populations) => {
  percentages = [];
  for (const value of populations) {
    percentages.push(percentageOfWorld1(value));
  }
  return percentages;
};

console.log(populationPercentages(populations));
