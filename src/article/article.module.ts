import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { Article } from './article.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}