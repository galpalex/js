const book = {
  bookName: "The Imposter’s Handbook",
  authorName: "Rob Conery",
  publishingYear: 2016,
  pagesNumber: 452,
};

const about = (book) =>
  `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}.`;

console.log(about(book));
