import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Article } from './article/article.entity';

import { AppController } from './app.controller';
import { ArticleController } from './article/article.controller';


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'blog',
      password: 'xiangsi1!',
      database: 'blog',
      entities: [Article],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ArticleController],
  providers: [AppService,],
})

export class AppModule {}
