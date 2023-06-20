import { IsNotEmpty, IsString } from "class-validator"

export class CreateReviewDTO {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  review: string

  @IsNotEmpty()
  @IsString()
  productId: string

  @IsNotEmpty()
  @IsString()
  userId: string
}