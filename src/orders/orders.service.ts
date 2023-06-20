import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  public getAll(): Promise<Order[]> {
    return this.prismaService.order.findMany();
  }

  public async create(orderData: Omit<Order, 'id'>): Promise<Order> {
    try {
      return await this.prismaService.order.create({
        data: orderData
      });
    }
    catch (err) {
      throw err
    }
  }
}
