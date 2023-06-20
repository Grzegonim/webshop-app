import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  password: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  phone: string

  hashedRt: string
}