import { Component, OnInit } from '@angular/core';
import {Team} from '../class/team';
import {User} from '../class/user';
import {TeamsServiceService} from '../teams-service.service';
import {UsersServiceService} from '../users-service.service';
import {HacksService} from '../hacks.service';

@Component({
  selector: 'app-find-teams',
  templateUrl: './find-teams.component.html',
  styleUrls: ['./find-teams.component.css']
})
export class FindTeamsComponent implements OnInit {


  constructor(private userService: UsersServiceService , private teamService: TeamsServiceService,
              private heackService: HacksService) { }

  ngOnInit() {

  }

  checkIfInTeam(team: Team): boolean {
    for (const id of this.userService.currentUser.team) {
      if ( id === team.id) {
        return false;
      }
    }
    return true;
  }

}
