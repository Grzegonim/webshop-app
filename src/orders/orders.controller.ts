import { Controller, Get, Body, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './create.order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get('/')
  getAll() {
    return this.ordersService.getAll();
  }

  @Post('/')
  create(@Body() orderData: CreateOrderDTO) {
    this.ordersService.create(orderData);
  } 
}
