import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Inject,
  Param,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "../service/user.service";

@Controller("users")
export class UserController {
  constructor(@Inject("USER_SERVICE") private userService: UserService) {}

  @Get("")
  @UseInterceptors(ClassSerializerInterceptor)
  public getUsers() {
    return this.userService.getUsers();
  }

  @Get(":username")
  @UseInterceptors(ClassSerializerInterceptor)
  public getUserByUsername(@Param("username") username: string) {
    return this.userService.getUserByUsername(username);
  }
}
