import { DeleteLinksPipe } from './common/pipes/deleteLeave.pipe';
import { AuthService } from './service/auth/auth.service';
import { TeammemberService } from './service/teammember/teammember.service';
import { DevLinksService } from './service/links/dev-links/dev-links.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamComponent } from './team/team.component';
import { LinksComponent } from './links/links-dev/links.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app-routes';
import { AppErrorHandler } from './common/app-error-handler';
import { LinksGeneralComponent } from './links/links-general/links-general.component';
import { SearchPipe} from './common/pipes/search.pipe';
import { DevLinksPipe} from './common/pipes/devLinks.pipe';
import { TeamMemberComponent } from './modals/team-member-modal/team-member.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { TeamSelectModalComponent } from './modals/team-select-modal/team-select-modal.component';
import { TeamService } from './service/team/team.service';
import { GeneralLinksService } from './service/links/general-links/general-links.service';
import { DevLinksModalComponent } from './modals/dev-links-modal/dev-links-modal.component';
import { DeleteLinksModalComponent } from './modals/delete-links-modal/delete-links-modal.component';
import { LeaveComponent } from './leave/leave.component';
import { RecordLeaveModalComponent } from './modals/record-leave-modal/record-leave-modal.component';
import { LeaveService } from './service/leave/leave.service';
import { BoardMessageModalComponent } from './modals/board-message-modal/board-message-modal.component';
import { BoardComponent } from './board/board.component';
import { BoardService } from './service/board/board.service';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';
import { LoginService } from './service/login/login.service';
import { AuthGuardService } from './service/authguard/auth-guard.service';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule } from '@angular/common/http';
import { DeleteleavemodalComponent } from './modals/delete-leave-modal/delete-leave-modal.component';
import { GeneralLinksModalComponent } from './modals/general-links-modal/general-links-modal.component';
import { DeleteGeneralLinksModalComponent } from './modals/delete-general-links-modal/delete-general-links-modal.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagenotfoundComponent,
    TeamComponent,
    LinksComponent,
    HomeComponent,
    LinksGeneralComponent,
    SearchPipe,
    DevLinksPipe,
    DeleteLinksPipe,
    TeamMemberComponent,
    ConfirmationModalComponent,
    TeamSelectModalComponent,
    DevLinksModalComponent,
    DeleteLinksModalComponent,
    LeaveComponent,
    RecordLeaveModalComponent,
    BoardMessageModalComponent,
    BoardComponent,
    LoginModalComponent,
    DeleteleavemodalComponent,
    GeneralLinksModalComponent,
    DeleteGeneralLinksModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        authScheme: '',
        whitelistedDomains: ['localhost:3000', '22.246.130.254:3000', '22.246.130.254', '22.246.130.254:80']
      }
    }),
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes, {onSameUrlNavigation: 'reload'}
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DevLinksService,
    GeneralLinksService,
    TeammemberService,
    CookieService,
    TeamService,
    LeaveService,
    BoardService,
    AuthService,
    LoginService,
    AuthGuardService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  entryComponents: [
    TeamMemberComponent,
    ConfirmationModalComponent,
    TeamSelectModalComponent,
    DevLinksModalComponent,
    DeleteLinksModalComponent,
    RecordLeaveModalComponent,
    BoardMessageModalComponent,
    LoginModalComponent,
    DeleteleavemodalComponent,
    GeneralLinksModalComponent,
    DeleteGeneralLinksModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
