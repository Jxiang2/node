import BookRepository from './BookRepository';
import { autoInjectable } from "tsyringe";

@autoInjectable()
export default class BookService {
  private bookRepository: BookRepository;

  constructor(bookRepository: BookRepository) {
    this.bookRepository = bookRepository;
  }

  public getBooks() {
    return this.bookRepository.getBooks();
  }
}