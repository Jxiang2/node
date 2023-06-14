import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from "@nestjs/common";
import { CustomerService } from "../service/customer.service";

import { CreateCustomerDto } from "../dto/CreateCustomer.dto";

@Controller("customers")
export class CustomerController {
  constructor(private readonly customersService: CustomerService) {}

  @Get("/search/:id")
  public searchCustomerById(@Param("id", ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomer(id);
    if (!customer) {
      throw new HttpException("Customer not found", HttpStatus.NOT_FOUND);
    }
    return customer;
  }

  @Get("")
  public async getCustomers() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return this.customersService.getCustomers();
  }

  @Post("/create")
  public createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
