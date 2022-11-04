import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { newUser } from './entity/newuser.entity';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
