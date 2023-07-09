import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { CustomersModule } from "./customer/customer.module";
import { UserModule } from "./user/user.module";
import { LifeCycleModule } from "./lifecycle/lifecycle.module";

@Module({
  imports: [
    CustomersModule,
    UserModule,
    LifeCycleModule,

    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
