import { Column, Model, Table, Unique } from 'sequelize-typescript';
@Table({})
export class newUserEntity extends Model {
  @Column({})
  firstName: string;
  @Column({})
  lastName: string;

  @Column({})
  phone: string;
  @Column({})
  password: string;

  @Column({})
  dateofbirth: string;

  @Unique
  @Column({})
  email: string;
}
