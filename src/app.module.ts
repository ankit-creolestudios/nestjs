import { Module } from '@nestjs/common';
import { CatModule } from './cat/cat.module';
import { CrudModule } from './crud/crud.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CatModule, CrudModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
