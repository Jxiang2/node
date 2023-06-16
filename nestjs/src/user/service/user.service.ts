import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserVo } from "../serializer/user.serializer";

@Injectable()
export class UserService {
  private users = [
    { username: "John Doe", password: "changeme" },
    { username: "Jack Man", password: "guess" },
    { username: "Peter Pan", password: "guess what" },
    { username: "Mary Jane", password: "I am a user" },
  ];

  public getUsers() {
    return this.users.map((user) => new UserVo(user));
  }

  public getUserByUsername(username: string) {
    const user = this.users.find((user) => user.username === username);

    if (!!user) {
      return new UserVo(user);
    } else {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
  }
}
