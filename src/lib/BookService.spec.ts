import { describe, expect, it, test } from 'vitest';

import { BookService } from './model/BookService';
import { ISBN } from './model/ISBN';

describe('BookService.ts', () => {
  it('Should get a book', async () => {
    const isbn = new ISBN('9780123456789');
    const bookService = new BookService();
    const book = await bookService.getBook(isbn);
    expect(book.isbn.value).toBe(isbn.value);
  });
  it('Should get all book', async () => {
    const bookService = new BookService();
    const books = await bookService.getAllBooks();
    expect(books.length).toBe(2);
  });
});
