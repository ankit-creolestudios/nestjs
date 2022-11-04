import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/datbase.module';
import { CatController } from './cat.controller';
import { catProvider } from './cat.provider';
import { CatService } from './cat.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CatController],
  providers: [CatService, ...catProvider],
})
export class CatModule {}
