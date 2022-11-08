import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { newUser } from './entity/newuser.entity';
import { AppController } from './app.controller';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [AuthModule, TodoModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
