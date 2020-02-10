import { Injectable } from '@angular/core';
import {User} from './class/user';
import {HttpClient} from '@angular/common/http';
import {normalizeSlashes} from 'ts-node';
import {TeamsServiceService} from './teams-service.service';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  users: User[];
  testing = false;
  currentUser: User;
  BASE_URL = 'http://localhost:63145';

  startingUser = 1;

  constructor(private http: HttpClient, private teamService: TeamsServiceService) {

    this.users = [];
    this.testingSetup();
    this.currentUser = this.users[1];

    this.normalSetup();
    this.currentUser = this.users[this.startingUser];

  }

  testingSetup() {
    this.users.push({ userName: 'userName1', id: 1, team: [1] , hacks: [1], roll: 'mule'});
    this.users.push({ userName: 'userName2', id: 2, team: [1] , hacks: [1], roll: 'horse'});
  }

  async normalSetup() {
    console.log('normal setup' );
    await this.http.get(this.BASE_URL + '/user/get').subscribe(( value: any[]) => {
     // console.log('http went through normal setup ' + this.pharseIntArrays(value[0].hacks));

      this.users = [];
      for(let l of value) {
        this.users.push({id: l.id, userName: l.userName, hacks: this.pharseIntArrays(l.hacks),
          team: this.pharseIntArrays(l.teams), roll: l.roll});
      }
      console.log(this.users);
      this.currentUser = this.users[this.startingUser];

     // this.users = value;
    });

  }

  private pharseIntArrays( tem: string): number[] {
    if (tem.length === 2) {
      return [];
    }
    let temp: number[] = [];
    tem = tem.substring(1, tem.length - 1 );
    let t = tem.split(',');

    for (let c of t) {
      // tslint:disable-next-line:radix
      temp.push( parseInt(c));
    }
    // console.log(temp);
    return temp;
  }

  setCurrentUser(id: number) {

      for (let user of this.users) {
        if (user.id === id) {
          this.currentUser = user;
          break;
        }
      }
  }

  getUserFromId(id: number): User {

    for (let user of this.users) {
      if (user.id === id) {
       return user;
      }
    }
  }



  isTeamOwner(): boolean {
    for (let t of this.currentUser.team) {
      if (this.teamService.getTeam(t).owner === this.currentUser.id) {
        return true;
      }

    }
    return false;
  }
}
