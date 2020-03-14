import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('article')
export class ArticleController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getArticle(): string {
    return this.appService.getArticle();
  }
}
