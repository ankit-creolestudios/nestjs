//model injection
//In Sequelize the Model defines a table in the database. Instances of this class represent a database row

import { Model, Table, Column } from 'sequelize-typescript';

@Table
export class catModel extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @Column
  breed: string;
}
