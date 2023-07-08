import { IsNotEmpty } from "class-validator";

export class CreateAddressDto {
  @IsNotEmpty()
  line1: string;

  line2: string;

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
