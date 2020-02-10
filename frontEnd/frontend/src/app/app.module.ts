import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { FindTeamsComponent } from './find-teams/find-teams.component';
import { FindMembersComponent } from './find-members/find-members.component';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatListModule, MatTableModule, MatToolbarModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateTeamComponent } from './create-team/create-team.component';
import {FormsModule} from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'findTeamMembers',
    component: FindMembersComponent
  },
  {
    path: 'findTeams',
    component: FindTeamsComponent
  },
  {
    path: 'team',
    component: TeamPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'createTeam',
    component: CreateTeamComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilePageComponent,
    TeamPageComponent,
    FindTeamsComponent,
    FindMembersComponent,
    LandingComponent,
    CreateTeamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    CdkTableModule,
    MatListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
