import { Component } from '@angular/core';
import { _User } from '../interface/_User';
import { RegistrationService } from '../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  msg='';
  user= new _User();
  constructor(private service:RegistrationService,
    private router:Router){}

  registerUser(){
    this.service.register(this.user).subscribe(
      data=>{
        console.log("resp received");
        this.msg="Registration Successful";
      },
      error=>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )

  }

}
