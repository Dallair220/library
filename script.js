const myLibrary = [];
const newBookBtn = document.querySelector('.new');
const popup = document.querySelector('.popup');
let tbody = document.createElement('tbody');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.switchReadStatus = function () {
  this.read = !this.read;
};

function resetTable() {
  tbody.remove();
  tbody = document.createElement('tbody');
  const table = document.querySelector('table');
  table.appendChild(tbody);
}

function output() {
  resetTable();

  myLibrary.forEach((bk, index) => {
    const book = bk;

    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    let td = document.createElement('td');
    td.textContent = book.title;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = book.author;
    tr.appendChild(td);

    td = document.createElement('td');
    td.textContent = book.pages;
    tr.appendChild(td);

    td = document.createElement('td');
    const btn = document.createElement('button');
    btn.classList.add('read');
    btn.textContent = book.read ? '✅' : '❌';
    tr.appendChild(td);
    td.appendChild(btn);
    // Add functionality to change read status
    btn.addEventListener('click', () => {
      book.switchReadStatus();
      output();
    });

    td = document.createElement('td');
    const btn2 = document.createElement('button');
    btn2.classList.add('delete');
    btn2.textContent = 'Delete';
    tr.appendChild(td);
    td.appendChild(btn2);
    // Add functionality to delete row
    btn2.addEventListener('click', () => {
      myLibrary.splice(index, !index ? 1 : index);
      output();
    });
  });
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  output();
}

// popup
newBookBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

const submitBook = document.querySelector('.sub');
submitBook.addEventListener('click', (event) => {
  popup.style.display = 'none';
  event.preventDefault();
  // Create new book with form input
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read');

  const addBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  );
  addBookToLibrary(addBook);
});

document.addEventListener('click', (event) => {
  if (!popup.contains(event.target) && !newBookBtn.contains(event.target))
    popup.style.display = 'none';
});

const b2 = new Book('Die Kölner Chronik', 'Hermann Weinsberg', 4711, true);
addBookToLibrary(b2);
const b1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 208, false);
addBookToLibrary(b1);
const b3 = new Book('Die Blechtrommel', 'Günter Grass', 730, true);
addBookToLibrary(b3);
