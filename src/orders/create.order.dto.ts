import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateOrderDTO {
  id: string
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  address: string

  @IsNotEmpty()
  @IsString()
  email: string

  @IsNotEmpty()
  @IsString()
  phone: string

  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  delivery: string

  @IsNotEmpty()
  @IsNumber()
  orderPrice: number



 
  cart: Array<object>
}