import {
  IsEmail,
  IsLowercase,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
  IsNotEmptyObject,
  IsBoolean,
} from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";
import { Type } from "class-transformer";

export class CreateCustomerDto {
  @IsNumberString()
  id: number;

  @IsNotEmpty()
  @IsLowercase()
  name: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  verified: boolean;

  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;

  constructor(createCustomerDto: CreateCustomerDto) {
    this.id = createCustomerDto.id;
    this.name = createCustomerDto.name;
    this.email = createCustomerDto.email;
    this.verified = createCustomerDto.verified;
    this.address = createCustomerDto.address;
  }
}
