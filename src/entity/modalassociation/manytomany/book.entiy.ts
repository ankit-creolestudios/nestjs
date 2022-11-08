import { BelongsToMany, Model, Table } from 'sequelize-typescript';
import { Author } from './author.entity';
import { BookAuthor } from './bookauthor.entity';

@Table
export class Book extends Model {
  @BelongsToMany(() => Author, () => BookAuthor)
  authors: Author[];
}
