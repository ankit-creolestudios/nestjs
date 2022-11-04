import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { signinuser } from 'src/types/signinuser';
import { newUser } from 'src/entity/newuser.entity';
import { newuser } from 'src/types/newuser';
// export interface IUserService {
//   registerNewUser(registeruser: newuser): Promise<newUser>;
// }
@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_REPO') private authRepo: typeof newUser) {}
  async registerNewUser(registeruser: newuser) {
    // console.log(registeruser);
    // return this.authRepo.create({ ...registeruser });
    try {
      return await this.authRepo.create({ ...registeruser });
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
  async signin(user: signinuser) {
    const { email, password } = user;

    const userFind = await this.authRepo.findOne({ where: { email: email } });
    if (!userFind) {
      throw new InternalServerErrorException('Invalid credential');
    }
    const isPaswordmatch = password === userFind.password;
    if (isPaswordmatch) {
      return { user: userFind };
    } else {
      throw new InternalServerErrorException('Invalid credential');
    }
  }
}
