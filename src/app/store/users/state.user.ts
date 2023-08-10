import { User } from 'src/app/models/user.model';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}
