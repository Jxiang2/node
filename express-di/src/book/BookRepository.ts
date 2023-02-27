export default class BookRepository {
  private books: Array<{id: number, name: string}> = [
    { id: 1, name: 'The Pragmatic Programmer' },
    { id: 2, name: 'Poems that Solve Puzzles' },
  ];

  public getBooks() {
    return this.books;
  }
}