import { Column, Model, Table, Unique } from 'sequelize-typescript';
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
}
