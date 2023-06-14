import { Customer } from "../../Types/customer";

export class CreateCustomerDto implements Omit<Customer, "createdAt"> {
  id: number;
  name: string;
  email: string;
}
