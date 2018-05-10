import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksfactoryService {

  public static getApplications(): Array<any> {

    return [
      { id: 1, name: "EOML" },
      { id: 2, name: "QMS" },
      { id: 3, name: "PPHL" },
      { id: 4, name: "MLS" }
    ]
  }

  public static getLinks(applicationId, environmentId): Array<any> {

    return [
      { id: 1, name: "Prod", url: "https:example.com" },
      { id: 2, name: "Prod-internal", url: "https:example.com?orig=intra" },
      { id: 3, name: "Server", url: "https:example.com" }
    ]
  }

  public static getGeneralLinks() {
    return [
      { id: 1, name: "Human Resources", url: "https://hr/"},
      { id: 2, name: "Requests", url: "https://requests/" },
      { id: 3, name: "Password Reset", url: "https://sso/" },
      { id: 4, name: "Cert Now", url: "https://Cert Now/" },
      { id: 5, name: "Udemy", url: "https://BarclaysUdemy.portal.com" },
      { id: 6, name: "Cloud Valuation Application", url: "https://cva.prd.aws.dsarena.com" }
    ]
      
  }
}
