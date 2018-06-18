import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isAuthenticated():boolean{
    return false
  }

  currentUser():string{
    return ""
  }
}
