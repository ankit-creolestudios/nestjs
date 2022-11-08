import { Sequelize } from 'sequelize-typescript';
import { Player } from 'src/entity/modalassociation/onetomany/player.entity';
import { Team } from 'src/entity/modalassociation/onetomany/team.entity';
import { todos } from 'src/entity/todo.entity';
import { newUser } from '../entity/newuser.entity';
export const databaseProvider = [
  {
    provide: 'Sequelize',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Creole@123',
        database: 'relationDB',
      });
      sequelize.addModels([newUser, todos, Player, Team]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
