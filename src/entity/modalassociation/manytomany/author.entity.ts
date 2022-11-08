import { BelongsToMany, Model, Table } from 'sequelize-typescript';
import { Book } from './book.entiy';
import { BookAuthor } from './bookauthor.entity';

@Table
export class Author extends Model {
  @BelongsToMany(() => Book, () => BookAuthor)
  books: Book[];
}
