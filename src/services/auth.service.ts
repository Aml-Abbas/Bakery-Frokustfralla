import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedIn = false;
  constructor() { }

  signIn(email: string, password: string): void{
    this.signedIn = true;
}
  isSignedIn(){
    return this.signedIn;
  }
  signOut(){
    this.signedIn= false;
  }
}
