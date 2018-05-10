import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeammemberfactoryService {

  public static getTeamMembers(Employees): Array<any> {

    return [
      {id: 1, name: "Neil", ext: '9170', email: 'Neil.Beukes@absa.co.za', userid: 'ABNB559', next: 'Linda Beukes', nextnumber: '08338038010', surname: "Beukes", number: "0787441491", location: "270 Republic 4th Floor", birthday: "7 July"},
      {id: 2,name: "Trevor", ext: '9170', email: 'Neil.Beukes@absa.co.za', userid: 'ABNB559', next: 'Linda Beukes', nextnumber: '08338038010', surname: "Theunis", number: "082445683", location: "270 Republic 4th Floor", birthday: "12 September"},
      {id: 3,name: "Shainal", ext: '9170', email: 'Neil.Beukes@absa.co.za', userid: 'ABNB559', next: 'Linda Beukes', nextnumber: '08338038010', surname: "Vallahb", number: "0834567857", location: "270 Republic 4th Floor", birthday: "20 January"},
      {id: 4,name: "Fahima", ext: '9170', email: 'Neil.Beukes@absa.co.za', userid: 'ABNB559', next: 'Linda Beukes', nextnumber: '08338038010', surname: "Grouse", number: "0787466691", location: "270 Republic 4th Floor", birthday: "3 December"}
    ]
  }
}
