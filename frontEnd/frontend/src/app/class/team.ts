import {User} from './user';

export interface Team {

  id: number;
  teamName: string;
  description: string;
  numberOfMembers: number;
  lookForMembers: boolean;
  owner: number;
  members: number[];
  hacks: number;

}
