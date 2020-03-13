import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { AppController } from './app.controller';
import { ArticlesController } from './articles/articles.controller';

@Module({
  imports: [],
  controllers: [AppController, ArticlesController],
  providers: [AppService],
})

export class AppModule {}
