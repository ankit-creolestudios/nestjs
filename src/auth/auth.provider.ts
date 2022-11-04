import { newUserEntity } from '../entity/newuser.entity';
export const AuthProviders = [
  {
    provide: 'AUTH_REPO',
    useValue: newUserEntity,
  },
];
