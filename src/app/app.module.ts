import { TeammemberfactoryService } from './service/teammemberfactory/teammemberfactory.service';
import { LinksfactoryService } from './service/linksfactory/linksfactory.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import fontawesome from '@fortawesome/fontawesome';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamComponent } from './team/team.component';
import { LinksComponent } from './links/links.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app-routes';
import { AppErrorHandler } from './common/app-error-handler';
import { LinksGeneralComponent } from './links-general/links-general.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagenotfoundComponent,
    TeamComponent,
    LinksComponent,
    HomeComponent,
    LinksGeneralComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    NgbModule.forRoot(), 
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    LinksfactoryService,
    TeammemberfactoryService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
