import {
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { signinuser } from 'src/types/signinuser';
import { newUser } from 'src/entity/newuser.entity';
import { newuser } from 'src/types/newuser';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('AUTH_REPO') private authRepo: typeof newUser,
    private jwt: JwtService,
  ) {}
  async registerNewUser(registeruser: newuser) {
    const hashed = await bcrypt.hash(registeruser.password, 12);
    console.log(typeof hashed);
    const salt = await bcrypt.getSalt(hashed);
    try {
      return await this.authRepo.create({
        ...registeruser,
        password: hashed,
        salt: salt,
      });
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
    const isPaswordmatch = await bcrypt.compare(password, userFind.password);
    if (isPaswordmatch) {
      const jwtPayload = { email };
      const jwttoken = await this.jwt.signAsync(jwtPayload, {
        expiresIn: '1d',
        algorithm: 'HS512',
      });
      return {
        user: {
          firstName: userFind.firstName,
          lastName: userFind.lastName,
          phone: userFind.phone,

          dateofbirth: userFind.dateofbirth,
          email: userFind.email,
        },
        token: jwttoken,
      };
    } else {
      throw new InternalServerErrorException('Invalid credential');
    }
  }
}
