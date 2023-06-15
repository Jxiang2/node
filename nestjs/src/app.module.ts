import { Module } from "@nestjs/common";
import { CustomersModule } from "./customer/customer.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [CustomersModule, UserModule],
})
export class AppModule {}
