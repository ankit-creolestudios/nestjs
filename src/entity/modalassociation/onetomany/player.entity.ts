import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from './team.entity';
@Table
export class Player extends Model {
  @Column
  name: string;
  @Column
  age: number;
  @Column({ type: DataType.ENUM('MALE', 'FEMALE', 'OTHERS') })
  gender: 'MALE' | 'FEMALE' | 'OTHERS';

  @ForeignKey(() => Team)
  @Column
  teamId: number;
  @BelongsTo(() => Team)
  team: Team;
}
