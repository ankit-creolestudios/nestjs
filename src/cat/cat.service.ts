import { Inject, Injectable } from '@nestjs/common';
import { catModel } from './cat.entity';

@Injectable()
export class CatService {
  constructor(
    @Inject('CAT_REPOSITORY') private catRepository: typeof catModel,
  ) {}
  findAll() {
    return this.catRepository.findAll();
  }
}
