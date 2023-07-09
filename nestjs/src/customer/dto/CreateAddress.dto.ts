import { IsNotEmpty } from "class-validator";

interface CreateAddress {
  line1: string;
  line2?: string;
  zip: string;
  city: string;
  state: string;
}

export class CreateAddressDto implements CreateAddress {
  @IsNotEmpty()
  line1: string;

  line2?: string;

  @IsNotEmpty()
  zip: string;

  @IsNotEmpty()
  city: string;

  @IsNotEmpty()
  state: string;

  constructor(createAddressDto: CreateAddressDto) {
    this.line1 = createAddressDto.line1;
    this.line2 = createAddressDto.line2;
    this.zip = createAddressDto.zip;
    this.city = createAddressDto.city;
    this.state = createAddressDto.state;
  }
}
