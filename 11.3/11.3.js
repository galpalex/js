const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//1
const allNames = (arr) => {
  return arr.map(function (info) {
    return info.name;
  });
};
//console.log(allNames(data));

//2;
const bornBefore1990 = (arr) => {
  let result = [];
  arr.map(function (info) {
    if (+info.birthday.slice(-4) < 1990) result = [...result, info];
  });
  return result;
};

//console.log(bornBefore1990(data));

//3
const food = (arr) => {
  let result = {};
  let meatNfish = [];
  arr.map(function (info) {
    meatNfish = [...info.favoriteFoods.meats, ...info.favoriteFoods.fish];
    meatNfish.map(function (item) {
      if (result[item]) result[item]++;
      else result[item] = 1;
    });
  });
  return result;
};

console.log(food(data));
