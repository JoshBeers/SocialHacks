import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from '../users-service.service';
import {TeamsServiceService} from '../teams-service.service';
import {HacksService} from '../hacks.service';

@Component({
  selector: 'app-find-members',
  templateUrl: './find-members.component.html',
  styleUrls: ['./find-members.component.css']
})
export class FindMembersComponent implements OnInit {


  constructor(private userService: UsersServiceService , private teamService: TeamsServiceService,
              private heackService: HacksService) { }

  ngOnInit() {
  }
}
