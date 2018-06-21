import { BoardComponent } from './board/board.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamComponent } from './team/team.component';
import { LinksComponent } from './links/links-dev/links.component';
import { HomeComponent } from './home/home.component';
import { LinksGeneralComponent } from './links/links-general/links-general.component';
import { LeaveComponent } from './leave/leave.component';
import { 
  AuthGuardService as AuthGuard 
} from './service/authguard/auth-guard.service';


export const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'team',
    component: TeamComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'links/dev',
    component: LinksComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'links/general',
    component: LinksGeneralComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'leave',
    component: LeaveComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'board',
    component: BoardComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];