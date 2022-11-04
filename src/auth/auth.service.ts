import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { registerDto } from 'src/dto/register.dto';
import { newUserEntity } from 'src/entity/newuser.entity';
import { newuser } from 'src/types/newuser';
export interface IUserService {
  registerNewUser(registeruser: newuser): Promise<newUserEntity>;
}
@Injectable()
export class AuthService implements IUserService {
  constructor(
    @InjectModel(newUserEntity) private authRepo: typeof newUserEntity,
  ) {}
  registerNewUser(registeruser: newuser) {
    console.log(registeruser);
    return this.authRepo.create({ registeruser });
  }
}
