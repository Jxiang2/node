import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private users = [
    { id: 1, username: "John Doe", password: "changeme" },
    { id: 2, username: "Jack Man", password: "guess" },
    { id: 3, username: "Peter Pan", password: "guess what" },
    { id: 4, username: "Mary Jane", password: "I am a user" },
  ];

  public getUsers() {
    return this.users;
  }

  public getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  public getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
