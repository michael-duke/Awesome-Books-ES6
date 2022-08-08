import CreateBook from './create-book.js';
import { DynamicBook } from './dynamic-book.js';
import { validStatus, BookValidation } from './book-validation.js';

export default class BooksCollection {
  constructor() {
    this.library = JSON.parse(localStorage.getItem('books')) || [];
  }

  // Model
  addBook(book) {
    this.library.push(book);
    this.saveCollection();
    DynamicBook.renderBooks(this.library, this);
  }

  removeBook(bookId) {
    this.library = this.library.filter(({ id }) => id !== bookId);
    this.saveCollection();
  }

  onDelete(bookToDelete) {
    this.removeBook(bookToDelete);
    DynamicBook.renderBooks(this.library, this);
    this.isCollectionEmpty();
  }

  getInput() {
    const id = this.library.length + 1;

    const bookTitle = document.getElementById('title');
    const { value: title } = bookTitle;

    const bookAuthor = document.getElementById('author');
    const { value: author } = bookAuthor;

    BookValidation.validateBook(title, author);
    if (validStatus.isValid) {
      const newBook = new CreateBook(id, title, author);
      this.addBook(newBook);
      DynamicBook.renderBooks(this.library, this);
      validStatus.isValid = false;
      bookTitle.value = '';
      bookAuthor.value = '';
    }
  }

  isCollectionEmpty() {
    if (this.library.length === 0) {
      DynamicBook.renderEmptyMessage();
    }
  }

  saveCollection() {
    localStorage.setItem('books', JSON.stringify(this.library));
  }
}
