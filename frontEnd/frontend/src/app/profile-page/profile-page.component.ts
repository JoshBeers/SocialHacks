import { Component, OnInit } from '@angular/core';
import {User} from '../class/user';
import {TeamsServiceService} from '../teams-service.service';
import {HacksService} from '../hacks.service';
import {UsersServiceService} from '../users-service.service';
import {Team} from '../class/team';
import {Hack} from '../class/hack';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {



  constructor(private userService: UsersServiceService , private teamService: TeamsServiceService,
              private heackService: HacksService) {
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

  creatHacksList(): Hack[] {
    const hacks: Hack[] = [];
    for(let hack of this.userService.currentUser.hacks) {
      hacks.push(this.heackService.getHack(hack));
    }

    return hacks;
  }

}
