import { Component, OnInit } from '@angular/core';
import {UsersServiceService} from '../users-service.service';
import {TeamsServiceService} from '../teams-service.service';
import {HacksService} from '../hacks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Social Hacks';

  constructor(private userService: UsersServiceService , private teamService: TeamsServiceService,
              private heackService: HacksService) { }

  ngOnInit() {
  }

}
