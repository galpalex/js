const myCountry = {
  country: "USA",
  capital: "Washington",
  language: "English",
  population: 350,
  neighbours: ["Mexico", "Canada", "Russia"],
  describe() {
    console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they
      have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
  },
  checkIsland() {
    this.neighbours.length === 0
      ? (this.isIsland = true)
      : (this.isIsland = false);
  },
};
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry.isIsland);
