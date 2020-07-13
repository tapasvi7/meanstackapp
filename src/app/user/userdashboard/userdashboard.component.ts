import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  uname:string;
  constructor(private ls:LoginService,private hc:HttpClient) { }

  ngOnInit() {
    this.uname=this.ls.username;
  }

  sendtestreq()
  {
    this.hc.get('user/test').subscribe((res)=>{
      alert(res["message"]);
    });
  }

}
