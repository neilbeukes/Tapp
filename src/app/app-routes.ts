import { AcronymComponent } from "./acronym/acronym.component";
import { Component } from "@angular/core";
import { BoardComponent } from "./board/board.component";
import { RouterModule, Routes } from "@angular/router";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { TeamComponent } from "./team/team.component";
import { LinksComponent } from "./links/links-dev/links.component";
import { HomeComponent } from "./home/home.component";
import { LinksGeneralComponent } from "./links/links-general/links-general.component";
import { LeaveComponent } from "./leave/leave.component";
import { AuthGuardService as AuthGuard } from "./service/authguard/auth-guard.service";

export const appRoutes: Routes = [
  {
    path: "",
    component: HomeComponent,
    runGuardsAndResolvers: "always"
  },
  {
    path: "team",
    component: TeamComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  {
    path: "links/dev",
    component: LinksComponent
  },
  {
    path: "links/general",
    component: LinksGeneralComponent
  },
  {
    path: "leave",
    component: LeaveComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  {
    path: "board",
    component: BoardComponent,
    canActivate: [AuthGuard],
    runGuardsAndResolvers: "always"
  },
  {
    path: "ab",
    component: AcronymComponent
  },
  {
    path: "**",
    component: PagenotfoundComponent
  }
];
