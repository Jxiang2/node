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
  id!: number;

  @IsNotEmpty()
  @IsLowercase()
  name!: string;

  @IsEmail()
  email!: string;

  @IsBoolean()
  verified!: boolean;

  @ValidateNested()
  @IsNotEmptyObject()
  @Type(() => CreateAddressDto)
  address!: CreateAddressDto;
}
