import { ISBN } from './ISBN';

type Title = string;
type Author = string;
type PageCount = number;

export interface IBook {
  isbn: ISBN;
  title: Title;
  author: Author;
  pageCount: PageCount;
}
