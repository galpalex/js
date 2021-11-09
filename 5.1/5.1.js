const countryToLiveIn = (language, isIsland, population, country) => {
  if (
    typeof language === "string" &&
    typeof isIsland === "boolean" &&
    !isNaN(population) &&
    typeof country === "string"
  ) {
    if (
      language.toLowerCase() === "english" &&
      isIsland === false &&
      population < 50
    ) {
      return `You should live in ${country}`;
    } else return `${country} does not meet your criteria`;
  } else return `invalid input`;
};
console.log(countryToLiveIn("English", false, 20, "Denmark"));
console.log(countryToLiveIn("English", false, 51, "Denmark"));
