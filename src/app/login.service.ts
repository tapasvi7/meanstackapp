import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username:string;
  userloginstatus:boolean;
  constructor(private hc:HttpClient) { }

  //a method to make http post req
  doLogin(userObj):Observable<any>
  {
    
    console.log("userobj=",userObj);
    return this.hc.post('user/login',userObj);
  }
  doLogout()
  {
    localStorage.removeItem("token")
  }
}
