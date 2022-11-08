import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { newUser } from 'src/entity/newuser.entity';
import { TodoTypes } from 'src/types/todo';
import { User } from 'src/utilities/user.decorator';
import { TodoService } from './todo.service';

@Controller('todo')
@UseGuards(AuthGuard())
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get('/')
  getAllTodos(@User() user: newUser) {
    return this.todoService.getAllTodo(user);
  }
  @Post('/new')
  newTask(@Body() todos: TodoTypes, @User() user: newUser) {
    return this.todoService.newTask(todos, user);
  }

  @Patch('/update/:id')
  updateTask(@Param('id') id: number, @Body() todos: TodoTypes) {
    return this.todoService.updateTask(id, todos);
  }
  @Delete('/remove/:id')
  removeTask(@Param('id') id: number) {
    return this.todoService.removeTask(id);
  }
}
