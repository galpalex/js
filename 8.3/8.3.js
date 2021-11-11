const book1 = {
  name: "The Imposter’s Handbook",
  author: "Rob Conery",
  year: 2016,
};
const book2 = {
  name: "HTML & CSS",
  author: "Jon Duckett",
  year: 2011,
};

const bookUtils = {
  getFirstPublished(book1, book2) {
    return Math.min(book1.year, book2.year);
  },
  setNewEdition(book, editionYear) {
    book.year = editionYear;
  },
  setLanguage(book, language) {
    book.language = language;
  },
  setTranslation(book, language, translator) {
    book.translation = { language, translator };
  },
  setPublisher(book, name, location) {
    book.publisher = { name, location };
  },
};
//one func is outside of bookUtils to practise different syntax
bookUtils.isSamePublisher = function (book1, book2) {
  return (
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location
  );
};

///////////////////////////////////////////////////////////////// console.log
console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, 2017);
bookUtils.setLanguage(book1, "English");
bookUtils.setTranslation(book1, "Hebrew", "Avi Cohen");
bookUtils.setPublisher(book1, "StarPublisher", "Tel Aviv");
bookUtils.setPublisher(book2, "StarPublisher", "Tel Aviv");
console.log(bookUtils.isSamePublisher(book1, book2));

console.log(book1);
