import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/CreateCustomer.dto";

@Injectable()
export class CustomerService {
  private customers = [
    { id: 1, email: "www.abc.com", createdAt: new Date(), name: "John Doe" },
    { id: 2, email: "www.def.com", createdAt: new Date(), name: "Jack Man" },
    { id: 3, email: "www.ghi.com", createdAt: new Date(), name: "Peter Pan" },
    { id: 4, email: "www.jkl.com", createdAt: new Date(), name: "Mary Jane" },
  ];

  public findCustomer(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  public getCustomers() {
    return this.customers;
  }

  public createCustomer(payload: CreateCustomerDto) {
    this.customers.push({
      ...payload,
      createdAt: new Date(),
    });
  }
}
