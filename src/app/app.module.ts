import { TeammemberService } from './service/teammember/teammember.service';
import { DevLinksService } from './service/links/dev-links/dev-links.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import fontawesome from '@fortawesome/fontawesome';
import { HttpModule } from '@angular/http';
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
    TeamMemberComponent,
    ConfirmationModalComponent,
    TeamSelectModalComponent,
    DevLinksModalComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(), 
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    DevLinksService,
    GeneralLinksService,
    TeammemberService,
    CookieService,
    TeamService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  entryComponents: [
    TeamMemberComponent, 
    ConfirmationModalComponent, 
    TeamSelectModalComponent, 
    DevLinksModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
