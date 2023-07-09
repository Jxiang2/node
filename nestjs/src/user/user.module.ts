import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

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
