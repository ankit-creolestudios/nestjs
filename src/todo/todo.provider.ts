import { todos } from 'src/entity/todo.entity';
export const TodoProvider = [
  {
    provide: 'TODO_REPO',
    useValue: todos,
  },
];
