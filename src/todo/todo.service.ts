import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { newUser } from 'src/entity/newuser.entity';
import { todos } from 'src/entity/todo.entity';
import { TodoTypes } from 'src/types/todo';

@Injectable()
export class TodoService {
  constructor(@Inject('TODO_REPO') private todoRepo: typeof todos) {}
  async getAllTodo(user: newUser) {
    return this.todoRepo.findAll({ where: { userId: user.id } });
  }
  async newTask(todos: TodoTypes, user: newUser) {
    try {
      return await this.todoRepo.create({ ...todos, userId: user.id });
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  async updateTask(id, todos: TodoTypes) {
    return this.todoRepo.update({ ...todos }, { where: { id: id } });
  }
  async removeTask(id) {
    return this.todoRepo.destroy({ where: { id: id } });
  }
}
