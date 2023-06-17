import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  private users = [
    { username: "John Doe", password: "changeme" },
    { username: "Jack Man", password: "guess" },
    { username: "Peter Pan", password: "guess what" },
    { username: "Mary Jane", password: "I am a user" },
  ];

  public getUsers() {
    return this.users;
  }

  public getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
