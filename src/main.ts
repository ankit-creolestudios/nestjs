import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// import * as session from 'express-session';
// import { Sequelize } from 'sequelize-typescript';
// const sequelizeStore = require('connect-session-sequelize')(session.Store);
// const mystore = new sequelizeStore({
//   db: new Sequelize({ dialect: 'mysql' }),
// });
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(session({ store: mystore }));
  app.setGlobalPrefix('api/v1');
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  await app.listen(4000);
}
bootstrap();
