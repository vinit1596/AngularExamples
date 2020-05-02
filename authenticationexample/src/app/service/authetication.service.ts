import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutheticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(user){
    console.log("authenticate method")
    return this.httpClient.post("http://localhost:8083/authenticate", user, {responseType: 'text'}).pipe(
      map(
        userData => {
         console.log("userData:"+userData)
         let tokenStr = userData;
        sessionStorage.setItem('username','user.username');
        sessionStorage.setItem('token','Bearer '+tokenStr);
        })
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('token');
  }
    
}
