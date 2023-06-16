import { Module } from "@nestjs/common";
import { UserController } from "./controller/user.controller";
import { UserService } from "./service/user.service";

@Module({
  controllers: [UserController],
  providers: [
    {
      // Enable named injection
      provide: "USER_SERVICE",
      useClass: UserService,
    },
  ],
})
export class UserModule {}
