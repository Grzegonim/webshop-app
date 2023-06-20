import { Injectable } from '@nestjs/common';
import { Review } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';
import { ConflictException } from '@nestjs/common';
@Injectable()
export class ReviewsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Review[]> {
    return this.prismaService.review.findMany({
      include: { product: true }
    });
  }

  public async addReview(reviewData: Omit<Review, 'id'>): Promise<Review> {
    const { productId, userId, ...otherData } = reviewData;
    const reviews = await this.prismaService.review.findMany({
      where: {
        productId: productId,
      },
    })

    if (reviews.length === 0) {
      const review = await this.prismaService.review.create({
        data: {
          ...otherData,
          userId,
          product: {
            connect: { id: productId }
          }
        }
      })
      return review;
    } else {
      for(let rev in reviews) {
        if (reviews[rev].userId !== userId) {
          const review = await this.prismaService.review.create({
            data: {
              ...otherData,
              userId,
              product: {
                connect: { id: productId }
              }
            }
          })
          return review;
        } else {          
          throw new ConflictException()
        }
      }
    }
  }
}
