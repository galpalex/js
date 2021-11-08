const scoreCompilator = (score) => {
  if (score >= 0 && score < 65) return "F";
  else if (score > 64 && score < 70) return "D";
  else if (score > 69 && score < 80) return "C";
  else if (score > 79 && score < 90) return "B";
  else return "A";
};
console.log(scoreCompilator(90));
