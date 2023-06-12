import { Customer } from "../types/Customer";

export class CreateCustomerDto implements Omit<Customer, "createdAt"> {
  id: number;
  name: string;
  email: string;
}
