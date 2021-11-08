const isLeap = (year) => {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) console.log("It is indeed a leap year");
      else console.log("This is not a leap year");
    } else console.log("It is indeed a leap year");
  } else console.log("This is not a leap year");
};
isLeap(2012);
isLeap(2100);
isLeap(2400);
