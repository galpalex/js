const steps = (num) => {
  arr = [];
  nextRowArr = [];
  for (let i = 0; i < num; i++) {
    arr.push("#");
    nextRowArr = [...arr];
    for (let j = 1; j < num - i; j++) {
      arr.push(" ");
    }
    console.log(arr);
    arr = [...nextRowArr];
  }
};

//steps(2);
//steps(3);
steps(5);
