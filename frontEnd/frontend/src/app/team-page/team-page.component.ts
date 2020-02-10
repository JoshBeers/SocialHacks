import { Component, OnInit } from '@angular/core';
import {Team} from '../class/team';
import {User} from '../class/user';
import {UsersServiceService} from '../users-service.service';
import {TeamsServiceService} from '../teams-service.service';
import {Hack} from '../class/hack';
import {HacksService} from '../hacks.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {



  constructor(private userService: UsersServiceService, private teamService: TeamsServiceService, private hackService:HacksService) {
  }


  ngOnInit() {

  }

  createTeamsButton(): Team[] {
    const teams: Team[] = [];
    for (let team of this.userService.currentUser.team){
      teams.push(this.teamService.getTeam(team));
    }
    return teams;
  }

  teamButtonClick( team: Team) {
    this.teamService.setTeam(team.id);
  }

  getTeamOwnerName(team: Team): string {
    return this.userService.getUserFromId(team.owner).userName;
  }



}
