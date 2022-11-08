import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/database/database.module';
import { TodoController } from './todo.controller';
import { TodoProvider } from './todo.provider';
import { TodoService } from './todo.service';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [TodoController],
  providers: [...TodoProvider, TodoService],
})
export class TodoModule {}
