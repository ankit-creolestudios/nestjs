import { PassportStrategy } from '@nestjs/passport';
import { newUser } from '../entity/newuser.entity';
import { validate } from 'class-validator';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Inject, UnauthorizedException } from '@nestjs/common';
import { signinuser } from 'src/types/signinuser';

export class JWTPersonalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('AUTH_REPO') private authRepo: typeof newUser) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'pvrsapvppape=p=p=',
    });
  }
  async validate(payload) {
    const { email } = payload;
    const user = await this.authRepo.findOne({ where: { email: email } });
    if (!user) {
      throw new UnauthorizedException();
    } else {
      return user;
    }
  }
}
