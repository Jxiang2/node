import { Module } from "@nestjs/common";
import { CustomersModule } from "./customer/customer.module";

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
