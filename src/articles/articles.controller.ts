import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getArticles(): string {
    return this.appService.getArticles();
  }
}