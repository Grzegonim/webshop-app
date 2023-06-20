import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('/')
  getAll(): any {
    return this.productsService.getAll();
  }

  @Get('/promotions')
  getAllPromotions(): any {
    return this.productsService.getAllPromotions();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.productsService.getById(id);
  }

  @Get('/category/:category')
  getByCategory(@Param('category') category: string) {
    return this.productsService.getByCategory(category);
  }

  @Get('/search/:searchPhrase')
  getBySearchPhrase(@Param('searchPhrase') searchPhrase: string) {
    return this.productsService.getBySearchPhrase(searchPhrase);
  }
}
