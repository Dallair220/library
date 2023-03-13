const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function output

const b1 = new Book('Paul', 'We did it!', 245);
addBookToLibrary(b1);
const b2 = new Book('Jones', 'Nice!', 234);
addBookToLibrary(b2);
const b3 = new Book('Dies', 'Mice!', 54);
addBookToLibrary(b3);
const b4 = new Book('Das', 'Hot!', 3457);
addBookToLibrary(b4);

console.log (myLibrary);



