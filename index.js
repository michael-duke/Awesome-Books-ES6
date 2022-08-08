import BooksCollection from './modules/book-collection.js';
import { DynamicBook, status } from './modules/dynamic-book.js';
import Time from './modules/time.js';
import { singlePageNav, toggleActiveLink } from './modules/spa-navigation.js';

/* Initialization */
const bookCollection = new BooksCollection();
bookCollection.isCollectionEmpty();
const { messageOn } = status;

if (!messageOn) DynamicBook.renderBooks(bookCollection.library, bookCollection);
const addBtn = document.querySelector('.add-btn');
addBtn.onclick = () => bookCollection.getInput();

setInterval(Time.displayTime, 10);
singlePageNav();
toggleActiveLink();
