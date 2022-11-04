import { catModel } from './cat.entity';
export const catProvider = [
  {
    provide: 'CAT_REPOSITORY',
    useValue: catModel,
  },
];
