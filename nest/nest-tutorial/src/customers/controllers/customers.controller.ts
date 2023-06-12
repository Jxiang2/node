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
import { CustomersService } from "customers/services/customers.service";

import { CreateCustomerDto } from "../dtos/CreateCustomer.dto";

@Controller("customers")
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // Nest way
  @Get("/search/:id")
  public searchCustomerById(@Param("id", ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomer(id);

    if (customer) {
      return customer;
    }
    throw new HttpException("Customer not found", HttpStatus.NOT_FOUND);
  }

  @Get("")
  public getCustomers() {
    return this.customersService.getCustomers();
  }

  @Post("/create")
  public createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
