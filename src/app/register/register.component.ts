import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private rs: RegisterService) { }

  ngOnInit() {
  }
  submitForm(userObj)
  {
    
    this.rs.doRegister(userObj).subscribe((res)=>{
      alert(res["message"]);
    });
  }
}
