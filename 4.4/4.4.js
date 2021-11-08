const checkNum = (num) => {
  let str = "";
  for (let i = 1; i <= num; i++) {
    //added check if its first number than i dont add a comma
    if (i > 1) {
      if (i % 7 === 0) {
        if (i.toString().indexOf(7) !== -1) {
          str += ",BOOM-BOOM";
        } else str += ",BOOM";
      } else str += "," + i.toString();
    } else if (i % 7 === 0) {
      if (i.toString().indexOf(7) !== -1) {
        str += "BOOM-BOOM";
      } else str += "BOOM";
    } else str += i.toString();
  }

  console.log(str);
};
checkNum(18);
