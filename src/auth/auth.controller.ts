import { Body, Controller, Post } from '@nestjs/common';
import { registerDto } from 'src/dto/register.dto';
import { newuser } from 'src/types/newuser';
import { signinuser } from 'src/types/signinuser';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('register')
  registerUser(@Body() registerUser: newuser) {
    return this.authService.registerNewUser(registerUser);
  }
  @Post('signin')
  signin(@Body() user: signinuser) {
    return this.authService.signin(user);
  }
}
