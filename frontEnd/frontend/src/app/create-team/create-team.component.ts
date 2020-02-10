import {Component, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';

import {Team} from '../class/team';
import {UsersServiceService} from '../users-service.service';
import {TeamsServiceService} from '../teams-service.service';
import {HacksService} from '../hacks.service';


@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  team: Team = {id: null , teamName: null, members: null, owner: null, description: null ,
    hacks: null , numberOfMembers: null , lookForMembers: null};


  constructor(private loc: Location, private userService: UsersServiceService , private teamService: TeamsServiceService,
              private heackService: HacksService) { }

  ngOnInit() {
  }

  onBackClick() {
    this.loc.back();
  }

  submit() {

  }
}
