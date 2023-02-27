import { Router } from 'express';
import { autoInjectable } from "tsyringe";
import BookService from './BookService';

@autoInjectable()
export default class BookController {
  private bookService: BookService;
  private router: Router;

  constructor(bookService: BookService) {
    this.bookService = bookService;
    this.router = Router()
  }

  public getBooksRoute() {
    return this.bookService.getBooks();
  }

  public routes() {
    this.router.get('/', (_req, res) => res.send(this.getBooksRoute()));
    return this.router;
  }
}
