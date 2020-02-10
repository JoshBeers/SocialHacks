import { Injectable } from '@angular/core';
import {Team} from './class/team';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsServiceService {

  teams: Team[];
  testing = false;
  currentTeam: Team;
  BASE_URL = 'http://localhost:63145';


  constructor(private http: HttpClient) {
    this.teams = [];

    this.testingSetup();
    this.currentTeam = this.teams[0];

    this.normalSetup();
    this.currentTeam = this.getTeam(1);

  }

  private testingSetup() {
    this.teams.push({owner: 1, members: [2], teamName: 'the aquestirans',
      description: 'this team has house rolls', numberOfMembers: 3 , lookForMembers: true , id: 1, hacks: 1});
  }

  async normalSetup() {
    console.log('normal setup' );
    await this.http.get(this.BASE_URL + '/teams/get').subscribe(( value: any[]) => {
      // console.log('http went through normal setup ' + this.pharseIntArrays(value[0].hacks));

      this.teams = [];
      for(let l of value) {
        this.teams.push({id: l.id, owner: l.ownerId, teamName: l.teamName,
          lookForMembers: (l.lookingForMembers === 'true') , hacks: l.hackId ,
          numberOfMembers: l.numberOfMembers , description: l.discription,
          members: this.pharseIntArrays( l.members)
        });
      }
      console.log(this.teams);
      this.currentTeam = this.getTeam(1);
      //

      // this.users = value;
    });

  }

  private pharseIntArrays( tem: string): number[] {
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




  getTeam(id: number): Team {

    for (let team of this.teams) {
      if (team.id === id) {
        return team;
      }
    }
    return null;
  }

  setTeam(id: number) {

    for (let team of this.teams) {
      if (team.id === id) {
        this.currentTeam = team;
      }
    }

  }
}
