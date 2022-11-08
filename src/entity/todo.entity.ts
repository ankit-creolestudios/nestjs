import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { newUser } from './newuser.entity';
export enum TodoStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  COMPLETED = 'COMPLETED',
}

@Table
export class todos extends Model {
  @Column
  task: string;
  @Column
  description: string;
  @Default(TodoStatus.OPEN)
  @Column({
    type: DataType.ENUM(TodoStatus.OPEN, TodoStatus.WIP, TodoStatus.COMPLETED),
  })
  status: TodoStatus.OPEN | TodoStatus.WIP | TodoStatus.COMPLETED;

  @ForeignKey(() => newUser)
  @AllowNull(false)
  @Column
  userId: number;
  @BelongsTo(() => newUser)
  user: newUser;
}
