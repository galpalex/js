const avg = (arr) => {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total / arr.length;
};

//const johnTeam = [89, 120, 103];
//const mikeTeam = [116, 94, 123];
//const johnTeam = [89, 120, 103];
//const mikeTeam = [116, 94, 123];
//const maryTeam = [97, 134, 105];
const johnTeam = [97, 134, 105];
const mikeTeam = [116, 94, 123];
const maryTeam = [89, 120, 103];

const teamWin = (team1Score, team1Name, team2Score, team2Name) => {
  if (avg(team1Score) > avg(team2Score)) {
    console.log(
      `${team1Name} team win in average. ${avg(team1Score)} vs ${avg(
        team2Score
      )} in average.`
    );
  } else if (avg(team1Score) < avg(team2Score)) {
    console.log(
      `${team2Name} team win in average. ${avg(team2Score)} vs ${avg(
        team1Score
      )} in average.`
    );
  } else console.log(`It's draw, with score ${avg(team1Score)} in average.`);
};
//I created initially function to compare only 2 teams
// teamWin(johnTeam, "John's", mikeTeam, "Mike's");

//it's for 3 teams
if (avg(maryTeam) > avg(mikeTeam))
  teamWin(maryTeam, "Mary's", johnTeam, "John's");
else teamWin(johnTeam, "John's", mikeTeam, "Mike's");
