import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { newUserEntity } from 'src/entity/newuser.entity';
import { DatabaseModule } from 'src/database/datbase.module';

@Module({
  imports: [SequelizeModule.forFeature([newUserEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
