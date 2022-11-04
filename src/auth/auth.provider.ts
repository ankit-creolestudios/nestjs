import { newUser } from '../entity/newuser.entity';
export const AuthProviders = [
  {
    provide: 'AUTH_REPO',
    useValue: newUser,
  },
];
