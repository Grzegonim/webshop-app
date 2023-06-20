import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      include: { reviews: true }
    });
  }

  public getAllPromotions(): Promise<Product[]> {
    return this.prismaService.product.findMany({
      where: { promotion: true },
      include: { reviews: true }
    });
  }

  public async getById(id: Product['id']): Promise<Product | null> {
    const prod = await this.prismaService.product.findUnique({
      where: { id },
      include: { reviews: true }
    })
    if(!prod) throw new NotFoundException('Product not found');
    return prod;
  }

  public async getBySearchPhrase(searchPhrase: string): Promise<Product[]> {
    return await this.prismaService.product.findMany({
      where: { 
        name: {
          contains: searchPhrase
        }
      },
      include: { reviews: true }
    });
  }

  public async getByCategory(category: string): Promise<Product[]> {
    return await this.prismaService.product.findMany({
      where: { 
        category: {
          contains: category
        }
      },
      include: { reviews: true }
    });
  }
}
