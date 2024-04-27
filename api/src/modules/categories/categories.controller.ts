import { Controller, Get } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { LoggedUserId } from 'src/shared/decorators/LoggedUserId';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(@LoggedUserId() userId: string) {
    return this.categoriesService.findManyByUserId(userId);
  }
}
