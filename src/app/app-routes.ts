import { BoardComponent } from './board/board.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamComponent } from './team/team.component';
import { LinksComponent } from './links/links-dev/links.component';
import { HomeComponent } from './home/home.component';
import { LinksGeneralComponent } from './links/links-general/links-general.component';
import { LeaveComponent } from './leave/leave.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'links/dev',
    component: LinksComponent
  },
  {
    path: 'links/general',
    component: LinksGeneralComponent
  },
  {
    path: 'leave',
    component: LeaveComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];