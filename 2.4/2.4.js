const mydate = () => {
  const date = new Date();
  let myDay = "";
  let myMonth = "";
  switch (date.getMonth()) {
    case 0:
      myMonth = "January";
      break;
    case 1:
      myMonth = "February";
      break;
    case 2:
      myMonth = "March";
      break;
    case 3:
      myMonth = "April";
      break;
    case 4:
      myMonth = "May";
      break;
    case 5:
      myMonth = "June";
      break;
    case 6:
      myMonth = "July";
    case 7:
      myMonth = "August";
      break;
    case 8:
      myMonth = "September";
      break;
    case 9:
      myMonth = "October";
      break;
    case 10:
      myMonth = "November";
      break;
    case 11:
      myMonth = "December";
      break;

    default:
      console.log(`Sorry`);
  }
  switch (date.getDay()) {
    case 0:
      myDay = "Sunday";
      break;
    case 1:
      myDay = "Monday";
      break;
    case 2:
      myDay = "Tuesday";
      break;
    case 3:
      myDay = "Wednesday";
      break;
    case 4:
      myDay = "Thursday";
      break;
    case 5:
      myDay = "Friday";
      break;
    case 6:
      myDay = "Saturday";
      break;
    default:
      console.log(`Sorry`);
  }
  return `Today is ${myDay} the ${date.getDate()} of ${myMonth}, ${date.getFullYear()}`;
};
console.log(mydate());
