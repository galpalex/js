const book = {
  bookName: "The Imposter’s Handbook",
  authorName: "Rob Conery",
  publishingYear: 2016,
  pagesNumber: 452,
};

const swap = (obj) => {
  let objSwapped = {};
  for (let key in obj) {
    objSwapped[obj[key]] = key;
  }
  return objSwapped;
};

const test = swap(book);

console.log(book);
console.log(test);
