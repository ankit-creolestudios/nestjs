import { Sequelize } from 'sequelize-typescript';
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
      sequelize.addModels([newUser]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
