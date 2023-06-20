import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDTO } from './create.review.dto';
import { Review } from '@prisma/client';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get('/')
  getAll(): any {
    return this.reviewsService.getAll();
  }

  @Post('/')
  addReview(@Body() reviewData: CreateReviewDTO): Promise<Review> {
    return this.reviewsService.addReview(reviewData);
  }
}
