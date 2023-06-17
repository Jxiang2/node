import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "../service/user.service";
import { UserVo } from "../serializer/user.serializer";

@Controller("users")
export class UserController {
  constructor(@Inject("USER_SERVICE") private userService: UserService) {}

  @Get("")
  @UseInterceptors(ClassSerializerInterceptor)
  public getUsers() {
    const users = this.userService.getUsers();
    return users.map((user) => new UserVo(user));
  }

  @Get(":username")
  @UseInterceptors(ClassSerializerInterceptor)
  public getUserByUsername(@Param("username") username: string) {
    const user = this.userService.getUserByUsername(username);

    if (!!user) {
      return new UserVo(user);
    } else {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
  }
}
