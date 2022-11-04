import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthProviders } from './auth.provider';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'pvrsapvppape=p=p=',
      signOptions: {
        algorithm: 'HS512',
        expiresIn: '1d',
      },
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    DatabaseModule,
  ],
  controllers: [AuthController],
  providers: [...AuthProviders, AuthService],
})
export class AuthModule {}
