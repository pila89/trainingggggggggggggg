import { Adresse } from './adresse.model';

export interface User {
  name: string;
  vorname: string;
  phone: number;
  email: string;
  adress: Adresse[];
}
