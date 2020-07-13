import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private ls:LoginService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.ls.userloginstatus=false;
      this.ls.doLogout();
    },0);
  }
  login(dataObj)
  {
    /*if(uname == "admin" && password == "admin")
    {
      console.log("Hello Admin");
      this.router.navigateByUrl('/admin/dashboard');
    }
    else
    {
      console.log("Hello User");  
      this.router.navigateByUrl('/user/dashboard');
    }*/


    this.ls.doLogin(dataObj).subscribe((res)=>{
      

      if(res["message"]=="invalid username")
      {
        alert("invalid username");
      }
      else if(res["message"]=="invalid password")
      {
        alert("invalid password");
      }
      else
      {
        alert("login success");
        localStorage.setItem("token",res["message"]);
        this.ls.userloginstatus=true;
        this.ls.username=res["username"];
        this.router.navigate(['/userdashboard']);
      }

    });
  }

}
