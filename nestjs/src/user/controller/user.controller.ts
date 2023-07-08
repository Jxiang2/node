import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common";
import { UserService } from "../service/user.service";
import { UserVo } from "../serializer/user.serializer";
import { UserNotFoundException } from "../handler/UserNotFoundException";
import { HttpExceptionFilter } from "../handler/http-exception.filter";

@Controller("users")
export class UserController {
  constructor(@Inject("USER_SERVICE") private userService: UserService) {}

  @Get("")
  @UseInterceptors(ClassSerializerInterceptor)
  public getUsers() {
    const users = this.userService.getUsers();
    return users.map((user) => new UserVo(user));
  }

  @Get("/username/:username")
  @UseInterceptors(ClassSerializerInterceptor)
  public getUserByUsername(@Param("username") username: string) {
    const user = this.userService.getUserByUsername(username);
    if (!!user) {
      return new UserVo(user);
    } else {
      throw new HttpException("User not found", HttpStatus.NOT_FOUND);
    }
  }

  @Get("/id/:id")
  @UseInterceptors(ClassSerializerInterceptor)
  @UseFilters(HttpExceptionFilter)
  public getUserById(@Param("id", ParseIntPipe) id: number) {
    const user = this.userService.getUserById(id);
    if (!!user) {
      return new UserVo(user);
    } else {
      throw new UserNotFoundException();
    }
  }
}
