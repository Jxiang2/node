import { Module } from "@nestjs/common";
import { CustomersModule } from "./customer/customer.module";
import { UserModule } from "./user/user.module";
import { LifeCycleModule } from "./lifecycle/lifecycle.module";

@Module({
  imports: [CustomersModule, UserModule, LifeCycleModule],
})
export class AppModule {}
