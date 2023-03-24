import type { IBook } from "./IBook";
import { ISBN } from './ISBN';

export class BookService {
  bookRepository: Array<IBook> = [
    {
      isbn: new ISBN('9780123456789'),
      title: 'La Monadologie',
      author: 'Gottfried Wilhelm Leibniz',
      pageCount: 69,
    },
  ];

  getBook(isbn: ISBN): Promise<IBook> {
    return new Promise((resolve, reject) => {
      const book = this.bookRepository.find((book: IBook) => book.isbn.value === isbn.value);
      if (book) {
        resolve(book);
      } else {
        reject(new Error('Book not found'));
      }
    });
  };

  getAllBooks() : Promise<Array<IBook>> {
    return new Promise((resolve, reject) => {
      if (this.bookRepository.length === 0) {
        reject(new Error("No books found"));
      }
      resolve(this.bookRepository);
    })
  }
}
