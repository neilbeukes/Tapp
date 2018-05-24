import { TeammemberService } from './service/teammember/teammember.service';
import { LinksService } from './service/links/links.service';
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
import { FilterPipe} from './common/pipes/filter.pipe';
import { TeamMemberComponent } from './modals/team-member-modal/team-member.component';
import { ConfirmationModalComponent } from './modals/confirmation-modal/confirmation-modal.component';
import { TeamSelectModalComponent } from './modals/team-select-modal/team-select-modal.component';
import { TeamService } from './service/team/team.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagenotfoundComponent,
    TeamComponent,
    LinksComponent,
    HomeComponent,
    LinksGeneralComponent,
    FilterPipe,
    TeamMemberComponent,
    ConfirmationModalComponent,
    TeamSelectModalComponent
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
    LinksService,
    TeammemberService,
    CookieService,
    TeamService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  entryComponents: [TeamMemberComponent,ConfirmationModalComponent,TeamSelectModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
