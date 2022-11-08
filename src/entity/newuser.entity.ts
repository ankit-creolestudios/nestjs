import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { todos } from './todo.entity';
@Table
export class newUser extends Model {
  @Column
  firstName: string;
  @Column
  lastName: string;

  @Column
  phone: string;
  @Column
  password: string;

  @Column
  dateofbirth: string;

  @Unique
  @Column
  email: string;
  @Column
  salt: string;
  @HasMany(() => todos, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  todo: todos[];
}
